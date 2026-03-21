import { ReactNode } from "react";

import { Panel } from "@/components/ui/panel";

export function FiltersBar({
  searchPlaceholder,
  children
}: {
  searchPlaceholder: string;
  children?: ReactNode;
}) {
  return (
    <Panel className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <input
        className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-gold md:max-w-md"
        placeholder={searchPlaceholder}
        readOnly
        value=""
      />
      <div className="flex flex-wrap gap-2">{children}</div>
    </Panel>
  );
}
