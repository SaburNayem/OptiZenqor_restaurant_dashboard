"use client";

import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { getKitchenQueue } from "@/services/dashboard-service";

export default function KitchenPage() {
  const { scopedBranchId } = useDashboardState();
  const queue = getKitchenQueue(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Kitchen Display"
        title="Operational order queue for prep staff"
        description="A simplified preparation screen focused on active kitchen work, item-level progress, and ready-for-pickup visibility."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {queue.map((order) => (
          <Panel key={order.id} className="bg-[#1f2d33] text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-300">{order.type.replace("_", " ")}</p>
                <h3 className="mt-1 text-2xl font-semibold">{order.id}</h3>
              </div>
              <StatusBadge value={order.status} />
            </div>
            <p className="mt-3 text-sm text-stone-300">{order.customerName} • ETA {order.etaMinutes} min</p>
            <div className="mt-5 space-y-3">
              {order.items.map((item) => (
                <div key={item.name} className="rounded-3xl bg-white/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-medium">{item.quantity}x {item.name}</p>
                    <StatusBadge value={item.itemStatus === "cooking" ? "preparing" : item.itemStatus} />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
