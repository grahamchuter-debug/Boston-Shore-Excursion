import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/harvard-cambridge-from-boston-cruise-port";

export const metadata: Metadata = pageMetadata({
  title: "Harvard & Cambridge From Boston Cruise Port — Timing Guide",
  description:
    "Visit Harvard and Cambridge from Black Falcon Cruise Terminal — transfer time, Harvard Yard, Harvard Square, and return-to-ship advice for cruise passengers.",
  path,
});

export default function HarvardFromCruisePortPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Harvard & Cambridge From Boston Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Harvard From Cruise Port" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Harvard From Cruise Port" },
          ]}
        />
        <PageHero
          eyebrow="Day trip guide"
          title="Harvard & Cambridge from the Boston cruise port"
          subtitle="Cross the Charles River to Harvard Yard — when it fits your port day and when to stay downtown."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Can cruise passengers visit Harvard?">
            <p>
              Yes — on 6–8 hour port days via organised{" "}
              <Link href="/harvard-cambridge-tour" className="text-blue-800 hover:underline">
                Harvard &amp; Cambridge tours
              </Link>
              . Harvard Square sits roughly 4 miles from Black Falcon across the
              Charles River — 20–30 minutes by coach or taxi depending on bridge
              traffic.
            </p>
            <p>
              Four-hour calls cannot realistically include Harvard once transfer time
              is counted. First-time visitors with one Boston day usually prioritise
              Freedom Trail and USS Constitution instead.
            </p>
          </GuideSection>

          <GuideSection title="What you see">
            <p>
              Typical shore excursions cover Harvard Yard, the John Harvard Statue,
              Widener Library exterior, and Harvard Square&apos;s bookshops and cafés.
              Some tours add MIT&apos;s Killian Court or a Charles River Esplanade
              photo stop on the return route.
            </p>
            <p>
              Deeper campus context:{" "}
              <Link href="/harvard-cambridge-guide" className="text-blue-800 hover:underline">
                Harvard &amp; Cambridge guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Independent vs organised">
            <p>
              The MBTA Red Line reaches Harvard from South Station (Silver Line from
              Seaport, then transfer) — but managing subway timing against all-aboard
              adds stress. Coach tours with pier pickup remain the cruise passenger
              default.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Organised Harvard tours achieve high return confidence on 6+ hour calls. Rush-hour bridge traffic (4–6 pm) rarely affects morning and midday port schedules. Build standard 45–60 minute buffer before all-aboard."
          />

          <GuideRelatedLinks
            guides={[
              { label: "Harvard & Cambridge guide", href: "/harvard-cambridge-guide" },
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
