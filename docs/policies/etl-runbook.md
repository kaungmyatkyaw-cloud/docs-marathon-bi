---
title: ETL Daily Runbook
description: Standard operating procedure for the daily Unified DW refresh
procedure_id: MAR-BI-PRC-001
version: 1.0
owner: BI Lead (Kaung Myat Kyaw)
---

# 🔧 ETL Daily Runbook

!!! info "MAR-BI-PRC-001 · v1.0"
    This procedure executes **Pipeline B** (Sales Fact ETL) against `etl_test`.
    Technical reference: [ETL Guide](../guides/etl-guide.md) · Governance: [Data Governance](data-governance.md)

## 1. Schedule & Scope

| Item | Value |
|---|---|
| Frequency | Daily, 02:00 (Myanmar Time) |
| Pipeline A (master products) | **Only** when the product catalog changes |
| Pipeline B (sales fact) | Every day |
| Expected runtime | ~15–20 minutes |

## 2. Pre-Flight Checks

- [ ] `das-db` reachable and **not** in maintenance window
- [ ] Disk free space > 20% on the ETL host
- [ ] Session settings applied:

```sql
USE etl_test;
SET sql_safe_updates = 0;
SET SESSION net_read_timeout  = 600;
SET SESSION net_write_timeout = 600;
SET SESSION wait_timeout      = 28800;
SET SESSION max_execution_time = 0;
```

## 3. Execution Order (Pipeline B)

Follow the numbered steps in the [ETL Guide](../guides/etl-guide.md):

| Stage | Steps | Target Table(s) |
|---|---|---|
| Truncate fact | 23 | `fact_saless` |
| Load Invoice sales | 24 | `fact_saless` |
| Load POS sales | 25 | `fact_saless` |
| BU-level backfill (7 chunks) | 26–32 | `fact_saless.product_sku` etc. |
| Master backfill (5 chunks) | 33–37 | `fact_saless.master_sku` etc. |
| Rebuild bridge | 38–40 | `map_product_master` |
| Unmatched backfill (6 chunks) | 41–46 | `fact_saless.master_product_id` |
| Rebuild aggregate (active BUs) | 47–48 | `agg_product_sales` |

!!! warning "Chunking is mandatory"
    Never run the backfill UPDATEs as a single statement on ~200K rows —
    chunking by `fact_sale_id` prevents CPU spikes and connection timeouts (Error 2013).

## 4. Post-Load Validation

```sql
-- 4.1 Match rate by channel (expect ≥ 95%)
SELECT source_type, COUNT(*) AS total,
  ROUND(SUM(master_product_id IS NOT NULL)/COUNT(*)*100,1) AS match_pct
FROM etl_test.fact_saless
GROUP BY source_type;

-- 4.2 Duplicate aggregate keys (expect 0 rows)
SELECT master_product_id, COUNT(*) AS cnt
FROM etl_test.agg_product_sales
GROUP BY master_product_id
HAVING COUNT(*) > 1;

-- 4.3 Revenue sanity by active BU
SELECT abu.bu_name, fs.source_type,
  ROUND(SUM(fs.net_amount),2) AS revenue
FROM etl_test.fact_saless fs
JOIN etl_test.active_bu abu ON fs.business_id = abu.business_id
WHERE abu.is_active = 1
GROUP BY abu.bu_name, fs.source_type
ORDER BY revenue DESC;
```

## 5. Failure Handling & Escalation

| Symptom | First Action | Escalate To |
|---|---|---|
| Timeout (Error 2013) | Re-run the failed chunk only | BI Lead |
| Duplicate PK (1062) | Verify `GROUP BY` = PK only (Step 48) | BI Lead |
| Collation mismatch (1267) | Align columns to `utf8mb4_0900_ai_ci` | DBA |
| Match rate < 95% | Rebuild `map_product_master` (Steps 38–40) | Data Steward |
| 3 consecutive daily failures | Open incident; notify management | BI Lead + IT |

## 6. Audit & Logging

Every run must log: start/end time, row counts per table, and warning count.
Logs are retained **90 days**. Unmatched-product revenue is reviewed at the
Monday data-quality meeting (see [Data Governance §6](data-governance.md)).