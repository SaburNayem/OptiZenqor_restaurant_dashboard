import { useParams } from "react-router-dom";

import { ErrorState } from "@/components/ui/error-state";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { currency, shortDate } from "@/lib/utils";
import { getOrderById } from "@/services/dashboard-service";

export default function OrderDetailsPage() {
  const { orderId } = useParams<{ orderId: string }>();
  if (!orderId) {
    return <ErrorState title="Missing order id" description="No order was selected for this route." />;
  }

  const order = getOrderById(orderId);
  if (!order) {
    return <ErrorState title="Order not found" description="The requested order does not exist in the mock dataset." />;
  }

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Order Details"
        title={order.id}
        description="Full order context with customer details, item-level kitchen status, lifecycle state, and operational actions."
      />

      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Panel>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge value={order.status} />
            <StatusBadge value={order.paymentStatus} />
          </div>
          <div className="mt-5 space-y-3 text-sm text-stone-600">
            <p><span className="font-medium text-ink">Customer:</span> {order.customerName}</p>
            <p><span className="font-medium text-ink">Phone:</span> {order.customerPhone}</p>
            <p><span className="font-medium text-ink">Placed:</span> {shortDate(order.placedAt)}</p>
            <p><span className="font-medium text-ink">Order type:</span> {order.type.replace("_", " ")}</p>
            <p><span className="font-medium text-ink">Source:</span> {order.source}</p>
            <p><span className="font-medium text-ink">ETA:</span> {order.etaMinutes} minutes</p>
            <p><span className="font-medium text-ink">Notes:</span> {order.notes ?? "No special instructions"}</p>
          </div>
          <button className="mt-6 rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-white">Print invoice</button>
        </Panel>

        <Panel>
          <h4 className="text-lg font-semibold text-ink">Item-level preparation flow</h4>
          <div className="mt-5 space-y-4">
            {order.items.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-3xl bg-stone-50 p-4">
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-stone-600">Quantity {item.quantity}</p>
                </div>
                <StatusBadge value={item.itemStatus === "cooking" ? "preparing" : item.itemStatus} />
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {["pending", "confirmed", "preparing", "ready", "out_for_delivery", "delivered", "canceled"].map((step) => (
              <button key={step} className="rounded-2xl border border-stone-200 px-4 py-3 text-sm capitalize text-stone-700">
                {step.replaceAll("_", " ")}
              </button>
            ))}
          </div>
          <p className="mt-5 text-sm text-stone-600">Total payable: <span className="font-semibold text-ink">{currency(order.total)}</span></p>
        </Panel>
      </div>
    </div>
  );
}
