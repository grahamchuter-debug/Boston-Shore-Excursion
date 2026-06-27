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

const path = "/boston-cruise-ship-schedule";

export const metadata: Metadata = pageMetadata({
  title: "Boston Cruise Ship Schedule — Port Calls & Planning Tips",
  description:
    "Boston cruise ship schedule overview — Black Falcon terminal, typical Canada & New England call patterns, multi-ship days, and excursion booking advice.",
  path,
});

export default function BostonCruiseShipSchedulePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Boston Cruise Ship Schedule",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Boston Cruise Ship Schedule" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Boston Cruise Ship Schedule" },
          ]}
        />
        <PageHero
          eyebrow="Port planning"
          title="Boston cruise ship schedule"
          subtitle="When ships call at Black Falcon, what to expect on busy days, and how to plan excursions."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Where to find your schedule">
            <p>
              Your cruise line app and daily newsletter list arrival, departure, and
              all-aboard times for your Boston call. Massport publishes general cruise
              terminal information; exact ship schedules change seasonally by line
              and itinerary.
            </p>
            <p>
              Always plan from <strong>your</strong> all-aboard time — not the posted
              departure — and subtract 45–60 minutes for return buffer.
            </p>
          </GuideSection>

          <GuideSection title="Typical call patterns">
            <p>
              Canada & New England itineraries often arrive early morning (7–9 am) and
              depart late afternoon or evening (4–6 pm), yielding 6–9 hours ashore
              after immigration. Some lines offer overnight or extended calls on
              repositioning voyages — rare but valuable for Salem or Lexington day trips.
            </p>
          </GuideSection>

          <GuideSection title="Multi-ship days">
            <p>
              Boston harbour accommodates multiple large ships on peak autumn weekends.
              Effects include longer taxi queues at Black Falcon, sold-out Tea Party
              Museum slots, crowded Quincy Market midday, and higher shore excursion
              demand. Pre-book tours and timed museum tickets when your date shows
              overlapping ship calls.
            </p>
          </GuideSection>

          <GuideSection title="Planning tools">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/boston-cruise-planner" className="text-blue-800 hover:underline">
                  Cruise planner
                </Link>{" "}
                — match excursions to hours ashore
              </li>
              <li>
                <Link href="/one-day-in-boston-from-a-cruise-ship" className="text-blue-800 hover:underline">
                  One day in Boston
                </Link>{" "}
                — sample itineraries
              </li>
              <li>
                <Link href="/best-time-to-visit-boston" className="text-blue-800 hover:underline">
                  Best time to visit
                </Link>{" "}
                — seasonal context
              </li>
              <li>
                <Link href="/enquire" className="text-blue-800 hover:underline">
                  Enquire
                </Link>{" "}
                — book with your ship name and port date
              </li>
            </ul>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
              { label: "Best Boston shore excursions", href: "/best-boston-shore-excursions" },
              { label: "FAQ", href: "/faq" },
            ]}
            excursions={[
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
              { label: "Freedom Trail tour", href: "/freedom-trail-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
