import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Support & Help"
        title="Support tickets, FAQ, and legal placeholders"
        description="Reserved area for internal support workflows and editable help content once backend modules are connected."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <EmptyState title="Support Tickets Placeholder" description="Prepare a ticket inbox here for branch issue reporting and escalation workflows." />
        <EmptyState title="FAQ & Legal Placeholder" description="Add editable FAQ articles, refund policies, and legal text modules in the next phase." />
      </div>
    </div>
  );
}
