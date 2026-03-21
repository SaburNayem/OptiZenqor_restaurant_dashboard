import { ReactNode } from "react";

import { Panel } from "@/components/ui/panel";

export function StatCard({
  label,
  value,
  hint,
  icon
}: {
  label: string;
  value: string;
  hint: string;
  icon: ReactNode;
}) {
  return (
    <Panel className="relative overflow-hidden">
      <div className="absolute right-4 top-4 rounded-2xl bg-sand p-3 text-ink">{icon}</div>
      <p className="text-sm text-stone-500">{label}</p>
      <p className="mt-5 text-3xl font-semibold text-ink">{value}</p>
      <p className="mt-2 text-sm text-stone-600">{hint}</p>
    </Panel>
  );
}
