---
title: Data Governance Policy
description: Rules for data ownership, quality, master data management, and change control
policy_id: MAR-BI-POL-001
version: 1.0
effective: 2026-08-12
owner: BI Lead (Kaung Myat Kyaw)
---

# 📜 Data Governance Policy

!!! info "MAR-BI-POL-001 · v1.0 · Effective 2026-08-12 · Review cycle: quarterly"

## 1. Purpose

Establish authoritative rules for how Marathon Group's data is **created, transformed, stored, accessed, and retired** across the Unified Data Warehouse.

## 2. Scope

Applies to:

- Operational source: `das-db` (DAS ERP)
- Analytics warehouse: `etl_test` (`dim_*`, `fact_*`, `agg_*`, `map_*`)
- Presentation layer: BI dashboards and this documentation site

## 3. Single Source of Truth (SSOT)

| Domain | Operational SSOT | Analytics SSOT |
|---|---|---|
| Products (BU-level) | `das-db.products` | `etl_test.products` |
| Products (group master) | — | `etl_test.dim_master_products` |
| Sales transactions | `das-db.sales_invoices` / `pos_checkout_invoice_payments` | `etl_test.fact_saless` |
| Business Units | `das-db.businesses` | `etl_test.active_bu` |

!!! warning "Conflict Rule"
    When operational and analytics values disagree, **`das-db` wins for transactions**; **`dim_master_products` wins for product identity**. Discrepancies are logged as data-quality incidents.

## 4. Data Ownership

| Domain | Owner | Steward |
|---|---|---|
| Master product data | BI Lead | Data Engineering |
| Sales & pricing | Sales Ops | BU Managers |
| Customers / suppliers | CRM | BU Accountants |
| Financial ledger | Finance | Chief Accountant |
| BI infrastructure | BI Lead | DevOps |

## 5. Master Data Management Rules

Golden record selection (enforced in [ETL Guide 4](../guides/etl-guide.md)):

1. **Matching priority:** `barcode` → fallback `sku`.
2. **Golden record order:** `is_active DESC` → `updated_at DESC` → `created_at DESC` → `id DESC`.
3. **Normalization:** `UPPER(TRIM(REPLACE(REPLACE(name,'*','X'),' ','')))`.
4. Records with **no barcode and no sku** are excluded from the master and reported weekly.

## 6. Data Quality Standards

| KPI | Threshold | Check |
|---|---|---|
| Master match rate | ≥ 95% | Runbook Validation |
| Duplicate PK in aggregates | 0 | Runbook Validation |
| Daily ETL completion | ≤ 06:00 | Scheduler log |
| Unmatched revenue review | Weekly | Monday data-quality meeting |

## 7. Access Control & Classification

| Level | Examples | Access |
|---|---|---|
| **Public** | Aggregated KPIs, this docs site | All `@marathonmyanmar.com` |
| **Internal** | BU sales, product masters | BI team + BU managers |
| **Confidential** | Customer PII, supplier pricing, credentials | Named individuals (RBAC) |

- Documentation site is protected by **Cloudflare Access** (email domain `@marathonmyanmar.com`).
- Database credentials live only in `.env` / secret stores — **never in Git**.

## 8. Change Management

1. Create a **branch** (`docs/…`, `etl/…`).
2. Open a **Pull Request** with impact notes.
3. **Review** by BI Lead; **approval** by data owner for schema changes.
4. Merge → docs auto-deploy; ETL changes deploy in the maintenance window.
5. Run **post-deploy validation** (Runbook Validation).

!!! danger "Production Protection"
    Direct `INSERT/UPDATE/DELETE` on `etl_test` outside the ETL pipeline is prohibited except for approved manual mappings (`match_method = 'MANUAL'`), which must be logged.

## 9. Related Documents

- [ETL Runbook](etl-runbook.md) — daily operations procedure
- [Data Usage Terms](../terms/data-usage.md) — acceptable use
- [ETL Guide](../guides/etl-guide.md) — technical reference