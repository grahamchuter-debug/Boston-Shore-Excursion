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

const path = "/boston-tea-party-guide";

export const metadata: Metadata = pageMetadata({
  title: "Boston Tea Party Guide — History & Museum Visitor Info",
  description:
    "Boston Tea Party guide — December 1773 history, Ships & Museum on Fort Point Channel, and how cruise passengers visit from Black Falcon.",
  path,
});

export default function BostonTeaPartyGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Boston Tea Party Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Boston Tea Party Guide" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Boston Tea Party Guide" }]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Boston Tea Party guide"
          subtitle="The event that sparked the Revolution — history, museum, and cruise port access."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="What happened in 1773">
            <p>
              On December 16, 1773, colonists boarded three East India Company ships
              in Boston Harbour and dumped 342 chests of tea into the water — protest
              against taxation without representation. Parliament responded with the
              Coercive Acts, tightening tensions that led to the Revolutionary War.
            </p>
          </GuideSection>

          <GuideSection title="Boston Tea Party Ships & Museum">
            <p>
              The museum on Fort Point Channel recreates the town meeting, tea ship
              boarding, and multi-sensory documentary experience. Costumed
              interpreters guide timed groups through 60–90 minutes of immersive
              history. The Robinson Tea Chest — the only known surviving tea chest
              from the event — is on display.
            </p>
          </GuideSection>

          <GuideSection title="Cruise passenger access">
            <p>
              Roughly 1 mile from Black Falcon — walkable via the Greenway or a short
              taxi ride. Pre-book timed tickets on busy cruise days. Shore excursion
              detail:{" "}
              <Link href="/boston-tea-party-cruise-excursion" className="text-blue-800 hover:underline">
                Boston Tea Party cruise excursion
              </Link>
              . Book the{" "}
              <Link href="/boston-tea-party-tour" className="text-blue-800 hover:underline">
                Boston Tea Party tour
              </Link>
              .
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Freedom Trail guide", href: "/freedom-trail-guide" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
            ]}
            excursions={[
              { label: "Boston Tea Party tour", href: "/boston-tea-party-tour" },
              { label: "Freedom Trail tour", href: "/freedom-trail-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
