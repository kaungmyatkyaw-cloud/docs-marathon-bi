---
title: Forms & Templates
description: Every operational form, survey and acknowledgement — with owners and cadence
---

# 📋 Forms & Templates

| ID | Form | Purpose | Owner | Cadence | Channel |
|---|---|---|---|---|---|
| F-01 | Service Ticket | Raise incidents/requests | IT/BI | Ad-hoc | [Zammad](https://techsupport.marathonmyanmar.com) |
| F-02 | Report Request | New/ad-hoc report | BI | Ad-hoc | Ticket tag `report-request` |
| F-03 | Data Correction | Master/transaction fix | Data Steward | Ad-hoc | Ticket tag `data-correction` |
| F-04 | Access / Token Request | DB, GAS, BI access | BI Lead | Ad-hoc | Ticket tag `access` |
| F-05 | Policy Acknowledgement | Annual AUP + Governance sign-off | HR | Annual | HR form |
| F-06 | Employee Satisfaction Survey | K-HR-02 | HR | Monthly | Paper/Forms |
| F-07 | Product Quality Survey | K-MF-02 | M-Trading | Monthly/batch | Paper/Forms |
| F-08 | Delivery Quality Survey | K-ME-02 | M-Express | Weekly sample | Phone/Forms |
| F-09 | BI Ticket Quality Survey | K-BI-02 | BI | Quarterly | Forms |

## F-02 Report Request (template)

```text
Requester / Dept:            BU:
Report purpose:              Decision it enables:
Required fields/metrics:     Granularity (day/week/month):
Preferred channel:  [ ] Email CSV  [ ] Dashboard  [ ] Sheet
Needed by:                   Priority (per SLA):
```

## F-03 Data Correction (template)

```text
System (das-db/Zammad):      Table/record ID:
Current value:               Correct value:
Evidence (doc/invoice no.):  Requested by:
```

## F-04 Access / Token Request (template)

```text
System:  [ ] MySQL etl_test  [ ] GAS  [ ] BI tool  [ ] Zammad
Role needed:  read / write / admin      Duration:
Business justification:                 Approver (HOD):
```