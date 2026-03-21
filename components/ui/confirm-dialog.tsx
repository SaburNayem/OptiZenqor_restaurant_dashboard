import { ReactNode } from "react";

import { Panel } from "@/components/ui/panel";

export function ConfirmDialog({
  title,
  description,
  confirmLabel,
  trigger
}: {
  title: string;
  description: string;
  confirmLabel: string;
  trigger?: ReactNode;
}) {
  return (
    <Panel className="border-dashed">
      {trigger}
      <h4 className="mt-3 text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-2 text-sm text-stone-600">{description}</p>
      <button className="mt-4 rounded-2xl bg-ink px-4 py-2 text-sm font-medium text-white">{confirmLabel}</button>
    </Panel>
  );
}
