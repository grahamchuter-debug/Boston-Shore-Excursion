import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/one-day-in-boston-from-a-cruise-ship";

const faqs = [
  {
    question: "What can you do in Boston with 4 hours ashore?",
    answer:
      "Walk the Greenway to Quincy Market and Faneuil Hall, grab clam chowder or a lobster roll, and explore the waterfront. Skip Salem, Harvard, and Lexington — travel time consumes your window.",
  },
  {
    question: "What is the best 6-hour Boston itinerary?",
    answer:
      "A Freedom Trail walking tour or Boston highlights tour covering downtown sites, Faneuil Hall, and often USS Constitution. Alternatively, Tea Party Museum plus Quincy Market for a lighter pace.",
  },
  {
    question: "Can you visit Harvard on a Boston cruise day?",
    answer:
      "Realistically on 8+ hour calls via organised tour. Six hours is tight once transfer time is counted. See our Harvard from cruise port guide for detail.",
  },
  {
    question: "Is Salem realistic from a cruise ship?",
    answer:
      "Only on 8+ hour port days with a guaranteed-return coach tour. Travel is 40–60 minutes each way. Shorter calls should stay in Boston.",
  },
  {
    question: "Should first-time visitors prioritise the Freedom Trail or USS Constitution?",
    answer:
      "Both if you have 6+ hours — many highlights tours combine them. With 4–5 hours, choose Quincy Market and a partial trail walk, or a condensed highlights tour.",
  },
  {
    question: "Where should cruise passengers eat in Boston?",
    answer:
      "Quincy Market food hall for classics, North End for Italian, or Atlantic Avenue waterfront restaurants. Allow 45–60 minutes for sit-down lunch.",
  },
  {
    question: "How much buffer before all-aboard?",
    answer:
      "45–60 minutes minimum. Add extra time if you take highway trips to Salem or Lexington, or afternoon whale watching with fixed boat schedules.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "One Day In Boston From A Cruise Ship — 4, 6 & 8 Hour Itineraries",
  description:
    "Sample itineraries for 4, 6, and 8 hours ashore in Boston — Freedom Trail, USS Constitution, food stops, Harvard, Salem, and return-to-ship timing.",
  path,
});

