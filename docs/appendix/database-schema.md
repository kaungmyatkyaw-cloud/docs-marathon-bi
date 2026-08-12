---
title: Database Schema Reference (das-db)
description: Curated reference of the 147 observed DAS operational tables, grouped by business domain
---

# 📎 Database Schema Reference (`das-db`)

!!! info "Scope"
    The complete column/key/index inventory for all **147 observed tables** is maintained
    in the repository artifact `database_explanations.md`. This page curates the tables
    that matter for the Unified DW initiative, grouped by domain.

## 1. Products & Master Data

| Table | Purpose | Key Columns |
|---|---|---|
| `products` | BU-level catalog (fragmented source) | `id`, `business_id`, `sku`, `barcode`, `name`, `master_id` |
| `master_products` | Group-level master (currently empty) | `id`, `sku`, `barcode`, `master_category_id` |
| `product_categories` / `master_product_categories` | Category trees (BU & group) | `id`, `name`, `parent_category_id` |
| `product_units` / `master_product_units` | UOMs | `name`, `abbreviation`, `precision` |
| `product_conversion_links` | UOM conversion factors | `product_id`, `to_product_id`, `qty`, `to_qty`, `is_reversible` |
| `product_groups` / `product_variants` / `raw_materials` | Variant & BOM product types | `product_group_id`, `sku`, `barcode` |

## 2. Sales (Invoice + POS)

| Table | Purpose | Key Columns |
|---|---|---|
| `sales_orders` / `sales_order_details` | Order lifecycle + margins | `order_number`, `current_status`, `detail_qty`, `detail_unit_rate` |
| `sales_invoices` / `sales_invoice_details` | B2B revenue (fact source) | `invoice_date`, `current_status`, `detail_total_amount`, `cogs` |
| `pos_checkout_invoice_payments` / `pos_checkout_details` | Retail revenue (fact source) | `checkout_date`, `current_status`, `detail_total_amount`, `cogs` |
| `quotations` / `credit_notes` / `refunds` | Pre-sales & returns | `current_status`, `reference_type` |

## 3. Inventory & Batch Traceability

| Table | Purpose | Key Columns |
|---|---|---|
| `stock_summaries` | Current qty per warehouse/product/batch | `current_qty`, `committed_qty`, `expiry_date` |
| `stock_histories` | Movement ledger ⚠️ *no partitioning* | `stock_date`, `qty`, `reference_type` |
| `stock_summary_daily_balances` | Daily stock snapshots | `transaction_date`, `current_qty` |
| `opening_stocks` | Opening balances ⚠️ *no audit columns* | composite PK only |
| `transfer_orders` / `inventory_adjustments` | Movements & corrections | `source/destination_warehouse_id` |
| `bill_of_materials` / `bom_inputs` / `bom_outputs` / `production_orders` | Manufacturing (M-Kitchen) | `bom_id`, `expected_qty`, `actual_qty` |

## 4. Purchasing & Suppliers

| Table | Purpose |
|---|---|
| `purchase_orders` / `purchase_order_details` | PO lifecycle |
| `bills` / `bill_details` | Supplier invoices (AP) |
| `supplier_payments` / `supplier_credits` / `supplier_credit_bills` | AP settlement |
| `price_surveys` | Market price intelligence |

## 5. Finance & Accounting

| Table | Purpose |
|---|---|
| `accounts` / `master_accounts` | Chart of accounts ⚠️ `branches` = comma list (1NF violation) |
| `account_journals` / `account_transactions` | Ledger ⚠️ *no explicit FKs* |
| `banking_transactions` / `banking_transaction_details` | Cash/bank movements |
| `journals` / `journal_transactions` | Manual journals |
| `budgets` / `budget_details` / `budget_adjustments` | Budget control |
| `currencies` / `currency_exchanges` | FX |

## 6. Customers & CRM

| Table | Purpose |
|---|---|
| `customers` / `customer_groups` | B2B/B2C profiles |
| `customer_payments` / `paid_invoices` | AR settlement |
| `customer_credit_invoices` | ⚠️ `business_id` = `longtext` (index killer) |

## 7. Organization, Security & Geography

| Table | Purpose |
|---|---|
| `businesses` / `business_groups` | BU master + group linkage (`business_group_id`) |
| `branches` / `warehouses` / `work_centers` | Physical locations |
| `users` / `roles` / `modules` / `role_modules` | RBAC |
| `states` / `townships` | Geography reference |

## 8. HR & Attendance

`employees`, `attendance_logs`, `leave_types`, `leave_balances`, `leave_requests`, `working_schedules`, `holidays`

---

## Anti-Pattern Hotspots (from [Epic 1](../projects/epic-1-source-analysis.md))

| # | Finding | Table(s) |
|---|---|---|
| 1 | 1NF violation (list-in-column) | `accounts.branches`, `users.branches` |
| 2 | Missing explicit FKs | `account_transactions` |
| 3 | Type anomaly (`longtext` keys) | `customer_credit_invoices`, `supplier_credit_bills` |
| 4 | Redundant/overlapping indexes | `sales_invoices` |
| 5 | No partitioning on hot tables | `stock_histories`, `account_transactions` |
| 6 | CDC stored as BLOB | `pub_sub_message_records` |
| 7 | Rigid ENUMs + numeric-as-text | `account_journals.reference_type`, `sales_invoice_details.detail_discount` |
| 8 | Missing audit columns | `opening_stocks` |