import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { ExcursionCard } from "@/components/ExcursionCard";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-boston-shore-excursions";

const faqs = [
  {
    question: "What is the best shore excursion for first-time Boston visitors?",
    answer:
      "Boston highlights tour or Freedom Trail walking tour — both cover Revolutionary landmarks, Faneuil Hall, and often USS Constitution within standard 6–8 hour port windows.",
  },
  {
    question: "Which Boston excursion has the highest return-to-ship confidence?",
    answer:
      "Quincy Market and waterfront walks, Freedom Trail tours, historic city tours, and Boston highlights tours typically rate High confidence when booked through cruise-focused operators.",
  },
  {
    question: "Is Salem worth booking from a Boston cruise?",
    answer:
      "On 8+ hour calls with guaranteed-return operators — for witch history enthusiasts. Shorter port days should prioritise downtown Boston instead.",
  },
  {
    question: "Can you whale watch from a Boston cruise port day?",
    answer:
      "Yes, April through October when sea conditions cooperate. Allow 6–8 hours ashore and accept Moderate return confidence due to weather cancellations and variable trip length.",
  },
  {
    question: "Freedom Trail tour or historic city tour?",
    answer:
      "Freedom Trail if you want more walking and downtown depth. Historic city tour if you prefer coach transfers between districts with shorter walks at each stop.",
  },
  {
    question: "How do I book Boston shore excursions?",
    answer:
      "Use our enquiry form with ship name, port date, and hours ashore. We match options to your schedule and return-to-ship requirements.",
  },
  {
    question: "Does the best excursion include USS Constitution?",
    answer:
      "Most highlights and historic city tours include Charlestown Navy Yard. Confirm Constitution interior access when booking — hours vary with ship maintenance.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Boston Shore Excursions — Ranked For Cruise Passengers",
  description:
    "Best Boston shore excursions ranked by return confidence, port time, and first-visit value — Freedom Trail, USS Constitution, Harvard, Salem, and whale watching.",
  path,
});

export default function BestBostonExcursionsPage() {
  const ranked = [...excursions].sort((a, b) => {
    const order = { High: 0, Moderate: 1, Tight: 2 };
    return order[a.returnConfidence] - order[b.returnConfidence];
  });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Boston Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Boston Shore Excursions" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Boston Shore Excursions" },
          ]}
        />
        <PageHero
          eyebrow="Curated ranking"
          title="Best Boston shore excursions"
          subtitle="Ranked by return confidence, hours ashore, and first-visit value for cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Boston offers more quality shore excursions than most New England ports — but the best choice depends on your hours ashore, mobility, and whether this is your first visit."
            fields={{
              timeInPort: "6–8 hours ideal for top-ranked tours",
              bestFor: "History-first; wildlife and day trips need longer calls",
              activityLevel: "Varies — Quincy Market easy; Freedom Trail moderate",
              familyFriendly: "Strong across ranked options",
              returnToShip: "Prioritise High confidence on short calls",
              popularTypes: "Highlights, trail walks, Harvard, Salem",
            }}
          />

          <GuideSection title="How we rank excursions">
            <p>
              Rankings prioritise <strong>return-to-ship confidence</strong>, then
              first-visit value, then fit with typical 6–8 hour port windows. Excursions
              requiring highway travel or weather-dependent boats rank lower not because
              they are poor experiences, but because cruise timing risk rises.
            </p>
            <p>
              Start with our{" "}
              <Link href="/boston-cruise-port-guide" className="text-blue-800 hover:underline">
                Boston cruise port guide
              </Link>{" "}
              and{" "}
              <Link href="/one-day-in-boston-from-a-cruise-ship" className="text-blue-800 hover:underline">
                one day in Boston
              </Link>{" "}
              itineraries before booking.
            </p>
          </GuideSection>

          <GuideSection title="Quick comparison">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[48rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Excursion</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Duration</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Min. port hours</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Return</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">USS Constitution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ranked.map((e) => (
                    <tr key={e.slug}>
                      <td className="px-4 py-3">
                        <Link href={e.path} className="font-medium text-blue-800 hover:underline">
                          {e.shortTitle}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{e.duration}</td>
                      <td className="px-4 py-3">
                        {e.slug === "quincy-market-waterfront-tour" ? "4+" :
                         e.slug === "salem-day-trip" || e.slug === "lexington-concord-tour" ? "8+" :
                         e.slug === "harvard-cambridge-tour" ? "6+" :
                         e.slug === "whale-watching-tour" ? "6+" : "5+"}
                      </td>
                      <td className="px-4 py-3">{e.returnConfidence}</td>
                      <td className="px-4 py-3">
                        {["historic-boston-city-tour", "boston-highlights-tour"].includes(e.slug)
                          ? "Usually included"
                          : e.slug === "freedom-trail-shore-excursion"
                            ? "Sometimes"
                            : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Ranked excursions">
            <p>
              Full detail on each tour — enquire via individual pages or our{" "}
              <Link href="/enquire" className="text-blue-800 hover:underline">
                enquiry form
              </Link>
              .
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-6">
              {ranked.map((e) => (
                <ExcursionCard key={e.slug} excursion={e} />
              ))}
            </div>
          </GuideSection>

          <GuideSection title="Top picks by scenario">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>First visit, 6–8 hours:</strong>{" "}
                <Link href="/boston-highlights-tour" className="text-blue-800 hover:underline">
                  Boston highlights tour
                </Link>{" "}
                — Freedom Trail sites, USS Constitution, Quincy Market in one booking.
              </li>
              <li>
                <strong>History lovers who walk:</strong>{" "}
                <Link href="/freedom-trail-shore-excursion" className="text-blue-800 hover:underline">
                  Freedom Trail tour
                </Link>
              </li>
              <li>
                <strong>Short port day:</strong>{" "}
                <Link href="/quincy-market-waterfront-tour" className="text-blue-800 hover:underline">
                  Quincy Market &amp; waterfront
                </Link>
              </li>
              <li>
                <strong>Universities:</strong>{" "}
                <Link href="/harvard-cambridge-tour" className="text-blue-800 hover:underline">
                  Harvard &amp; Cambridge
                </Link>{" "}
                on 8-hour calls
              </li>
              <li>
                <strong>Witch history:</strong>{" "}
                <Link href="/salem-day-trip" className="text-blue-800 hover:underline">
                  Salem day trip
                </Link>{" "}
                — 8+ hours only
              </li>
              <li>
                <strong>Wildlife (seasonal):</strong>{" "}
                <Link href="/whale-watching-tour" className="text-blue-800 hover:underline">
                  Whale watching
                </Link>
              </li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Top-ranked Boston excursions achieve high return confidence when booked through operators who guarantee cruise-ship return. Moderate-rated options (Salem, Lexington, whale watching) need 60-minute buffers and confirmed operator policies. Always verify pier pickup at Black Falcon when you enquire."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
              { label: "Cruise planner", href: "/boston-cruise-planner" },
              { label: "Freedom Trail from cruise port", href: "/freedom-trail-from-cruise-port" },
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