export default function OneDayBostonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "One Day In Boston From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "One Day In Boston" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "One Day In Boston" }]}
        />
        <PageHero
          eyebrow="Itinerary guide"
          title="One day in Boston from a cruise ship"
          subtitle="Practical plans for 4, 6, and 8 hours ashore — walking routes, historic sites, and honest timing."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Boston rewards planning — match your itinerary to actual hours ashore, not wishful thinking. These sample timelines assume a Black Falcon docking and standard immigration clearance."
            fields={{
              timeInPort: "Match plan to 4, 6, or 8 hour window",
              bestFor: "Tailored sightseeing by duration",
              activityLevel: "Easy to moderate depending on plan",
              familyFriendly: "All itineraries have family options",
              returnToShip: "Highest on short waterfront walks",
              popularTypes: "Highlights tours, trail walks, day trips",
            }}
          />

          <GuideSection title="How to use this guide">
            <p>
              Count <strong>effective hours</strong> from when you clear the terminal
              to when you must be back aboard — not the posted port time. Subtract
              45–60 minutes for your return buffer before choosing an itinerary.
              Use our{" "}
              <Link href="/boston-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to match excursions to your schedule.
            </p>
          </GuideSection>

          <GuideSection title="4 hours ashore — waterfront and taste of history">
            <p>
              <strong>Realistic expectation:</strong> One compact zone, not all of Boston.
              Best for short calls, mobility considerations, or passengers who prefer
              a relaxed pace.
            </p>
            <p>
              <strong>Sample timeline:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>0:00 — Exit Black Falcon, walk Rose Kennedy Greenway north</li>
              <li>0:25 — Arrive Faneuil Hall and Quincy Market; explore food stalls</li>
              <li>1:15 — Lunch (clam chowder, lobster roll, or pastry)</li>
              <li>2:00 — Continue to Long Wharf harbour views; optional short harbour walk</li>
              <li>2:45 — Begin return walk to terminal</li>
              <li>3:15 — Buffer at ship</li>
            </ul>
            <p>
              <strong>Upgrade option:</strong> Pre-book{" "}
              <Link href="/boston-tea-party-tour" className="text-blue-800 hover:underline">
                Boston Tea Party Museum
              </Link>{" "}
              timed entry (90 minutes) instead of extended Quincy Market browsing —
              tight but feasible if you taxi one direction.
            </p>
            <p>
              <strong>Skip:</strong> Salem, Harvard, Lexington, whale watching, full
              Freedom Trail.
            </p>
          </GuideSection>

          <GuideSection title="6 hours ashore — Freedom Trail or highlights tour">
            <p>
              <strong>Realistic expectation:</strong> Downtown Revolutionary Boston
              with either a guided tour or purposeful independent walking. This is
              the most common port window on Canada & New England itineraries.
            </p>
            <p>
              <strong>Option A — organised tour:</strong> Book a{" "}
              <Link href="/freedom-trail-shore-excursion" className="text-blue-800 hover:underline">
                Freedom Trail tour
              </Link>{" "}
              or{" "}
              <Link href="/boston-highlights-tour" className="text-blue-800 hover:underline">
                Boston highlights tour
              </Link>{" "}
              (5–6 hours including pier transfer). Covers State House, Granary Burying
              Ground, Faneuil Hall, North End, and often USS Constitution.
            </p>
            <p>
              <strong>Option B — independent walking:</strong> Greenway to Boston Common,
              follow red bricks through Granary Burying Ground and Old State House,
              lunch at Quincy Market, Old North Church if pace allows. Start back
              90 minutes before all-aboard.
            </p>
            <p>
              <strong>Option C — Tea Party + waterfront:</strong> Morning museum visit,
              afternoon Quincy Market and Greenway return — lower walking intensity.
            </p>
          </GuideSection>

          <GuideSection title="8 hours ashore — full Boston or day trip">
            <p>
              <strong>Realistic expectation:</strong> One major experience plus downtown
              time, or a dedicated out-of-town excursion — not both Salem and Harvard
              the same day.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Itinerary</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Best for</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Return confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Highlights tour + Quincy Market lunch</td>
                    <td className="px-4 py-3">First-time visitors</td>
                    <td className="px-4 py-3">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Harvard &amp; Cambridge tour</td>
                    <td className="px-4 py-3">University enthusiasts</td>
                    <td className="px-4 py-3">High on organised tours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Whale watching (Apr–Oct)</td>
                    <td className="px-4 py-3">Wildlife lovers who know Boston</td>
                    <td className="px-4 py-3">Moderate — weather dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Salem day trip</td>
                    <td className="px-4 py-3">Witch history fans, 8+ hours only</td>
                    <td className="px-4 py-3">Moderate — traffic dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Lexington &amp; Concord tour</td>
                    <td className="px-4 py-3">Revolutionary War deep dive</td>
                    <td className="px-4 py-3">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Historic sites worth prioritising">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Freedom Trail core</strong> —{" "}
                <Link href="/freedom-trail-from-cruise-port" className="text-blue-800 hover:underline">
                  walking guide
                </Link>
              </li>
              <li>
                <strong>USS Constitution</strong> —{" "}
                <Link href="/uss-constitution-from-boston-cruise-port" className="text-blue-800 hover:underline">
                  Navy Yard access
                </Link>
              </li>
              <li>
                <strong>Boston Tea Party Ships &amp; Museum</strong> — interactive,
                timed entry
              </li>
              <li>
                <strong>Faneuil Hall &amp; Quincy Market</strong> —{" "}
                <Link href="/quincy-market-faneuil-hall-guide" className="text-blue-800 hover:underline">
                  food and history hub
                </Link>
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Food stops cruise passengers love">
            <p>
              Boston rewards eating well on a port day. Quincy Market delivers tourist
              classics efficiently. The North End — 10 minutes beyond Faneuil Hall —
              offers superior Italian pastries, espresso, and sit-down trattorias if
              your schedule allows. Legal Harborside and waterfront spots on Atlantic
              Avenue suit seafood with harbour views.
            </p>
            <p>
              Budget 45–60 minutes for sit-down lunch, 20–30 for food-hall grazing.
              Lines at popular stalls spike when multiple ships dock.
            </p>
          </GuideSection>

          <GuideSection title="Harvard and Cambridge — when it works">
            <p>
              Harvard Square sits across the Charles River — roughly 4 miles from
              Black Falcon. Organised{" "}
              <Link href="/harvard-cambridge-tour" className="text-blue-800 hover:underline">
                Harvard &amp; Cambridge tours
              </Link>{" "}
              need 4–5 hours including transfers. Viable on 8-hour calls as your primary
              activity, or on 6-hour calls if you skip downtown entirely (not ideal for
              first visits).
            </p>
            <p>
              Read{" "}
              <Link href="/harvard-cambridge-from-boston-cruise-port" className="text-blue-800 hover:underline">
                Harvard from cruise port
              </Link>{" "}
              for full analysis.
            </p>
          </GuideSection>

          <GuideSection title="Salem — only when realistic">
            <p>
              Salem witch trials history draws many cruise passengers, but geography
              matters. Salem is 25 miles northeast — 40–60 minutes each way by coach.
              Only book on <strong>8+ hour calls</strong> through operators guaranteeing
              cruise-ship return. October calls bring peak crowds.
            </p>
            <p>
              Honest timing analysis:{" "}
              <Link href="/salem-from-boston-cruise-port" className="text-blue-800 hover:underline">
                Salem from Boston cruise port
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Return confidence varies by itinerary. Waterfront walks and organised downtown tours achieve high confidence. Highway day trips to Salem or Lexington, and weather-dependent whale watching, require tighter scrutiny of operator guarantees and 60-minute buffers."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-boston-from-a-cruise-ship" },
              { label: "Best Boston shore excursions", href: "/best-boston-shore-excursions" },
            ]}
            excursions={[
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
              { label: "Quincy Market & waterfront", href: "/quincy-market-waterfront-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
