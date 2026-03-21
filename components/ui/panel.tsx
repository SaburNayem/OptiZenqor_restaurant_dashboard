import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Panel({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn("rounded-[28px] border border-white/60 bg-white p-5 shadow-panel", className)}>{children}</section>;
}
