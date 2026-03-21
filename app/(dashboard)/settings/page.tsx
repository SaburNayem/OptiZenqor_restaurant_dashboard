import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSettings } from "@/services/dashboard-service";

export default function SettingsPage() {
  const settings = getSettings();

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Settings"
        title="Restaurant brand and operating defaults"
        description="Centralized brand settings for support contacts, currency, tax, delivery fee, logo placeholder, and theme controls."
      />
      <Panel>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={settings.brandName} />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={settings.supportEmail} />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={settings.supportPhone} />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={settings.currency} />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={settings.taxRate} />
          <input className="rounded-2xl border border-stone-200 px-4 py-3" defaultValue={settings.deliveryFee} />
        </div>
        <button className="mt-6 rounded-2xl bg-ink px-4 py-3 text-white">Save settings</button>
      </Panel>
    </div>
  );
}
