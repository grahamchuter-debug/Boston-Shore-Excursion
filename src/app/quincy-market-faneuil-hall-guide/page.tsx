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

const path = "/quincy-market-faneuil-hall-guide";

export const metadata: Metadata = pageMetadata({
  title: "Quincy Market & Faneuil Hall Guide — Boston's Waterfront Hub",
  description:
    "Quincy Market and Faneuil Hall guide — Cradle of Liberty history, food stalls, Greenway walk from Black Falcon, and cruise passenger tips.",
  path,
});

export default function QuincyMarketGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Quincy Market & Faneuil Hall Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Quincy Market & Faneuil Hall" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Quincy Market & Faneuil Hall" },
          ]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Quincy Market & Faneuil Hall guide"
          subtitle="Revolutionary history meets clam chowder — Boston's most walkable attraction from the cruise terminal."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Faneuil Hall — Cradle of Liberty">
            <p>
              Built in 1742, Faneuil Hall hosted Revolutionary-era town meetings where
              Samuel Adams and others protested British policy. The golden grasshopper
              weathervane crowns the building — a Boston icon visible from the harbour.
              Free ground-floor visitor access; upper Great Hall open on schedule.
            </p>
          </GuideSection>

          <GuideSection title="Quincy Market food hall">
            <p>
              Adjacent Quincy Market (1826) houses food stalls serving clam chowder,
              lobster rolls, Boston cream pie, and international options. Street
              performers entertain crowds on the cobblestone plaza. Summer midday
              brings peak lines when multiple cruise ships dock.
            </p>
          </GuideSection>

          <GuideSection title="Walking from Black Falcon">
            <p>
              Quincy Market is roughly 1.2 miles from Black Falcon — 20–25 minutes via
              the Rose Kennedy Greenway. This is the highest-confidence walk for short
              port days. Full walking guide:{" "}
              <Link href="/walking-boston-from-cruise-port" className="text-blue-800 hover:underline">
                walking from cruise port
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Shore excursion option">
            <p>
              The{" "}
              <Link href="/quincy-market-waterfront-tour" className="text-blue-800 hover:underline">
                Quincy Market &amp; waterfront tour
              </Link>{" "}
              suits 4+ hour port calls — food, history, and harbour views with high
              return-to-ship confidence.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Freedom Trail guide", href: "/freedom-trail-guide" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
            ]}
            excursions={[
              { label: "Quincy Market & waterfront", href: "/quincy-market-waterfront-tour" },
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
