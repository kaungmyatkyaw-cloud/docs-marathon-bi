---
title: Technical Glossary — Short Forms & Definitions
description: Every abbreviation used across this library — long form, plain-English meaning, and reference links
---

# 🔤 Technical Glossary

!!! tip "How to use"
    Short form → **long form** → plain-English meaning → reference.
    Can't find a term? Use the search bar — every abbreviation on this site is indexed.

---

## ⚖️ Legal, Contracts & Governance

| Short | Long Form | Meaning | Reference |
|---|---|---|---|
| **NDA** | Non-Disclosure Agreement | Contract keeping shared confidential information secret between parties. | [Wiki](https://en.wikipedia.org/wiki/Non-disclosure_agreement) · [BIaaS 8](../business/bi-as-a-service.md) |
| **DPA** | Data Processing Agreement | Defines how a processor may handle personal data on behalf of its owner. | [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) · [BIaaS 8](../business/bi-as-a-service.md) |
| **AUP** | Acceptable Use Policy | Rules for proper use of IT systems, devices and networks. | [IT AUP](../policies/it-acceptable-use.md) |
| **EULA** | End-User License Agreement | License terms between software vendor and end user. | [Wiki](https://en.wikipedia.org/wiki/End-user_license_agreement) |
| **SLA** | Service Level Agreement | Promised response/resolution times per priority. | [SLA Guidelines](../policies/ticket-sla-guidelines.md) |
| **SOW** | Statement of Work | Scoped deliverables, timeline and price for a project. | [Wiki](https://en.wikipedia.org/wiki/Statement_of_work) |
| **QBR** | Quarterly Business Review | Quarterly performance & expansion meeting with stakeholders. | [BIaaS 6](../business/bi-as-a-service.md) |
| **GDPR** | General Data Protection Regulation | EU privacy law — the global benchmark for personal-data handling. | [Wiki](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) |
| **PII** | Personally Identifiable Information | Any data identifying a person (name, NRC, phone, email). | [Wiki](https://en.wikipedia.org/wiki/Personal_data) |
| **KYC** | Know Your Customer | Identity verification before onboarding clients/agents. | [Wiki](https://en.wikipedia.org/wiki/Know_your_customer) |

## 📊 Data, BI & Analytics

| Short | Long Form | Meaning | Reference |
|---|---|---|---|
| **BI** | Business Intelligence | Turning raw data into insights, reports and dashboards. | [What We Do](../what-we-do.md) |
| **BIaaS** | Business Intelligence as a Service | Subscription-based BI delivery model. | [BIaaS Playbook](../business/bi-as-a-service.md) |
| **SSOT** | Single Source of Truth | One authoritative dataset everyone trusts. | [Insights](../insights.md) |
| **MDM** | Master Data Management | Golden records for products/customers/suppliers. | [Epic 3](../projects/epic-3-mdm-dw.md) |
| **DQ** | Data Quality | Accuracy, completeness and consistency of data. | [Governance](../policies/data-governance.md) |
| **ETL** | Extract, Transform, Load | Pipeline moving data from source → warehouse. | [ETL Guide](../guides/etl-guide.md) |
| **ELT** | Extract, Load, Transform | Modern variant — transform inside the warehouse. | [Wiki](https://en.wikipedia.org/wiki/Extract,_load,_transform) |
| **CDC** | Change Data Capture | Syncing only changed rows (delta loading). | [Epic 1](../projects/epic-1-source-analysis.md) |
| **OLTP** | Online Transaction Processing | Day-to-day operational systems (`das-db`). | [Epic 1](../projects/epic-1-source-analysis.md) |
| **OLAP** | Online Analytical Processing | Analytical query workloads (warehouse). | [Wiki](https://en.wikipedia.org/wiki/Online_analytical_processing) |
| **DWH** | Data Warehouse | Central analytical data store. | [Wiki](https://en.wikipedia.org/wiki/Data_warehouse) |
| **SKU** | Stock Keeping Unit | Unique product code. | [Wiki](https://en.wikipedia.org/wiki/Stock_keeping_unit) |
| **UOM** | Unit of Measure | PCS / kg / ctn — and conversion factors. | [Epic 3](../projects/epic-3-mdm-dw.md) |
| **BOM** | Bill of Materials | Component "recipe" for kits/production. | [Schema](../appendix/database-schema.md) |
| **ABC** | ABC Analysis | Pareto classification of inventory/customers by value. | [Wiki](https://en.wikipedia.org/wiki/ABC_analysis) |
| **CTE** | Common Table Expression | `WITH` clauses for readable SQL. | [Wiki](https://en.wikipedia.org/wiki/Hierarchical_and_recursive_queries_in_SQL#Common_table_expression) |
| **KPI** | Key Performance Indicator | Measurable metric tracked against a target. | [KPI Framework](../projects/epic-4-okr-kpi-framework.md) |
| **OKR** | Objectives and Key Results | Goal-setting framework (objective + measurable results). | [Wiki](https://en.wikipedia.org/wiki/OKR) |
| **KR** | Key Result | The measurable outcome inside an OKR. | [KPI Framework](../projects/epic-4-okr-kpi-framework.md) |
| **ESG** | Environmental, Social, Governance | Sustainability & responsibility metrics. | [Sustainability](../sustainability.md) |

## 💼 Business & Finance

| Short | Long Form | Meaning | Reference |
|---|---|---|---|
| **ERP** | Enterprise Resource Planning | Unified operational system (finance + inventory + HR). | [Insights](../insights.md) |
| **P&L** | Profit & Loss | Income statement — revenue vs expenses. | [Wiki](https://en.wikipedia.org/wiki/Income_statement) |
| **AP** | Accounts Payable | Money we owe suppliers. | [Wiki](https://en.wikipedia.org/wiki/Accounts_payable) |
| **AR** | Accounts Receivable | Money customers owe us. | [Wiki](https://en.wikipedia.org/wiki/Accounts_receivable) |
| **GL** | General Ledger | Master record of all accounting entries. | [Wiki](https://en.wikipedia.org/wiki/General_ledger) |
| **COGS** | Cost of Goods Sold | Direct cost of products sold. | [Wiki](https://en.wikipedia.org/wiki/Cost_of_goods_sold) |
| **GMV** | Gross Merchandise Value | Total sales value before deductions. | [Wiki](https://en.wikipedia.org/wiki/Gross_merchandise_value) |
| **MRR** | Monthly Recurring Revenue | Subscription revenue per month. | [Wiki](https://en.wikipedia.org/wiki/Monthly_recurring_revenue) |
| **ARR** | Annual Recurring Revenue | MRR × 12. | [Wiki](https://en.wikipedia.org/wiki/Annual_recurring_revenue) |
| **CAC** | Customer Acquisition Cost | Sales + marketing cost per new client. | [Wiki](https://en.wikipedia.org/wiki/Customer_acquisition_cost) |
| **LTV** | Lifetime Value | Total value of a client over the relationship. | [Wiki](https://en.wikipedia.org/wiki/Customer_lifetime_value) |
| **ICP** | Ideal Customer Profile | Description of the best-fit buyer. | [BIaaS 2](../business/bi-as-a-service.md) |
| **FTE** | Full-Time Equivalent | Standard headcount unit. | [Wiki](https://en.wikipedia.org/wiki/Full-time_equivalent) |
| **BU** | Business Unit | One company/division (M-Kitchen, ShweZay…). | [Who We Are](../about.md) |
| **HOD** | Head of Department | Department leader receiving KPI reports. | [KPI Framework](../projects/epic-4-okr-kpi-framework.md) |
| **MoM / WoW / YoY** | Month/Week/Year over … | Comparison periods for trends. | [Reports Catalog](reports-catalog.md) |
| **Lakh** | 100,000 | South-Asian counting unit (OKR targets use Lakhs). | [Wiki](https://en.wikipedia.org/wiki/Lakh) |
| **Crore** | 10,000,000 | 100 Lakhs. | [Wiki](https://en.wikipedia.org/wiki/Crore) |

## 🚚 Operations & Logistics

| Short | Long Form | Meaning | Reference |
|---|---|---|---|
| **OMS** | Order Management System | End-to-end order lifecycle tracking. | [Insights](../insights.md) |
| **POS** | Point of Sale | Retail checkout transactions. | [Wiki](https://en.wikipedia.org/wiki/Point_of_sale) |
| **COD** | Cash on Delivery | Collect payment at the door — Marathon's core service. | [What We Do](../what-we-do.md) |
| **FEFO** | First Expired, First Out | Issue nearest-expiry stock first (FMCG). | [Wiki](https://en.wikipedia.org/wiki/First_expired,_first_out) |
| **FIFO** | First In, First Out | Issue oldest stock first. | [Wiki](https://en.wikipedia.org/wiki/FIFO_and_LIFO_accounting) |
| **PO** | Purchase Order | Buying document sent to a supplier. | [Schema](../appendix/database-schema.md) |
| **SO** | Sales Order | Customer order document. | [Schema](../appendix/database-schema.md) |
| **TAT** | Turnaround Time | Time from request to completion. | [SLA Guidelines](../policies/ticket-sla-guidelines.md) |
| **3PL** | Third-Party Logistics | Outsourced logistics provider. | [Wiki](https://en.wikipedia.org/wiki/Third-party_logistics) |

## 🖥️ Technology & Security

| Short | Long Form | Meaning | Reference |
|---|---|---|---|
| **API** | Application Programming Interface | Software-to-software communication contract. | [Wiki](https://en.wikipedia.org/wiki/API) |
| **REST** | Representational State Transfer | Web API style (GET/POST/PUT/DELETE). | [Wiki](https://en.wikipedia.org/wiki/REST) |
| **JDBC** | Java Database Connectivity | How Apps Script connects to MySQL. | [Report Automation](../guides/report-automation.md) |
| **GAS** | Google Apps Script | Serverless JavaScript automation on Google Workspace. | [Report Automation](../guides/report-automation.md) |
| **CSV** | Comma-Separated Values | Flat table file format. | [Wiki](https://en.wikipedia.org/wiki/Comma-separated_values) |
| **JSON** | JavaScript Object Notation | Structured data interchange format. | [Wiki](https://en.wikipedia.org/wiki/JSON) |
| **YAML** | YAML Ain't Markup Language | Configuration format (`mkdocs.yml`). | [Wiki](https://en.wikipedia.org/wiki/YAML) |
| **CI/CD** | Continuous Integration / Deployment | Automated build, test and deploy. | [Wiki](https://en.wikipedia.org/wiki/CI/CD) |
| **RBAC** | Role-Based Access Control | Permissions assigned by role. | [Governance](../policies/data-governance.md) |
| **SSO** | Single Sign-On | One login for many systems. | [Wiki](https://en.wikipedia.org/wiki/Single_sign-on) |
| **2FA** | Two-Factor Authentication | Second verification step at login. | [Wiki](https://en.wikipedia.org/wiki/Multi-factor_authentication) |
| **TLS** | Transport Layer Security | Encryption in transit (the "s" in https). | [Wiki](https://en.wikipedia.org/wiki/Transport_Layer_Security) |
| **SQL** | Structured Query Language | The language of relational data. | [Wiki](https://en.wikipedia.org/wiki/SQL) |
| **RDBMS** | Relational Database Management System | MySQL, PostgreSQL, etc. | [Wiki](https://en.wikipedia.org/wiki/Relational_database) |

## 🏛️ Organizations & Programs (Our Context)

| Short | Long Form | Meaning | Reference |
|---|---|---|---|
| **DAS** | Distribution & Accounting System | Marathon's internal ERP ("`das-db`"). | [Epic 1](../projects/epic-1-source-analysis.md) |
| **JICA** | Japan International Cooperation Agency | Grant donor — ACCESS Booster 2022. | [Wiki](https://en.wikipedia.org/wiki/Japan_International_Cooperation_Agency) |
| **UNDP** | United Nations Development Programme | Co-host of the MoCOM E-Commerce Challenge. | [Wiki](https://en.wikipedia.org/wiki/United_Nations_Development_Programme) |
| **MoCOM** | Ministry of Commerce (Myanmar) | E-Commerce Innovation Challenge host. | [About](../about.md) |
| **CERP** | COVID-19 Economic Relief Plan | Government relief framework. | [About](../about.md) |

> [Library Index](index.md) · [Skills Matrix](skills-matrix.md) · [BIaaS Playbook](../business/bi-as-a-service.md)