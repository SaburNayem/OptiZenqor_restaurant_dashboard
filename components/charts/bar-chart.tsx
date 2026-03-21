import { Panel } from "@/components/ui/panel";
import { SalesPoint } from "@/types/dashboard";

export function BarChart({ title, data }: { title: string; data: SalesPoint[] }) {
  const max = Math.max(...data.map((point) => point.value), 1);

  return (
    <Panel>
      <h4 className="text-lg font-semibold text-ink">{title}</h4>
      <div className="mt-6 flex h-56 items-end gap-4">
        {data.map((point) => (
          <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex h-full w-full items-end">
              <div
                className="w-full rounded-t-[20px] bg-[linear-gradient(180deg,#c89b3c_0%,#b24a2f_100%)]"
                style={{ height: `${(point.value / max) * 100}%` }}
              />
            </div>
            <div className="text-center">
              <p className="text-xs text-stone-500">{point.label}</p>
              <p className="text-sm font-medium text-ink">{point.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
