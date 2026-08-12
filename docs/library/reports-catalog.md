---
title: Master Report Catalog
description: Single registry of every BI report — cadence, audience, source and owner
---

# 🗂️ Master Report Catalog

!!! quote "Rule"
    **Report Title is the primary key.** Every report maps to exactly one email group,
    one schedule and one owner — no orphan reports.

## Email-Distributed Reports

### RPT-001 — Daily Sales Report
| Field | Value |
|---|---|
| Group | Sales Management · **TO:** sales.manager / sales.team / regional.manager · **CC:** bi.team |
| Schedule | Daily 08:00 · Source: `agg_product_sales` |

### RPT-002 — Weekly Sales Performance
Mon 09:00 · TO: sales.manager / regional.manager · CC: bi.team / management

### RPT-003 — Monthly Sales Report
Monthly 10:00 · TO: management / finance.manager / sales.director · CC: bi.team

### RPT-004 — Customer Analysis Report
Fri 09:00 · CRM Team · ABC/churn analysis on `fact_saless`

### RPT-005 — Inventory Report
Daily 08:30 · Operations · stock + FEFO expiry alerts

### RPT-006 — Finance Summary Report
Monthly · Finance · revenue, AP/AR, P&L inputs

## GAS Snapshots (GAS-01…04)
See [Report Automation](../guides/report-automation.md) for registry, folders and recipients.

## Dashboards (DASH-01…06)
Executive · KR Monitoring · ESG · SLA↔KR · Product Performance · Delivery Ops —
spec in [Epic 4](../projects/epic-4-performance-bi.md).

---

## Adding a New Report (Procedure)

1. Reserve next `RPT-xxx` ID and define title (the primary key).
2. Add row to `dim_report_email_map` (recipients TO/CC) — [Email Distribution](../guides/email-distribution.md).
3. Implement generation (SQL view / GAS / dashboard) and schedule.
4. Register here + announce via [Announcements](../announcements.md).