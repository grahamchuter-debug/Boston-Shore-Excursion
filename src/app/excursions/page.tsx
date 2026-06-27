import type { Metadata } from "next";
import { ExcursionCard } from "@/components/ExcursionCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/excursions";

export const metadata: Metadata = pageMetadata({
  title: "Boston Shore Excursions — Browse All Tours",
  description:
    "Browse independent shore excursions for cruise passengers in Boston, Massachusetts — Freedom Trail, Harvard, Salem, whale watching, and historic city tours.",
  path,
});

export default function ExcursionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Boston Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Excursions" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Excursions" }]}
        />
        <PageHero
          eyebrow="Excursions hub"
          title="Boston shore excursions"
          subtitle="Every tour below includes cruise passenger snapshots, return-to-ship guidance, and a direct enquiry path."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
        <div className="mt-12">
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
