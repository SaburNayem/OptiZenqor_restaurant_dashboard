"use client";

import { useContext } from "react";

import { DashboardContext } from "@/components/providers/dashboard-provider";

export function useDashboardState() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboardState must be used inside DashboardProvider");
  }

  return context;
}
