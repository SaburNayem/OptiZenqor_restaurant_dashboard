import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SideDrawer({
  open,
  title,
  children
}: {
  open: boolean;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "fixed right-0 top-0 z-40 h-full w-full max-w-md border-l border-stone-200 bg-white p-6 shadow-panel transition-transform",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      <h4 className="text-xl font-semibold text-ink">{title}</h4>
      <div className="mt-5 space-y-4 text-sm text-stone-600">{children}</div>
    </div>
  );
}
