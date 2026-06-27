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

const path = "/walking-boston-from-cruise-port";

export const metadata: Metadata = pageMetadata({
  title: "Walking Boston From Cruise Port — Routes From Black Falcon",
  description:
    "Walk from Black Falcon Cruise Terminal to downtown Boston — Greenway routes, distances, cobblestones, and return-to-ship timing for cruise passengers.",
  path,
});

export default function WalkingBostonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Walking Boston From Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Walking From Cruise Port" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Walking From Cruise Port" },
          ]}
        />
        <PageHero
          eyebrow="Walking guide"
          title="Walking Boston from the cruise port"
          subtitle="Greenway routes, distances, and what cruise passengers can reach on foot from Black Falcon."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Why Boston works for walkers">
            <p>
              Black Falcon sits in the Seaport — not in the historic core — but the
              Rose Kennedy Greenway creates a direct, flat path to Faneuil Hall and
              Quincy Market. Few major cruise ports offer this quality of pedestrian
              access to headline attractions without a shuttle bus.
            </p>
          </GuideSection>

          <GuideSection title="Primary walking route">
            <p>
              Exit the terminal toward Northern Avenue, join the Greenway northbound,
              and follow landscaped paths past fountains and public art to the
              waterfront. Total distance to Quincy Market: roughly 1.2 miles,
              20–25 minutes at a comfortable pace.
            </p>
            <p>
              Continue to Boston Common (Freedom Trail start) for another 10–15
              minutes. The North End — Paul Revere House and Old North Church —
              adds 15–20 minutes beyond Faneuil Hall.
            </p>
          </GuideSection>

          <GuideSection title="Footwear and surfaces">
            <p>
              Downtown Boston mixes brick sidewalks, granite cobblestones, and modern
              pavement. Supportive walking shoes are essential — thin soles and heels
              punish on the Freedom Trail. Winter calls may bring ice on untreated
              cobbles.
            </p>
          </GuideSection>

          <GuideSection title="When walking is enough">
            <p>
              Four- to five-hour port days suit Greenway + Quincy Market walks.
              Six-hour calls allow Freedom Trail partial walks. Charlestown and USS
              Constitution require either extended walking (40+ minutes each way) or
              a water taxi — see{" "}
              <Link href="/freedom-trail-from-cruise-port" className="text-blue-800 hover:underline">
                Freedom Trail from cruise port
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="When to take a taxi instead">
            <ul className="list-disc space-y-2 pl-5">
              <li>Limited mobility or heat-sensitive passengers</li>
              <li>Rain without adequate gear</li>
              <li>Need to reach Fenway, Harvard, or Charlestown on tight timing</li>
              <li>Return window under 90 minutes</li>
            </ul>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Freedom Trail from cruise port", href: "/freedom-trail-from-cruise-port" },
              { label: "Quincy Market guide", href: "/quincy-market-faneuil-hall-guide" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
            ]}
            excursions={[
              { label: "Quincy Market & waterfront", href: "/quincy-market-waterfront-tour" },
              { label: "Freedom Trail tour", href: "/freedom-trail-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
