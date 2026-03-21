"use client";

import { DataTable } from "@/components/ui/data-table";
import { FiltersBar } from "@/components/ui/filters-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { getAnnouncements } from "@/services/dashboard-service";

export default function NotificationsPage() {
  const { scopedBranchId } = useDashboardState();
  const rows = getAnnouncements(scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Notifications"
        title="In-app notifications and operational announcements"
        description="Prepare branch notices, order-related alerts, and promo messages with audience targeting placeholders."
      />
      <FiltersBar searchPlaceholder="Search announcements or notification types" />
      <DataTable
        title="Notification Queue"
        rows={rows}
        columns={[
          { header: "Title", render: (announcement) => announcement.title },
          { header: "Type", render: (announcement) => announcement.type },
          { header: "Audience", render: (announcement) => announcement.audience },
          { header: "Status", render: (announcement) => <StatusBadge value={announcement.active ? "active" : "closed"} /> },
          { header: "Message", render: (announcement) => announcement.message }
        ]}
      />
    </div>
  );
}
