---
title: Projects Overview & Status
description: Work Breakdown Structure (WBS) of the Unified DW Initiative — daily routine + 4 Epics
owner: Kaung Myat Kyaw
updated: 2026-08-12
---

# 📊 Projects Overview & Status

!!! abstract "Source of Truth"
    This tracker formalizes the team **TO DO LIST** into a Work Breakdown Structure.
    Every task below maps to an Epic page, a technical document, and a completion status.

## 1. Portfolio Dashboard

| Track / Epic | Scope | Tasks | Done | Completion | Detail Page |
|---|---|:---:|:---:|:---:|---|
| 🌅 Daily Routine | Reporting & analytics cadence | 6 | 2 | ~50% | [Daily Routine](daily-routine.md) |
| 🗄️ Epic 1 | Source System Analysis (`das-db`) | 2 | 2 | **100%** | [Epic 1](epic-1-source-analysis.md) |
| 🔄 Epic 2 | Infrastructure & ETL Architecture | 2 | 1 | 50% | [Epic 2](epic-2-infrastructure-etl.md) |
| 🏗️ Epic 3 | MDM & Data Warehouse Build | 9 | 4 | 45% | [Epic 3](epic-3-mdm-dw.md) |
| 📊 Epic 4 | OKRs, KPIs & BI Delivery | 7 | 0 | 10% | [Epic 4](epic-4-performance-bi.md) |
| 🎫 Epic 5 | BI Ticket Resolution | 5 | 0 | 10% | [Epic 4](epic-4-performance-bi.md) |

### Status Legend

| Icon | Meaning |
|:---:|---|
| ✅ | Done — delivered & validated |
| 🚧 | Active — in progress |
| 📋 | Planned — not started |
| 🔁 | Recurring — daily/weekly cadence |

## 2. Roadmap

```mermaid
%%{init: {'fontSize': '17px', 'gantt': {'barHeight': 34, 'barGap': 12, 'topPadding': 80, 'leftPadding': 190, 'rightPadding': 60, 'sectionFontSize': 17, 'useWidth': 1400}}}%%
gantt
    title Unified DW Initiative — Epic Timeline
    dateFormat YYYY-MM-DD
    axisFormat %m/%d
    section Epic 1 · Source Analysis
    Schema observation (147 tbl)   :done, e1a, 2026-07-01, 7d
    Findings & explanation         :done, e1b, after e1a, 4d
    section Epic 2 · Infrastructure
    DigitalOcean DB proposal       :done, e2a, 2026-07-10, 5d
    IT team follow-up (prod DB)    :active, e2b, 2026-07-20, 20d
    section Epic 3 · MDM & DW
    Master products list           :done, e3a, 2026-07-12, 8d
    Regex / name normalization     :done, e3b, after e3a, 4d
    Cross-dimension mapping        :done, e3c, after e3b, 5d
    UOM detection & base UOMs      :active, e3d, 2026-08-15, 10d
    Auto-SKU + conversion factors  :e3e, after e3d, 10d
    section Epic 4 · KPIs & BI
    KPI DB modeling                :active, e4a, 2026-08-18, 10d
    SLA sheets + cron measurement  :e4b, after e4a, 12d
    Looker Studio SLA↔KRs board    :e4c, after e4b, 10d
```

## 3. Cross-Mapping: WBS → Technical Documentation

| WBS Task | Technical Document |
|---|---|
| Master products list / mapping | [ETL Guide 4 — Pipeline A](../guides/etl-guide.md) |
| Sales fact build | [ETL Guide 5 — Pipeline B](../guides/etl-guide.md) |
| Daily refresh procedure | [ETL Runbook](../policies/etl-runbook.md) |
| Schema audit & findings | [Epic 1](epic-1-source-analysis.md) · [Schema Appendix](../appendix/database-schema.md) |
| Governance & change control | [Data Governance](../policies/data-governance.md) |
| Access & usage rules | [Data Usage Terms](../terms/data-usage.md) |