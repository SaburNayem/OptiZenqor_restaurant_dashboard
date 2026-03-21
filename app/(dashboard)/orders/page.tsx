"use client";

import { Link } from "react-router-dom";

import { DataTable } from "@/components/ui/data-table";
import { FiltersBar } from "@/components/ui/filters-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { currency } from "@/lib/utils";
import { getOrders } from "@/services/dashboard-service";

export default function OrdersPage() {
  const { scopedBranchId } = useDashboardState();
  const rows = getOrders(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Order Management"
        title="Live order queue and service flow"
        description="Review incoming orders, branch assignment, payment status, order source, and the full lifecycle from pending to delivered."
      />

      <FiltersBar searchPlaceholder="Search orders, customers, or phone numbers">
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Pending</button>
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Delivery</button>
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Paid</button>
      </FiltersBar>

      <DataTable
        title="Live Orders"
        description="Searchable and filterable order list prepared for API-backed actions and print flows."
        rows={rows}
        columns={[
          { header: "Order", render: (order) => <Link to={`/orders/${order.id}`} className="font-semibold text-ink hover:text-ember">{order.id}</Link> },
          {
            header: "Customer",
            render: (order) => (
              <div>
                <p>{order.customerName}</p>
                <p className="text-xs text-stone-500">{order.customerPhone}</p>
              </div>
            )
          },
          { header: "Status", render: (order) => <StatusBadge value={order.status} /> },
          { header: "Payment", render: (order) => <StatusBadge value={order.paymentStatus} /> },
          { header: "Type", render: (order) => order.type.replace("_", " ") },
          { header: "Source", render: (order) => order.source },
          { header: "Total", render: (order) => currency(order.total) }
        ]}
      />
    </div>
  );
}
