import { ReactNode } from "react";

import "@/app/globals.css";
import { DashboardProvider } from "@/components/providers/dashboard-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <DashboardProvider>{children}</DashboardProvider>;
}
