---
title: BI Skills Matrix
description: The technical language stack and practices behind the Marathon BI function
---

# 🎓 BI Skills Matrix

**Legend:** ⭐ Expert · ✅ Advanced · 🔹 Working

## Languages & Engines

| Skill | Level | Used In |
|---|:---:|---|
| SQL (MySQL 8 — CTEs, window fns, generated cols) | ⭐ | [ETL Guide](../guides/etl-guide.md), [KPI Framework](../projects/epic-4-okr-kpi-framework.md) |
| Python (pandas, ETL, cron, matplotlib/plotly) | ✅ | PY-01/PY-02 automations |
| JavaScript / Google Apps Script (JDBC, Drive, MailApp) | ✅ | [Report Automation](../guides/report-automation.md) |
| C# (retail/Shopify sync tools) | ✅ | Source extraction |
| DAX / M (Power BI) · Looker Studio expressions | ✅ | Dashboards |
| YAML/Markdown (MkDocs) · Bash/cron · Git | ✅ | This library + CI/CD |

## Platforms & Tools

| Tool | Level | Used In |
|---|:---:|---|
| Power BI · Tableau · Looker Studio · Advanced Excel | ⭐ | BI delivery |
| MySQL · PostgreSQL (Zammad) · Elasticsearch · Redis | ✅ | Source & ops awareness |
| DigitalOcean MySQL · Cloudflare Workers/Access · GitHub Actions | ✅ | Hosting & deploy |
| Zammad REST API | 🔹 | [Epic 5](../projects/epic-5-zammad-integration.md) |

## Practices

| Practice | Evidence |
|---|---|
| Star-schema & dimensional modeling | `fact_saless` + `dim_*` |
| Master Data Management (golden record, bridge mapping) | [Epic 3](../projects/epic-3-mdm-dw.md) |
| UOM conversion & unified SKU design | [Epic 3](../projects/epic-3-mdm-dw.md) |
| Data quality & anti-pattern auditing | [Epic 1](../projects/epic-1-source-analysis.md) |
| SLA / OKR / KPI frameworks · ESG reporting | [Epic 4](../projects/epic-4-okr-kpi-framework.md), [Sustainability](../sustainability.md) |
| Governance, RBAC & change control | [Data Governance](../policies/data-governance.md) |