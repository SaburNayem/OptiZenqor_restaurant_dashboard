"use client";

import { Link } from "react-router-dom";

import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { DataTable } from "@/components/ui/data-table";
import { FiltersBar } from "@/components/ui/filters-bar";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { currency } from "@/lib/utils";
import { getMenuData } from "@/services/dashboard-service";

export default function MenuPage() {
  const { scopedBranchId } = useDashboardState();
  const menu = getMenuData(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Menu Management"
        title="Categories, items, pricing, and branch availability"
        description="Manage menu configuration with reusable item structures, branch-level availability, variants, add-ons, and merchandising tags."
        action={
          <Link to="/menu/items/new" className="rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-white">
            Add Item
          </Link>
        }
      />

      <FiltersBar searchPlaceholder="Search menu items, categories, or tags">
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Available only</button>
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Featured</button>
        <button className="rounded-full border border-stone-200 px-4 py-2 text-sm">Popular</button>
      </FiltersBar>

      <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <Panel>
          <h4 className="text-lg font-semibold text-ink">Categories</h4>
          <div className="mt-5 space-y-4">
            {menu.categories.map((category) => (
              <div key={category.id} className="rounded-3xl bg-stone-50 p-4">
                <p className="font-semibold text-ink">{category.name}</p>
                <p className="mt-1 text-sm text-stone-600">{category.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-stone-500">{category.branchIds.length} branches</p>
              </div>
            ))}
          </div>
        </Panel>

        <DataTable
          title="Menu Items"
          description="API-ready item inventory with pricing, prep time, and merchandising states."
          rows={menu.items}
          columns={[
            {
              header: "Item",
              render: (item) => (
                <div>
                  <Link to={`/menu/items/${item.id}`} className="font-semibold text-ink hover:text-ember">
                    {item.name}
                  </Link>
                  <p className="mt-1 text-xs text-stone-500">{item.description}</p>
                </div>
              )
            },
            { header: "Availability", render: (item) => <StatusBadge value={item.available ? "active" : "closed"} /> },
            { header: "Price", render: (item) => currency(item.price) },
            { header: "Discount", render: (item) => item.discountPrice ? currency(item.discountPrice) : "None" },
            { header: "Prep", render: (item) => `${item.prepTimeMins} min` },
            { header: "Tags", render: (item) => `${item.featured ? "Featured" : ""} ${item.popular ? "Popular" : ""}`.trim() || "Standard" }
          ]}
        />
      </div>

      <ConfirmDialog
        title="Bulk menu update"
        description="Placeholder for confirmable bulk actions like availability toggles, branch assignment changes, and pricing updates."
        confirmLabel="Run bulk action"
      />
    </div>
  );
}
