"use client";

import { DataTable } from "@/components/ui/data-table";
import { FiltersBar } from "@/components/ui/filters-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { getReviews } from "@/services/dashboard-service";

export default function ReviewsPage() {
  const { scopedBranchId } = useDashboardState();
  const rows = getReviews(scopedBranchId);
  const averageRating = rows.reduce((sum, review) => sum + review.rating, 0) / Math.max(rows.length, 1);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Reviews & Ratings"
        title="Guest sentiment, branch ratings, and flagged feedback"
        description={`Visible average rating: ${averageRating.toFixed(1)}. Use this module to monitor branch and item sentiment before integrating reply tooling.`}
      />
      <FiltersBar searchPlaceholder="Search reviews, dishes, or guests" />
      <DataTable
        title="Review Feed"
        rows={rows}
        columns={[
          { header: "Guest", render: (review) => review.customerName },
          { header: "Item", render: (review) => review.menuItemName },
          { header: "Rating", render: (review) => `${review.rating}/5` },
          { header: "Flag", render: (review) => <StatusBadge value={review.flagged ? "canceled" : "active"} /> },
          { header: "Comment", render: (review) => review.comment }
        ]}
      />
    </div>
  );
}
