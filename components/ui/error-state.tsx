import { Panel } from "@/components/ui/panel";

export function ErrorState({ title, description }: { title: string; description: string }) {
  return (
    <Panel className="border-rose-200 bg-rose-50">
      <h4 className="text-lg font-semibold text-rose-700">{title}</h4>
      <p className="mt-2 text-sm text-rose-600">{description}</p>
    </Panel>
  );
}
