"use client";

import { branches } from "@/data/mock-dashboard";
import { useDashboardState } from "@/hooks/use-dashboard-state";

export function Topbar() {
  const { role, setRole, selectedBranchId, setSelectedBranchId } = useDashboardState();
  const lockedBranch = role !== "super_admin";

  return (
    <div className="flex flex-col gap-4 border-b border-stone-200 bg-white/80 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Operations Dashboard</p>
        <h2 className="mt-1 text-2xl font-semibold text-ink">Brand owner and branch control center</h2>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <label className="flex flex-col gap-1 text-sm text-stone-600">
          Role view
          <select
            className="rounded-2xl border border-stone-200 bg-white px-4 py-2"
            value={role}
            onChange={(event) => setRole(event.target.value as typeof role)}
          >
            <option value="super_admin">Super Admin</option>
            <option value="branch_manager">Branch Manager</option>
            <option value="kitchen_viewer">Staff / Kitchen Viewer</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm text-stone-600">
          Branch filter
          <select
            className="rounded-2xl border border-stone-200 bg-white px-4 py-2 disabled:bg-stone-100"
            value={selectedBranchId}
            disabled={lockedBranch}
            onChange={(event) => setSelectedBranchId(event.target.value)}
          >
            <option value="all">All branches</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
