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

const path = "/whale-watching-from-boston";

const faqs = [
  {
    question: "Can you go whale watching from a Boston cruise port day?",
    answer:
      "Yes, April through October when operators run trips to Stellwagen Bank. You need 6–8 hours ashore and should accept weather-dependent scheduling.",
  },
  {
    question: "How long is a Boston whale watching trip?",
    answer:
      "Typically 3–4 hours including boarding and harbour exit. Trips can extend if whales feed far from shore.",
  },
  {
    question: "What whales might you see?",
    answer:
      "Humpback whales, fin whales, minke whales, and Atlantic white-sided dolphins are common. Sightings are never guaranteed but peak season success rates are high.",
  },
  {
    question: "What happens if my whale watch is cancelled?",
    answer:
      "Rough seas and fog cause cancellations — operators usually rebook or refund. Have a downtown backup plan ready.",
  },
  {
    question: "Do whale watching trips sell out?",
    answer:
      "Yes on peak summer weekends and multi-ship cruise days. Pre-book through a shore excursion or reserve directly when your port date is confirmed.",
  },
  {
    question: "Is whale watching compatible with a Freedom Trail tour?",
    answer:
      "Only on 8+ hour calls with careful scheduling — morning whale watch plus abbreviated downtown time, or vice versa. Most passengers choose one headline experience.",
  },
  {
    question: "Will I get seasick whale watching from Boston?",
    answer:
      "Possible in rough Atlantic conditions. Take medication before boarding if prone. Larger catamarans handle seas better than small vessels.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Whale Watching From Boston — Cruise Port Seasonality & Timing",
  description:
    "Whale watching from Boston cruise port — seasonality, trip duration, marine wildlife, sea conditions, sell-out risk, weather cancellation, and cruise timing.",
  path,
});

export default function WhaleWatchingFromBostonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Whale Watching From Boston",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Whale Watching From Boston" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Whale Watching From Boston" },
          ]}
        />
        <PageHero
          eyebrow="Authority guide"
          title="Whale watching from Boston"
          subtitle="Stellwagen Bank wildlife, seasonality, and cruise-timed planning from Black Falcon."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Boston harbour whale watching reaches Stellwagen Bank — one of the Atlantic's richest feeding grounds. Timing and weather matter as much as wildlife."
            fields={{
              timeInPort: "6–8 hours recommended",
              bestFor: "Wildlife, photography, repeat Boston visitors",
              activityLevel: "Easy — boat-based",
              familyFriendly: "Good — prepare for seasickness",
              returnToShip: "Moderate — weather and wildlife dependent",
              popularTypes: "Harbour catamarans, naturalist-led trips",
            }}
          />

          <GuideSection title="Can cruise passengers whale watch in Boston?">
            <p>
              <strong>Yes, seasonally.</strong> Whale watch boats depart from Long
              Wharf and Rowes Wharf — roughly 1–1.5 miles from Black Falcon Cruise
              Terminal — and head to Stellwagen Bank National Marine Sanctuary off
              Cape Cod. Humpback whales, fin whales, minke whales, dolphins, and
              seabirds feed here from spring through autumn.
            </p>
            <p>
              Winter cruise calls cannot whale watch — operators typically run April
              through October, with peak activity May through September. Naturalist
              guides explain migration, feeding behaviour, and conservation on every
              trip.
            </p>
          </GuideSection>

          <GuideSection title="Trip duration and cruise timing">
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Phase</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Terminal to departure pier</td>
                    <td className="px-4 py-3">15–25 min (walk or taxi)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Boarding and safety briefing</td>
                    <td className="px-4 py-3">15–20 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Transit to Stellwagen Bank</td>
                    <td className="px-4 py-3">45–75 min each way</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">On-site whale watching</td>
                    <td className="px-4 py-3">60–90 min typical</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Total trip</td>
                    <td className="px-4 py-3">3–4 hours; longer if whales are distant</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Morning departures suit early-arriving ships. Afternoon trips work when
              you have 7+ hours ashore. Book{" "}
              <Link href="/whale-watching-tour" className="text-blue-800 hover:underline">
                whale watching shore excursions
              </Link>{" "}
              that include pier pickup and cruise-timed return when possible.
            </p>
          </GuideSection>

          <GuideSection title="Marine wildlife you may see">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Humpback whales</strong> — breaching, tail slapping, bubble-net
                feeding; most iconic Stellwagen species
              </li>
              <li>
                <strong>Fin whales</strong> — second-largest whale species; fast swimmers
              </li>
              <li>
                <strong>Minke whales</strong> — smaller, frequent sightings
              </li>
              <li>
                <strong>Atlantic white-sided dolphins</strong> — often bow-riding the vessel
              </li>
              <li>
                <strong>Seabirds</strong> — gannets, shearwaters, and gulls following feeds
              </li>
            </ul>
            <p>
              No operator guarantees sightings — but Stellwagen&apos;s density makes
              Boston one of the better urban-adjacent whale watching ports on East
              Coast itineraries.
            </p>
          </GuideSection>

          <GuideSection title="Sea conditions and weather cancellation">
            <p>
              Atlantic swells, fog, and high winds cancel trips — sometimes with
              short notice. Cruise passengers must have a backup plan: Quincy Market,
              Tea Party Museum, or a condensed{" "}
              <Link href="/freedom-trail-from-cruise-port" className="text-blue-800 hover:underline">
                Freedom Trail walk
              </Link>
              .
            </p>
            <p>
              Dress warmer than land temperature — harbour wind and open ocean exposure
              drop perceived temperature 10–15°F. Waterproof outer layer recommended.
              Binoculars and camera with zoom enhance the experience.
            </p>
          </GuideSection>

          <GuideSection title="Sell-out risk">
            <p>
              Summer weekends, holiday weeks, and days when multiple cruise ships
              dock in Boston sell out morning and midday departures. Pre-book when
              your port date is confirmed — shore excursions often hold group blocks
              that independent walk-up passengers cannot access.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Whale watching carries moderate return confidence — trips run late when whales feed far offshore, and weather cancellations force last-minute replanning. Choose operators guaranteeing cruise-ship return or afternoon departures with generous port windows. Never book whale watching on a 4–5 hour call."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-boston-from-a-cruise-ship" },
              { label: "Best Boston shore excursions", href: "/best-boston-shore-excursions" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
            ]}
            excursions={[
              { label: "Whale watching tour", href: "/whale-watching-tour" },
              { label: "Quincy Market & waterfront", href: "/quincy-market-waterfront-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
