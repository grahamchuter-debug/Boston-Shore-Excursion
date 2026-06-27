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

const path = "/uss-constitution-from-boston-cruise-port";

export const metadata: Metadata = pageMetadata({
  title: "USS Constitution From Boston Cruise Port — Charlestown Navy Yard Guide",
  description:
    "Visit USS Constitution from Black Falcon Cruise Terminal — Charlestown Navy Yard access, ship tours, timing, and return-to-ship advice for cruise passengers.",
  path,
});

export default function USSConstitutionFromCruisePortPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "USS Constitution From Boston Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "USS Constitution From Cruise Port" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "USS Constitution From Cruise Port" },
          ]}
        />
        <PageHero
          eyebrow="Landmark guide"
          title="USS Constitution from the Boston cruise port"
          subtitle="Old Ironsides, Charlestown Navy Yard access, and how cruise passengers reach America's oldest commissioned warship."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Why USS Constitution matters">
            <p>
              Launched in 1797, USS Constitution is the world&apos;s oldest commissioned
              naval vessel still afloat. Named by George Washington and victorious in
              the War of 1812, &quot;Old Ironsides&quot; survives as a symbol of American
              naval heritage — berthed in the Charlestown Navy Yard across Boston
              Harbour from downtown.
            </p>
          </GuideSection>

          <GuideSection title="Distance from Black Falcon">
            <p>
              Charlestown Navy Yard sits roughly 2 miles northeast of Black Falcon
              Cruise Terminal. Options include organised tour coach, water taxi from
              Long Wharf (seasonal), taxi over the Charlestown Bridge, or a 40–50
              minute walk via the North End and bridge crossings.
            </p>
            <p>
              Most{" "}
              <Link href="/historic-boston-city-tour" className="text-blue-800 hover:underline">
                historic city tours
              </Link>{" "}
              and{" "}
              <Link href="/boston-highlights-tour" className="text-blue-800 hover:underline">
                highlights tours
              </Link>{" "}
              include the Navy Yard — the lowest-stress approach on standard port days.
            </p>
          </GuideSection>

          <GuideSection title="Ship access and museum">
            <p>
              The USS Constitution Museum (adjacent to the ship) is open daily with
              exhibits on naval history and ship construction. Free timed tickets are
              required for below-decks ship tours when the vessel is open — security
              screening applies. Maintenance and naval operations occasionally close
              interior access; check status on your port day.
            </p>
            <p>
              The WWII destroyer USS Cassin Young is also moored at the yard — worth
              20–30 minutes if your schedule allows. Bunker Hill Monument rises nearby
              at the Freedom Trail&apos;s northern end.
            </p>
          </GuideSection>

          <GuideSection title="Timing for cruise passengers">
            <p>
              Allow 60–90 minutes at the Navy Yard including museum and ship queue.
              Pair with North End or Freedom Trail sites only if you have 6+ hours
              ashore. On 4-hour calls, prioritise Quincy Market unless a highlights
              tour bundles Constitution efficiently.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="When included on organised tours, Navy Yard visits achieve high return confidence — coaches handle Charlestown Bridge traffic. Independent visitors should taxi back to Black Falcon rather than walk if time is tight."
          />

          <GuideRelatedLinks
            guides={[
              { label: "Freedom Trail from cruise port", href: "/freedom-trail-from-cruise-port" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
            ]}
            excursions={[
              { label: "Historic Boston city tour", href: "/historic-boston-city-tour" },
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
