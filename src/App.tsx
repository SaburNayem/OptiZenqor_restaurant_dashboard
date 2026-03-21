import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import BranchDetailsPage from "@/app/(dashboard)/branches/[branchId]/page";
import BranchesPage from "@/app/(dashboard)/branches/page";
import CustomerDetailsPage from "@/app/(dashboard)/customers/[customerId]/page";
import CustomersPage from "@/app/(dashboard)/customers/page";
import KitchenPage from "@/app/(dashboard)/kitchen/page";
import MenuItemEditorPage from "@/app/(dashboard)/menu/items/[itemId]/page";
import MenuPage from "@/app/(dashboard)/menu/page";
import NotificationsPage from "@/app/(dashboard)/notifications/page";
import OffersPage from "@/app/(dashboard)/offers/page";
import OverviewPage from "@/app/(dashboard)/page";
import OrderDetailsPage from "@/app/(dashboard)/orders/[orderId]/page";
import OrdersPage from "@/app/(dashboard)/orders/page";
import ReportsPage from "@/app/(dashboard)/reports/page";
import ReviewsPage from "@/app/(dashboard)/reviews/page";
import SettingsPage from "@/app/(dashboard)/settings/page";
import StaffPage from "@/app/(dashboard)/staff/page";
import SupportPage from "@/app/(dashboard)/support/page";
import LoginPage from "@/app/login/page";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardProvider } from "@/components/providers/dashboard-provider";
import { ErrorState } from "@/components/ui/error-state";

function DashboardLayout({ children }: { children: ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}

function NotFoundPage() {
  return (
    <DashboardLayout>
      <ErrorState title="Page not found" description="The route you requested does not exist in this dashboard." />
    </DashboardLayout>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<DashboardLayout><OverviewPage /></DashboardLayout>} />
          <Route path="/branches" element={<DashboardLayout><BranchesPage /></DashboardLayout>} />
          <Route path="/branches/:branchId" element={<DashboardLayout><BranchDetailsPage /></DashboardLayout>} />
          <Route path="/menu" element={<DashboardLayout><MenuPage /></DashboardLayout>} />
          <Route path="/menu/items/:itemId" element={<DashboardLayout><MenuItemEditorPage /></DashboardLayout>} />
          <Route path="/orders" element={<DashboardLayout><OrdersPage /></DashboardLayout>} />
          <Route path="/orders/:orderId" element={<DashboardLayout><OrderDetailsPage /></DashboardLayout>} />
          <Route path="/kitchen" element={<DashboardLayout><KitchenPage /></DashboardLayout>} />
          <Route path="/customers" element={<DashboardLayout><CustomersPage /></DashboardLayout>} />
          <Route path="/customers/:customerId" element={<DashboardLayout><CustomerDetailsPage /></DashboardLayout>} />
          <Route path="/offers" element={<DashboardLayout><OffersPage /></DashboardLayout>} />
          <Route path="/reviews" element={<DashboardLayout><ReviewsPage /></DashboardLayout>} />
          <Route path="/notifications" element={<DashboardLayout><NotificationsPage /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><ReportsPage /></DashboardLayout>} />
          <Route path="/staff" element={<DashboardLayout><StaffPage /></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />
          <Route path="/support" element={<DashboardLayout><SupportPage /></DashboardLayout>} />

          <Route path="" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DashboardProvider>
    </BrowserRouter>
  );
}