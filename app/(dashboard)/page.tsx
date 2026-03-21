"use client";

import Link from "next/link";

import { BarChart } from "@/components/charts/bar-chart";
import { LineChart } from "@/components/charts/line-chart";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { currency } from "@/lib/utils";
import { getOverview, getReports } from "@/services/dashboard-service";

export default function OverviewPage() {
  const { scopedBranchId } = useDashboardState();
  const overview = getOverview(scopedBranchId);
  const reports = getReports(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Dashboard Overview"
        title="Daily operations pulse"
        description="Track live restaurant performance, branch health, recent activity, and quick control actions from a single command surface."
        action={
          <div className="flex gap-2">
            <Link href="/orders" className="rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-white">
              Review live orders
            </Link>
            <Link href="/menu/items/new" className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-panel">
              Add menu item
            </Link>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard label="Total Orders Today" value={String(overview.totalOrdersToday)} hint="Includes branch order load and live queue" icon="01" />
        <StatCard label="Revenue Today" value={currency(overview.totalRevenueToday)} hint="Gross revenue across the visible branch scope" icon="02" />
        <StatCard label="Active Branches" value={String(overview.activeBranches)} hint="Branches currently open or handling service" icon="03" />
        <StatCard label="Active Menu Items" value={String(overview.activeMenuItems)} hint="Available items after branch-based availability" icon="04" />
        <StatCard label="Pending Orders" value={String(overview.pendingOrders)} hint="Orders needing kitchen or dispatch attention" icon="05" />
        <StatCard label="Completed Orders" value={String(overview.completedOrders)} hint="Orders delivered or served successfully" icon="06" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <BarChart title="Sales Summary" data={reports.salesDaily} />
        <Panel>
          <h4 className="text-lg font-semibold text-ink">Popular Dishes</h4>
          <div className="mt-5 space-y-4">
            {overview.popularDishes.map((dish) => (
              <div key={dish.id} className="rounded-3xl bg-stone-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-ink">{dish.name}</p>
                    <p className="mt-1 text-sm text-stone-600">{dish.description}</p>
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-amber-800">Popular</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-stone-600">
                  <span>{dish.ordersThisWeek} orders this week</span>
                  <span>{dish.rating.toFixed(1)} rating</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel>
          <h4 className="text-lg font-semibold text-ink">Branch Performance</h4>
          <div className="mt-5 space-y-4">
            {overview.branches.map((branch) => (
              <div key={branch.id} className="rounded-3xl border border-stone-100 bg-stone-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-ink">{branch.name}</p>
                    <p className="text-sm text-stone-600">{branch.managerName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-ink">{branch.performanceScore}%</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Performance</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-stone-500">Orders</p>
                    <p className="font-semibold text-ink">{branch.ordersToday}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Revenue</p>
                    <p className="font-semibold text-ink">{currency(branch.revenueToday)}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Rating</p>
                    <p className="font-semibold text-ink">{branch.rating.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-6">
          <LineChart title="Peak Order Hours" data={reports.hourlyOrders} />
          <Panel>
            <h4 className="text-lg font-semibold text-ink">Recent Activity</h4>
            <div className="mt-5 space-y-4">
              {overview.activities.map((activity) => (
                <div key={activity.id} className="border-l-2 border-gold pl-4">
                  <p className="font-semibold text-ink">{activity.title}</p>
                  <p className="mt-1 text-sm text-stone-600">{activity.description}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
