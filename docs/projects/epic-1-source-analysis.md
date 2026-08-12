---
title: "Epic 1 · Source System Analysis"
description: Reverse engineering of the DAS operational database (das-db)
status: ✅ Complete
---

# 🗄️ Epic 1 — Source System Analysis (`das-db` Reverse Engineering)

| ID | Task | Status | Deliverable |
|---|---|:---:|---|
| E1-1 | Schemas Observation (147 tables) | ✅ | [Schema Appendix](../appendix/database-schema.md) — full column/key/index inventory |
| E1-2 | Findings and Explanation | ✅ | OLTP anti-pattern report (below) |

## Key Findings (OLTP Anti-Patterns)

| # | Finding | Example | ETL Impact |
|---|---|---|---|
| 1 | 1NF violation (list-in-column) | `accounts.branches` stores comma-separated IDs | Must explode to junction tables in DW |
| 2 | Missing explicit FKs | `account_transactions.journal_id` | Orphan-risk; validate in ETL |
| 3 | Type anomalies | `customer_credit_invoices.business_id` = `longtext` vs `varchar(191)` | Implicit cast kills indexes — cast in ETL |
| 4 | Redundant/overlapping indexes | `sales_invoices` 7+ index trees | Source write-amplification; extract carefully |
| 5 | No partitioning on hot tables | `stock_histories`, `account_transactions` | Full scans → chunked/date-bounded extracts |
| 6 | CDC stored as BLOB | `pub_sub_message_records.old_obj/new_obj` | Parse JSON in Python with error handling |
| 7 | Rigid ENUMs + numeric-as-text | 38-value `reference_type`; `detail_discount longtext` | Mapping dictionaries + cleansing in ETL |
| 8 | Missing audit columns | `opening_stocks` has no `updated_at` | Use full-refresh for such tables, not delta |

!!! success "Epic 1 closed"
    Findings directly shaped Pipeline B design: chunked UPDATEs, status filters,
    `longtext` casting, and full-refresh strategy for non-audited tables.