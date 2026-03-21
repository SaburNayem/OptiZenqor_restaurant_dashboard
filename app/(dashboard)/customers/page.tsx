"use client";

import Link from "next/link";

import { DataTable } from "@/components/ui/data-table";
import { FiltersBar } from "@/components/ui/filters-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { currency } from "@/lib/utils";
import { getCustomers } from "@/services/dashboard-service";

export default function CustomersPage() {
  const { scopedBranchId } = useDashboardState();
  const rows = getCustomers(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Customer Management"
        title="Customer profiles, spending, and loyalty behavior"
        description="Track customer value, order frequency, favorite dishes, recent activity, and support flags."
      />
      <FiltersBar searchPlaceholder="Search customers by name, email, or phone" />
      <DataTable
        title="Customer Directory"
        rows={rows}
        columns={[
          {
            header: "Customer",
            render: (customer) => (
              <div>
                <Link href={`/customers/${customer.id}`} className="font-semibold text-ink hover:text-ember">
                  {customer.name}
                </Link>
                <p className="mt-1 text-xs text-stone-500">{customer.email}</p>
              </div>
            )
          },
          { header: "Orders", render: (customer) => customer.totalOrders },
          { header: "Spending", render: (customer) => currency(customer.totalSpending) },
          { header: "Loyalty", render: (customer) => <StatusBadge value={customer.loyaltyStatus} /> },
          { header: "Flagged", render: (customer) => <StatusBadge value={customer.flagged ? "canceled" : "active"} /> }
        ]}
      />
    </div>
  );
}
