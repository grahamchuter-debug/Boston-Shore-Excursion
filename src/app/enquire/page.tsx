import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/enquire";

export const metadata: Metadata = pageMetadata({
  title: "Enquire — Boston Shore Excursions, Massachusetts",
  description:
    "Enquire about shore excursions in Boston, Massachusetts. Tell us your ship schedule — enquiry-only, no online booking yet.",
  path,
});

export default function EnquirePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Enquire About Boston Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Enquire" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Enquire" }]} />
        <PageHero
          eyebrow="Enquiry only — no online booking yet"
          title="Enquire about Boston shore excursions"
          subtitle="Tell us your ship, date, and hours ashore — we recommend tours with realistic return timing from Black Falcon Cruise Terminal."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <EnquiryForm />
          </div>
          <div>
            <ExcursionLinks />
          </div>
        </div>
        <div className="mt-10">
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
