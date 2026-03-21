import { cn } from "@/lib/utils";

const badgeStyles: Record<string, string> = {
  open: "bg-emerald-100 text-emerald-700",
  busy: "bg-amber-100 text-amber-700",
  closed: "bg-stone-200 text-stone-700",
  active: "bg-emerald-100 text-emerald-700",
  queued: "bg-stone-200 text-stone-700",
  pending: "bg-amber-100 text-amber-700",
  confirmed: "bg-sky-100 text-sky-700",
  preparing: "bg-orange-100 text-orange-700",
  ready: "bg-violet-100 text-violet-700",
  out_for_delivery: "bg-indigo-100 text-indigo-700",
  delivered: "bg-emerald-100 text-emerald-700",
  canceled: "bg-rose-100 text-rose-700",
  bronze: "bg-amber-100 text-amber-700",
  silver: "bg-slate-100 text-slate-700",
  gold: "bg-yellow-100 text-yellow-700",
  paid: "bg-emerald-100 text-emerald-700",
  failed: "bg-rose-100 text-rose-700",
  refunded: "bg-stone-200 text-stone-700",
  suspended: "bg-rose-100 text-rose-700",
  invited: "bg-sky-100 text-sky-700"
};

export function StatusBadge({ value }: { value: string }) {
  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize", badgeStyles[value] ?? "bg-stone-100 text-stone-700")}>
      {value.replaceAll("_", " ")}
    </span>
  );
}
