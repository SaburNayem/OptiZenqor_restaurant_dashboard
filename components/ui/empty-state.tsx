import { Panel } from "@/components/ui/panel";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Panel className="border-dashed text-center">
      <h4 className="text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-2 text-sm text-stone-600">{description}</p>
    </Panel>
  );
}
