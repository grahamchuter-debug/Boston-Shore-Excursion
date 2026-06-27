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

const path = "/salem-from-boston-cruise-port";

const faqs = [
  {
    question: "Can you visit Salem from a Boston cruise ship?",
    answer:
      "Yes on 8+ hour port days with an organised coach tour that guarantees cruise-ship return. Independent trips on shorter calls are not recommended due to travel time and traffic risk.",
  },
  {
    question: "How long does it take to get from Boston cruise port to Salem?",
    answer:
      "Roughly 40–60 minutes each way by coach via Route 1A or I-93, depending on traffic. Budget 80–120 minutes total travel on port days.",
  },
  {
    question: "Is Salem worth it on a 6-hour port day?",
    answer:
      "No — travel alone consumes most of your window, leaving insufficient time in Salem with a safe return buffer. Stay in downtown Boston instead.",
  },
  {
    question: "What is Salem famous for?",
    answer:
      "The 1692 witch trials, maritime trade history, and atmospheric colonial architecture. The Salem Witch Museum and Peabody Essex Museum are headline stops.",
  },
  {
    question: "When is Salem busiest for cruise passengers?",
    answer:
      "October weekends during Halloween season see extreme crowds. September–October Canada & New England sailings are popular; pre-book tours on multi-ship days.",
  },
  {
    question: "Salem or Harvard — which fits better?",
    answer:
      "Harvard fits 6–8 hour calls with lower traffic risk. Salem needs 8+ hours and suits witch history enthusiasts specifically.",
  },
  {
    question: "Can I combine Salem with downtown Boston the same day?",
    answer:
      "Not realistically. Choose one primary destination per port call unless you have an exceptionally long overnight or 10+ hour window.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Salem From Boston Cruise Port — Timing, Travel & Honest Advice",
  description:
    "Can cruise passengers visit Salem from Boston? Travel time from Black Falcon, witch trials history, seasonal demand, and when Salem works — or doesn't — on a port day.",
  path,
});

export default function SalemFromCruisePortPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Salem From Boston Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Salem From Cruise Port" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Salem From Cruise Port" },
          ]}
        />
        <PageHero
          eyebrow="Authority guide"
          title="Salem from the Boston cruise port"
          subtitle="Honest timing, travel time, and when a Salem day trip actually works from Black Falcon."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Salem's witch trials legacy draws cruise passengers — but Boston and Salem are not the same city. Travel time is the deciding factor."
            fields={{
              timeInPort: "8+ hours strongly recommended",
              bestFor: "Witch history, maritime museums, October atmosphere",
              activityLevel: "Easy — village walking",
              familyFriendly: "Good — witch content may unsettle young children",
              returnToShip: "Moderate — traffic dependent",
              popularTypes: "Coach day trips, small-group vans",
            }}
          />

          <GuideSection title="The honest answer">
            <p>
              <strong>Salem works from a cruise ship only on long port days with
              organised transport.</strong> The town sits 25 miles northeast of Boston
              — a 40–60 minute coach ride each way on Route 1A or I-93. That travel
              consumes 80–120 minutes before you step foot in Salem, leaving 2–3 hours
              on site for an 8-hour port call once immigration, return buffer, and
              lunch are counted.
            </p>
            <p>
              On 6-hour calls, Salem is <strong>not realistic</strong>. Downtown Boston
              — Freedom Trail, USS Constitution, Quincy Market — delivers more history
              per minute ashore. We say this plainly so you do not waste a precious
              port day in traffic.
            </p>
          </GuideSection>

          <GuideSection title="Travel time from Black Falcon">
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Typical range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Coach Boston → Salem</td>
                    <td className="px-4 py-3">40–60 min each way</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Terminal clearance</td>
                    <td className="px-4 py-3">30–60 min after docking</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Time in Salem (8hr call)</td>
                    <td className="px-4 py-3">2–3 hours net</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Return buffer</td>
                    <td className="px-4 py-3">45–60 min before all-aboard</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">October weekend traffic</td>
                    <td className="px-4 py-3">Add 15–30 min each way</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Witch trials history — why Salem matters">
            <p>
              In 1692, Salem Village (now Danvers) and Salem Town witnessed mass
              hysteria, accusations of witchcraft, and 20 executions. Modern Salem
              preserves that legacy through museums, memorials, and walking tours —
              alongside centuries of maritime prosperity as one of America&apos;s
              greatest trading ports.
            </p>
            <p>
              Headline stops on shore excursions include the Salem Witch Museum
              (theatrical overview of 1692), Peabody Essex Museum (world-class maritime
              art), Derby Wharf, and the McIntire Historic District&apos;s Federal-style
              homes. Deeper context lives in our{" "}
              <Link href="/salem-from-boston-guide" className="text-blue-800 hover:underline">
                Salem guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="When Salem works">
            <ul className="list-disc space-y-2 pl-5">
              <li>8+ hours ashore with guaranteed-return coach tour</li>
              <li>You have already toured downtown Boston on a previous call</li>
              <li>Witch trials or maritime history is your primary interest</li>
              <li>Midweek October calls when crowds are manageable with pre-booking</li>
            </ul>
          </GuideSection>

          <GuideSection title="When Salem does not work">
            <ul className="list-disc space-y-2 pl-5">
              <li>Port calls under 8 hours</li>
              <li>First-time Boston visitors who have not seen Freedom Trail or USS Constitution</li>
              <li>Independent travel without cruise-timed return guarantee</li>
              <li>Combining Salem with whale watching or Lexington the same day</li>
              <li>October Saturday visits without pre-booked timed museum tickets</li>
            </ul>
          </GuideSection>

          <GuideSection title="Seasonal demand">
            <p>
              September and October Canada & New England cruises align with peak
              foliage and Halloween energy. Salem embraces the season — expect
              costumed crowds, sold-out museums, and slower traffic on Route 1A.
              May through August offers lighter crowds but less atmospheric decoration.
            </p>
            <p>
              Book{" "}
              <Link href="/salem-day-trip" className="text-blue-800 hover:underline">
                Salem day trip
              </Link>{" "}
              excursions early when your itinerary includes multiple ships in Boston
              harbour on the same day.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Salem day trips depend on I-93 and Route 1A traffic — summer construction and October event traffic tighten margins. Only book through operators who explicitly guarantee cruise-ship return. Build a full 60-minute buffer before all-aboard. Independent rental-car trips carry the highest risk."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Salem guide", href: "/salem-from-boston-guide" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Best Boston shore excursions", href: "/best-boston-shore-excursions" },
            ]}
            excursions={[
              { label: "Salem day trip", href: "/salem-day-trip" },
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
