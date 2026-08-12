---
title: Library Index
description: Master contents — every report, query, schema, automation, form and skill in one place
---

# 📚 Library Index

!!! abstract "At a Glance — 2026-08-13"
    **16** reports · **92** queries · **159** schemas · **9** automations ·
    **9** forms · **5** policies · **12+** BI skills — all mapped, linked and governed.

<div class="grid cards" markdown>

-   :material-chart-box:{ .lg .middle } **16 Reports**

    ---

    6 email-distributed · 4 GAS snapshots · 6 dashboards → [Catalog](reports-catalog.md)

-   :material-database-search:{ .lg .middle } **92 Queries**

    ---

    MDM 27 · Sales ETL 28 · GAS 4 · KPI 27 · Audit 1 · Zammad 5 → [Breakdown](#2-queries)

-   :material-table:{ .lg .middle } **159 Schemas**

    ---

    147 `das-db` source · 8 live + 4 planned `etl_test` → [Inventory](#3-schemas)

-   :material-robot:{ .lg .middle } **9 Automations**

    ---

    4 GAS · 2 SQL pipelines · 2 Python · 1 CI/CD → [Registry](#4-automations)

-   :material-form-textbox:{ .lg .middle } **9 Forms**

    ---

    Tickets, requests, surveys, acknowledgements → [Forms](forms-index.md)

-   :material-school:{ .lg .middle } **BI Skills**

    ---

    SQL · Python · GAS · BI tools · governance → [Skills Matrix](skills-matrix.md)

</div>

---

## 1. Reports

| # | Title | Cadence | Type | Link |
|---|---|---|---|---|
| RPT-001 | Daily Sales Report | Daily 08:00 | Email | [Catalog](reports-catalog.md#rpt-001) |
| RPT-002 | Weekly Sales Performance | Mon 09:00 | Email | [Catalog](reports-catalog.md#rpt-002) |
| RPT-003 | Monthly Sales Report | Monthly 10:00 | Email | [Catalog](reports-catalog.md#rpt-003) |
| RPT-004 | Customer Analysis Report | Fri 09:00 | Email | [Catalog](reports-catalog.md#rpt-004) |
| RPT-005 | Inventory Report | Daily 08:30 | Email | [Catalog](reports-catalog.md#rpt-005) |
| RPT-006 | Finance Summary Report | Monthly | Email | [Catalog](reports-catalog.md#rpt-006) |
| GAS-01 | M-Kitchen Master Data Snapshot | Mon 04:00 | GAS | [Automation](../guides/report-automation.md) |
| GAS-02 | M-Trading Master Data Snapshot | Mon 04:00 | GAS | [Automation](../guides/report-automation.md) |
| GAS-03 | M-Kitchen Product Pricelist | Mon 04:00 | GAS | [Automation](../guides/report-automation.md) |
| GAS-04 | MK → M-Express Deliveries Snapshot | Monthly | GAS | [Automation](../guides/report-automation.md) |
| DASH-01…06 | Executive · KR · ESG · SLA↔KR · Product · Delivery | Live | Dashboard | [Epic 4](../projects/epic-4-performance-bi.md) |

## 2. Queries

| Registry | Count | Home |
|---|:---:|---|
| MDM / master-data pipeline | 27 | [ETL Guide 4](../guides/etl-guide.md) |
| Sales fact ETL (chunked) | 28 | [ETL Guide 5](../guides/etl-guide.md) |
| GAS embedded CTE queries | 4 | [Report Automation](../guides/report-automation.md) |
| KPI measurement scripts | 27 | [OKR/KPI Framework](../projects/epic-4-okr-kpi-framework.md) |
| Schema audit (anti-pattern) | 1 | [Epic 1](../projects/epic-1-source-analysis.md) |
| Zammad review queries | 5 | [Epic 5](../projects/epic-5-zammad-integration.md) |

## 3. Schemas

| Layer | Count | Reference |
|---|:---:|---|
| `das-db` operational (source of truth) | 147 | [Schema Appendix](../appendix/database-schema.md) |
| `etl_test` warehouse — live | 8 | [ETL Guide](../guides/etl-guide.md) |
| `etl_test` warehouse — planned | 4 | [Epic 4](../projects/epic-4-okr-kpi-framework.md) / [Epic 5](../projects/epic-5-zammad-integration.md) |

## 4. Automations

| ID | Script | Engine | Cadence | Reference |
|---|---|---|---|---|
| GAS-01…04 | Master data / pricelist / deliveries pulls | Apps Script + JDBC | Weekly/Monthly | [Report Automation](../guides/report-automation.md) |
| ETL-A | Master-data cleaning pipeline | MySQL | On change | [ETL Guide 4](../guides/etl-guide.md) |
| ETL-B | Sales fact pipeline | MySQL | Daily | [ETL Guide 5](../guides/etl-guide.md) |
| PY-01 | Product categorization (ML) | Python | On demand | [Epic 3](../projects/epic-3-mdm-dw.md) |
| PY-02 | KPI/SLA measurement cron | Python | Daily 03:00 | [Epic 4](../projects/epic-4-okr-kpi-framework.md) |
| CI-01 | Docs deploy | Wrangler + GH Actions | On push | [Home](../index.md) |

## 5. Governance Coverage Matrix (term → policy → procedure → form)

| Topic | Policy | Procedure | Form |
|---|---|---|---|
| Acceptable IT use | [IT AUP](../policies/it-acceptable-use.md) | — | [Acknowledgement](forms-index.md#f-05) |
| Ticket priority & SLA | [SLA Guidelines](../policies/ticket-sla-guidelines.md) | [Epic 5 runbook](../projects/epic-5-zammad-integration.md) | [Ticket](forms-index.md#f-01) |
| Data confidentiality | [Governance 7](../policies/data-governance.md) + [AUP 5](../policies/it-acceptable-use.md#5-data-confidentiality) | — | — |
| Report requests | — | [Email Distribution](../guides/email-distribution.md) | [Report Request](forms-index.md#f-02) |
| Data corrections | [Governance 5](../policies/data-governance.md) | [ETL 4](../guides/etl-guide.md) | [Data Correction](forms-index.md#f-03) |
| Access & tokens | [Governance 7](../policies/data-governance.md) | [Automation 5](../guides/report-automation.md) | [Access Request](forms-index.md#f-04) |
| Escalation | [SLA Escalation](../policies/ticket-sla-guidelines.md#escalation-process) | [Runbook 5](../policies/etl-runbook.md) | — |
| Change announcements | — | — | [Announcements](../announcements.md) |

> [Reports Catalog](reports-catalog.md) · [Forms](forms-index.md) · [Skills](skills-matrix.md) · [Policies](../policies/data-governance.md)