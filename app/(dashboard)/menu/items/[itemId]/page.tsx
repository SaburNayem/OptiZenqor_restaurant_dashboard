import { useParams } from "react-router-dom";

import { ErrorState } from "@/components/ui/error-state";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { getMenuItemById } from "@/services/dashboard-service";

export default function MenuItemEditorPage() {
  const { itemId } = useParams<{ itemId: string }>();
  if (!itemId) {
    return <ErrorState title="Missing menu item id" description="No menu item was selected for this route." />;
  }

  const item = itemId === "new" ? undefined : getMenuItemById(itemId);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Menu Item Editor"
        title={item ? `Edit ${item.name}` : "Create Menu Item"}
        description="Form scaffold for item pricing, variants, add-ons, branch availability, featured state, and preparation logic."
      />

      <Panel>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={item?.name} placeholder="Item name" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={item?.price} placeholder="Base price" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={item?.discountPrice} placeholder="Discount price" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={item?.prepTimeMins} placeholder="Preparation time" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3 md:col-span-2" defaultValue={item?.description} placeholder="Description" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={item?.variants.join(", ")} placeholder="Variants" />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={item?.addOns.join(", ")} placeholder="Add-ons" />
        </div>
        <button className="mt-6 rounded-2xl bg-ink px-4 py-3 text-white">Save item</button>
      </Panel>
    </div>
  );
}
