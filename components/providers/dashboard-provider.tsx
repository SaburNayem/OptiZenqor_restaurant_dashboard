"use client";

import { createContext, useMemo, useState } from "react";
import { ReactNode } from "react";

import { roleAssignments } from "@/services/dashboard-service";
import { UserRole } from "@/types/dashboard";

interface DashboardContextValue {
  role: UserRole;
  setRole: (role: UserRole) => void;
  selectedBranchId: string;
  setSelectedBranchId: (branchId: string) => void;
  scopedBranchId: string;
}

export const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>("super_admin");
  const [selectedBranchId, setSelectedBranchId] = useState("all");

  const value = useMemo(() => {
    const assignedBranchId = roleAssignments[role];
    return {
      role,
      setRole,
      selectedBranchId,
      setSelectedBranchId,
      scopedBranchId: role === "super_admin" ? selectedBranchId : assignedBranchId ?? "all"
    };
  }, [role, selectedBranchId]);

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
