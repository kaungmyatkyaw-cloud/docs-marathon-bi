---
title: Ticket Priority & SLA Guidelines
description: Priority levels, expected response/resolution times, escalation and agent duties
policy_id: MAR-IT-POL-002
effective: 2026-08-01
last_updated: 2026-07-26
---

# 🎯 Ticket Priority & SLA Guidelines

This guide explains how to correctly set ticket priority on the
[Marathon ServiceDesk](https://techsupport.marathonmyanmar.com) and what SLAs apply.

## Priority Definitions & SLA Targets

| Priority | Description | First Response | Target Resolution |
|---|---|---|---|
| **Critical** | System outage, data breach, complete work stoppage | 30 minutes | 4 hours |
| **High** | Major feature broken, significant work impact | 2 hours | 1 business day |
| **Medium** | Partial functionality affected, workaround available | 4 hours | 3 business days |
| **Low** | Minor issue, cosmetic, or improvement request | 1 business day | 7 business days |

!!! info "Business hours"
    SLA times are measured **Mon–Fri, 08:00–18:00 (Asia/Yangon)**.

### BI examples

| Scenario | Priority |
|---|---|
| Daily ETL failed → exec dashboard stale | Critical |
| KPI/attendance report not published by Mon 2pm | High |
| One BU's master-data snapshot incorrect | Medium |
| New dashboard colour request | Low |

## How to Choose the Right Priority

**Critical — only when:** entire system down · multiple users fully blocked · active security incident · data loss/corruption occurring.

**High — when:** key function broken, no workaround · deadline-sensitive task blocked · single user completely unable to work.

**Medium — when:** workaround exists but inconvenient · partial functionality available · delays but not stoppage.

**Low — when:** minor inconvenience · feature request / improvement · no urgency.

## Escalation Process

If no response within the SLA window:

1. Add a comment to the ticket noting the delay.
2. Contact your line manager or department head.
3. The department head may escalate to the **IT Director** (BI matters: **BI Lead**).

## Notes for Agents

- Update ticket status promptly when work begins.
- If resolution will be delayed, add a comment explaining why.
- Close tickets **only after confirming resolution with the reporter**.

> Related: [IT AUP](it-acceptable-use.md) · [Epic 5 Runbook](../projects/epic-5-zammad-integration.md) · [Forms](../library/forms-index.md)