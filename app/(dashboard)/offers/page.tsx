"use client";

import { DataTable } from "@/components/ui/data-table";
import { FiltersBar } from "@/components/ui/filters-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { getOffers } from "@/services/dashboard-service";

export default function OffersPage() {
  const { scopedBranchId } = useDashboardState();
  const rows = getOffers(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Offers & Promotions"
        title="Coupons, campaigns, combos, and branch-specific promotions"
        description="Create and schedule discount logic, campaign timing, featured offers, and promo placeholders for banners or messaging."
      />
      <FiltersBar searchPlaceholder="Search offers, coupons, or campaign types" />
      <DataTable
        title="Promotions"
        rows={rows}
        columns={[
          { header: "Title", render: (offer) => offer.title },
          { header: "Type", render: (offer) => offer.type },
          { header: "Discount", render: (offer) => offer.discountLabel },
          { header: "Status", render: (offer) => <StatusBadge value={offer.active ? "active" : "closed"} /> },
          { header: "Dates", render: (offer) => `${offer.startDate} to ${offer.endDate}` }
        ]}
      />
    </div>
  );
}
