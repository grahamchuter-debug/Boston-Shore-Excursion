import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/harvard-cambridge-guide";

export const metadata: Metadata = pageMetadata({
  title: "Harvard & Cambridge Guide — Harvard Yard & Harvard Square",
  description:
    "Harvard and Cambridge guide — Harvard Yard, Harvard Square, MIT skyline views, and visiting from a Boston cruise ship.",
  path,
});

export default function HarvardCambridgeGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Harvard & Cambridge Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Harvard & Cambridge Guide" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Harvard & Cambridge Guide" },
          ]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Harvard & Cambridge guide"
          subtitle="America's oldest university, Harvard Square, and the Charles River academic corridor."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Harvard Yard">
            <p>
              Founded in 1636, Harvard is the oldest university in the United States.
              Harvard Yard — the historic heart of campus — contains Massachusetts
              Hall, Widener Library, and the famous John Harvard Statue (rub the foot
              for luck, says tradition). The Yard is publicly accessible; building
              interiors generally require university affiliation.
            </p>
          </GuideSection>

          <GuideSection title="Harvard Square">
            <p>
              Harvard Square blends bookshops, cafés, street musicians, and the historic
              Out of Town News kiosk. It feels distinct from downtown Boston — more
              collegiate, less Revolutionary, though both sit minutes apart across the
              Charles River.
            </p>
          </GuideSection>

          <GuideSection title="MIT and the Charles River">
            <p>
              MIT&apos;s campus sits downstream along the Charles — Killian Court
              offers classic dome-and-river photos. Many shore excursions drive past
              both universities on cross-river loops.
            </p>
          </GuideSection>

          <GuideSection title="From a cruise ship">
            <p>
              Cruise timing guide:{" "}
              <Link href="/harvard-cambridge-from-boston-cruise-port" className="text-blue-800 hover:underline">
                Harvard from Boston cruise port
              </Link>
              . Book the{" "}
              <Link href="/harvard-cambridge-tour" className="text-blue-800 hover:underline">
                Harvard &amp; Cambridge tour
              </Link>{" "}
              for pier pickup and return timing.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Harvard from cruise port", href: "/harvard-cambridge-from-boston-cruise-port" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Best Boston shore excursions", href: "/best-boston-shore-excursions" },
            ]}
            excursions={[
              { label: "Harvard & Cambridge tour", href: "/harvard-cambridge-tour" },
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
