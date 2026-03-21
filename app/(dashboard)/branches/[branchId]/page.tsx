import { useParams } from "react-router-dom";

import { ErrorState } from "@/components/ui/error-state";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { currency } from "@/lib/utils";
import { getBranchById, getMenuData, getOrders } from "@/services/dashboard-service";

export default function BranchDetailsPage() {
  const { branchId } = useParams<{ branchId: string }>();
  if (!branchId) {
    return <ErrorState title="Missing branch id" description="No branch was selected for this route." />;
  }

  const branch = getBranchById(branchId);
  if (!branch) {
    return <ErrorState title="Branch not found" description="The requested branch does not exist in the mock dataset." />;
  }

  const menu = getMenuData(branch.id);
  const branchOrders = getOrders(branch.id);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Branch Details"
        title={branch.name}
        description="Operational profile, manager assignment, current status, and branch-level performance summary."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Panel>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-stone-500">Branch status</p>
              <h3 className="mt-1 text-2xl font-semibold text-ink">{branch.name}</h3>
            </div>
            <StatusBadge value={branch.status} />
          </div>
          <div className="mt-6 grid gap-4 text-sm text-stone-600 md:grid-cols-2">
            <p><span className="font-medium text-ink">Address:</span> {branch.address}</p>
            <p><span className="font-medium text-ink">Contact:</span> {branch.phone}</p>
            <p><span className="font-medium text-ink">Manager:</span> {branch.managerName}</p>
            <p><span className="font-medium text-ink">Hours:</span> {branch.operatingHours}</p>
            <p><span className="font-medium text-ink">Delivery Radius:</span> {branch.deliveryRadiusKm} km</p>
            <p><span className="font-medium text-ink">Flagship:</span> {branch.isFlagship ? "Yes" : "No"}</p>
          </div>
        </Panel>

        <Panel>
          <h4 className="text-lg font-semibold text-ink">Performance Summary</h4>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-stone-50 p-4">
              <p className="text-sm text-stone-500">Revenue Today</p>
              <p className="mt-2 text-2xl font-semibold text-ink">{currency(branch.revenueToday)}</p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-4">
              <p className="text-sm text-stone-500">Orders Today</p>
              <p className="mt-2 text-2xl font-semibold text-ink">{branch.ordersToday}</p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-4">
              <p className="text-sm text-stone-500">Rating</p>
              <p className="mt-2 text-2xl font-semibold text-ink">{branch.rating.toFixed(1)}</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-stone-600">
            {menu.items.length} menu items assigned to this branch and {branchOrders.length} live sample orders available in the current mock dataset.
          </p>
        </Panel>
      </div>
    </div>
  );
}
