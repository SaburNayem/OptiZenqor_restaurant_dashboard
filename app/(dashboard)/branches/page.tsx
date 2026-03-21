"use client";

import { Link } from "react-router-dom";
import { useState } from "react";

import { SideDrawer } from "@/components/ui/side-drawer";
import { DataTable } from "@/components/ui/data-table";
import { FiltersBar } from "@/components/ui/filters-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { currency } from "@/lib/utils";
import { getVisibleBranches } from "@/services/dashboard-service";

export default function BranchesPage() {
  const { role } = useDashboardState();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const rows = getVisibleBranches(role);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Branch Management"
        title="Branch network and operational coverage"
        description="Manage each location’s status, manager, contact details, delivery radius, hours, and performance health."
        action={
          <button className="rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-white" onClick={() => setDrawerOpen(true)}>
            Create Branch
          </button>
        }
      />

      <FiltersBar searchPlaceholder="Search branches, addresses, or managers">
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Open now</button>
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Flagship</button>
      </FiltersBar>

      <DataTable
        title="Branch List"
        description="All visible branches with manager assignment and operating performance."
        rows={rows}
        columns={[
          {
            header: "Branch",
            render: (branch) => (
              <div>
                <Link to={`/branches/${branch.id}`} className="font-semibold text-ink hover:text-ember">
                  {branch.name}
                </Link>
                <p className="mt-1 text-xs text-stone-500">{branch.address}</p>
              </div>
            )
          },
          { header: "Status", render: (branch) => <StatusBadge value={branch.status} /> },
          { header: "Manager", render: (branch) => branch.managerName },
          { header: "Orders Today", render: (branch) => branch.ordersToday },
          { header: "Revenue", render: (branch) => currency(branch.revenueToday) },
          { header: "Radius", render: (branch) => `${branch.deliveryRadiusKm} km` }
        ]}
      />

      <SideDrawer open={drawerOpen} title="Create Branch">
        <p>Mock admin form placeholder for branch creation. This drawer is ready to connect to a create-branch API later.</p>
        <div className="grid gap-3">
          <input className="rounded-2xl border border-stone-200 px-4 py-3" placeholder="Branch name" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" placeholder="Address" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" placeholder="Manager assignment" />
        </div>
        <button className="rounded-2xl bg-ink px-4 py-3 text-white" onClick={() => setDrawerOpen(false)}>
          Save branch
        </button>
      </SideDrawer>
    </div>
  );
}
