import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{eyebrow}</p> : null}
        <h3 className="mt-1 text-2xl font-semibold text-ink">{title}</h3>
        {description ? <p className="mt-2 max-w-3xl text-sm text-stone-600">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
