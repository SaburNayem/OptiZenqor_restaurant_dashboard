import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/app/globals.css";
import { DashboardProvider } from "@/components/providers/dashboard-provider";

export const metadata: Metadata = {
  title: "OptiZenqor Restaurant Dashboard",
  description: "Premium single-brand restaurant operations dashboard"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DashboardProvider>{children}</DashboardProvider>
      </body>
    </html>
  );
}
