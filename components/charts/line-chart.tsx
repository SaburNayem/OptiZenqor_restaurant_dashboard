import { Panel } from "@/components/ui/panel";
import { SalesPoint } from "@/types/dashboard";

export function LineChart({ title, data }: { title: string; data: SalesPoint[] }) {
  const max = Math.max(...data.map((point) => point.value), 1);
  const points = data
    .map((point, index) => `${(index / Math.max(data.length - 1, 1)) * 100},${100 - (point.value / max) * 100}`)
    .join(" ");

  return (
    <Panel>
      <h4 className="text-lg font-semibold text-ink">{title}</h4>
      <svg className="mt-6 h-56 w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          fill="none"
          points={points}
          stroke="#b24a2f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
      <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-stone-600 md:grid-cols-6">
        {data.map((point) => (
          <div key={point.label}>
            <p>{point.label}</p>
            <p className="font-medium text-ink">{point.value}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
