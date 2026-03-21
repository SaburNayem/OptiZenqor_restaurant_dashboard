"use client";

import { DataTable } from "@/components/ui/data-table";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { getStaff } from "@/services/dashboard-service";

export default function StaffPage() {
  const { role, scopedBranchId } = useDashboardState();
  const rows = getStaff(role, scopedBranchId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Staff & Roles"
        title="User accounts, role assignment, and branch ownership"
        description="Manage internal users, branch assignments, invitation state, and permission-edit placeholders."
      />
      <DataTable
        title="Staff Users"
        rows={rows}
        columns={[
          { header: "Name", render: (user) => user.name },
          { header: "Role", render: (user) => user.role.replaceAll("_", " ") },
          { header: "Branch", render: (user) => user.branchId ?? "Global" },
          { header: "Email", render: (user) => user.email },
          { header: "Status", render: (user) => <StatusBadge value={user.status} /> }
        ]}
      />
    </div>
  );
}
