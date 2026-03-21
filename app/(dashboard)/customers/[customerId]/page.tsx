import { notFound } from "next/navigation";

import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { currency } from "@/lib/utils";
import { getCustomerById } from "@/services/dashboard-service";

export default async function CustomerDetailsPage({
  params
}: {
  params: Promise<{ customerId: string }>;
}) {
  const { customerId } = await params;
  const customer = getCustomerById(customerId);
  if (!customer) notFound();

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Customer Profile"
        title={customer.name}
        description="Customer order value, preferences, and service history ready for CRM and support integrations."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel>
          <h4 className="text-lg font-semibold text-ink">Profile</h4>
          <div className="mt-5 space-y-3 text-sm text-stone-600">
            <p><span className="font-medium text-ink">Email:</span> {customer.email}</p>
            <p><span className="font-medium text-ink">Phone:</span> {customer.phone}</p>
            <p><span className="font-medium text-ink">Orders:</span> {customer.totalOrders}</p>
            <p><span className="font-medium text-ink">Spending:</span> {currency(customer.totalSpending)}</p>
          </div>
        </Panel>
        <Panel>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-ink">Signals</h4>
            <StatusBadge value={customer.flagged ? "canceled" : customer.loyaltyStatus} />
          </div>
          <p className="mt-5 text-sm text-stone-600">{customer.recentActivity}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {customer.favoriteDishes.map((dish) => (
              <span key={dish} className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700">
                {dish}
              </span>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
