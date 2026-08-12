---
title: Sustainability
description: How BI enables Marathon's ESG commitments through data
---

# 🌱 Sustainability — BI as the ESG Measurement Engine

!!! quote "From marathonmyanmar.com"
    *Creating extra-income of $50–$500/month to local SMEs in regional cities.*

Marathon Myanmar's sustainability commitments are not aspirational slogans — they are
**measured, tracked and reported** through the data warehouse the BI team maintains.
Every ESG metric on the corporate site flows through `etl_test` and surfaces on
executive dashboards.

---

## ESG Metrics — What We Measure

The BI warehouse produces the data that underpins Marathon's public ESG commitments:

| ESG Metric | Source | Dashboard |
|---|---|---|
| **80% Yangon parcels by bicycle (zero CO₂)** | `fact_delivery_mode` + `branches` | Ops → CO₂ dashboard |
| **36% women in full-time positions** | `dim_employees` → HR extract | People dashboard |
| **85% women merchants / 50% women agents** | `dim_customers`, `dim_agents` | Agent/Merchant reports |
| **70% reusable packaging** | Inventory → packaging SKUs | Procurement dashboard |
| **30% cities = 3-tier (underserved)** | `dim_branches.city_tier` | Expansion dashboard |
| **8 languages · 7 ethnic groups · 3 religions** | HR demographics | People dashboard |
| **$50–$500/month extra income to regional SMEs** | `fact_agent_earnings` | Agent economics |

---

## How BI Enables Sustainability

```mermaid
graph LR
    A[Operations<br/>deliveries, agents, inventory] --> B[BI Warehouse<br/>etl_test]
    B --> C[ESG Dashboards]
    C --> D[Annual Sustainability Report]
    C --> E[Grant compliance<br/>JICA ACCESS]
    C --> F[Board ESG review]

