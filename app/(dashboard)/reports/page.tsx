"use client";

import { BarChart } from "@/components/charts/bar-chart";
import { LineChart } from "@/components/charts/line-chart";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { percent } from "@/lib/utils";
import { getReports } from "@/services/dashboard-service";

export default function ReportsPage() {
  const { scopedBranchId } = useDashboardState();
  const reports = getReports(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Reports & Analytics"
        title="Revenue, branch comparison, and demand patterns"
        description="Mock analytical surface for daily sales, monthly revenue, customer growth, peak order periods, and item performance."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Completion Rate" value={percent(reports.completionRate)} hint="Orders fulfilled successfully" icon="CR" />
        <StatCard label="Cancellation Rate" value={percent(reports.cancellationRate)} hint="Orders lost or voided" icon="CA" />
        <StatCard label="Average Order Value" value={`$${reports.averageOrderValue}`} hint="Average basket value across scope" icon="AO" />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <BarChart title="Daily Sales" data={reports.salesDaily} />
        <LineChart title="Peak Order Hours" data={reports.hourlyOrders} />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <Panel>
          <h4 className="text-lg font-semibold text-ink">Best-selling Items</h4>
          <div className="mt-5 space-y-3">
            {reports.bestSellers.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-3xl bg-stone-50 p-4">
                <p className="font-medium text-ink">{item.name}</p>
                <p className="text-sm text-stone-600">{item.ordersThisWeek} orders</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel>
          <h4 className="text-lg font-semibold text-ink">Worst-performing Items</h4>
          <div className="mt-5 space-y-3">
            {reports.worstSellers.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-3xl bg-stone-50 p-4">
                <p className="font-medium text-ink">{item.name}</p>
                <p className="text-sm text-stone-600">{item.ordersThisWeek} orders</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
