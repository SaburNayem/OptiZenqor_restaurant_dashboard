"use client";

import { Link, useLocation } from "react-router-dom";

import { useDashboardState } from "@/hooks/use-dashboard-state";
import { cn } from "@/lib/utils";
import { UserRole } from "@/types/dashboard";

const navItems: Array<{ href: string; label: string; roles: UserRole[] }> = [
  { href: "/", label: "Overview", roles: ["super_admin", "branch_manager", "kitchen_viewer"] },
  { href: "/branches", label: "Branches", roles: ["super_admin", "branch_manager"] },
  { href: "/menu", label: "Menu", roles: ["super_admin", "branch_manager"] },
  { href: "/orders", label: "Orders", roles: ["super_admin", "branch_manager", "kitchen_viewer"] },
  { href: "/kitchen", label: "Kitchen", roles: ["super_admin", "branch_manager", "kitchen_viewer"] },
  { href: "/customers", label: "Customers", roles: ["super_admin", "branch_manager"] },
  { href: "/offers", label: "Offers", roles: ["super_admin", "branch_manager"] },
  { href: "/reviews", label: "Reviews", roles: ["super_admin", "branch_manager"] },
  { href: "/notifications", label: "Notifications", roles: ["super_admin", "branch_manager"] },
  { href: "/reports", label: "Reports", roles: ["super_admin", "branch_manager"] },
  { href: "/staff", label: "Staff", roles: ["super_admin"] },
  { href: "/settings", label: "Settings", roles: ["super_admin"] },
  { href: "/support", label: "Support", roles: ["super_admin", "branch_manager"] }
];

export function Sidebar() {
  const { pathname } = useLocation();
  const { role } = useDashboardState();

  return (
    <aside className="sticky top-0 flex h-screen w-full max-w-72 flex-col border-r border-stone-200 bg-[#1b262b] px-5 py-6 text-stone-100">
      <div className="mb-8 rounded-3xl bg-white/10 p-4 shadow-panel">
        <p className="text-xs uppercase tracking-[0.28em] text-stone-300">OptiZenqor</p>
        <h1 className="mt-2 text-2xl font-semibold">Restaurant Ops</h1>
        <p className="mt-2 text-sm text-stone-300">Single-brand, multi-branch control center.</p>
      </div>

      <nav className="space-y-2">
        {navItems
          .filter((item) => item.roles.includes(role))
          .map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm transition",
                  active ? "bg-sand text-ink shadow-panel" : "text-stone-200 hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
      </nav>

      <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-300">Access Profile</p>
        <p className="mt-2 text-lg font-semibold capitalize">{role.replaceAll("_", " ")}</p>
        <p className="mt-1 text-sm text-stone-300">Visibility changes across the dashboard in real time.</p>
      </div>
    </aside>
  );
}
