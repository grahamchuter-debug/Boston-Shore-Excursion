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

const path = "/boston-cruise-port-guide";

const faqs = [
  {
    question: "Where do cruise ships dock in Boston?",
    answer:
      "Most large ships use the Black Falcon Cruise Terminal in the Seaport District, at 1 Black Falcon Avenue. Smaller vessels occasionally call at Flynn Cruiseport or Long Wharf depending on the line and season. Black Falcon is the default assumption for Canada & New England itineraries.",
  },
  {
    question: "Can you walk from the cruise terminal to downtown Boston?",
    answer:
      "Yes — the Rose Kennedy Greenway connects Black Falcon to Faneuil Hall and Quincy Market in roughly 20–25 minutes on foot. Historic sites beyond downtown require more walking or a short taxi ride.",
  },
  {
    question: "Do you need U.S. dollars in Boston?",
    answer:
      "Yes. Credit cards are widely accepted, but carry some cash for tips, food stalls, and smaller vendors. U.S. dollars only; foreign currency exchange is limited near the terminal.",
  },
  {
    question: "How much should you tip in Boston?",
    answer:
      "Restaurant service typically expects 18–20%. Taxi and rideshare drivers often receive 15–20%. Tour guides commonly receive $5–10 per person on group tours, or more on private excursions.",
  },
  {
    question: "What is the best shore excursion from Boston?",
    answer:
      "First-time visitors usually choose a Freedom Trail tour, Boston highlights tour, or historic city tour combining downtown sites with USS Constitution. Match choice to your hours ashore — see our best excursions ranking.",
  },
  {
    question: "How early should cruise passengers return to Black Falcon?",
    answer:
      "Build at least 45–60 minutes before your ship's all-aboard time. Summer traffic on Northern Avenue, Atlantic Avenue, and I-93 can delay taxi and coach returns from downtown and Charlestown.",
  },
  {
    question: "Is Boston weather unpredictable for port days?",
    answer:
      "Boston's harbour climate shifts quickly. Layer clothing year-round, carry a light rain shell, and expect wind on waterfront walks even when downtown feels mild.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Boston Cruise Port Guide — Black Falcon Terminal, Transport & Tips",
  description:
    "Boston cruise port guide for Black Falcon Cruise Terminal — walking distances, taxis, public transport, weather, tipping, USS Constitution access, and return-to-ship advice.",
  path,
});

export default function BostonCruisePortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Boston Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Boston Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Boston Cruise Port Guide" }]}
        />
        <PageHero
          eyebrow="Port authority"
          title="Boston cruise port guide"
          subtitle="Black Falcon Cruise Terminal, getting around, weather, and how cruise passengers reach Boston's historic sites."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Boston is one of the strongest ports on Canada & New England routes — Revolutionary history, harbour waterfront, and walkable access to downtown when you plan around all-aboard time."
            fields={{
              timeInPort: "6–9 hours typical; 4 hours suits waterfront only",
              bestFor: "Freedom Trail, USS Constitution, Quincy Market",
              activityLevel: "Easy to moderate — cobblestones downtown",
              familyFriendly: "Excellent with age-appropriate pacing",
              returnToShip: "High on organised tours; Moderate independent",
              popularTypes: "Walking tours, coach highlights, day trips",
            }}
          />

          <GuideSection title="Black Falcon Cruise Terminal">
            <p>
              <strong>Location:</strong> The Black Falcon Cruise Terminal sits in Boston&apos;s
              Seaport District at 1 Black Falcon Avenue — south of downtown along the
              Reserved Channel. Most major cruise lines on New England and Canada
              itineraries use this facility for embarkation, disembarkation, and day
              calls.
            </p>
            <p>
              <strong>Terminal layout:</strong> The building provides customs and
              immigration processing, restrooms, limited seating, and taxi stands
              outside. There is no extensive shopping or dining inside — plan to eat
              downtown or bring snacks for short port days. Signage directs passengers
              toward Northern Avenue and the waterfront walkway.
            </p>
            <p>
              <strong>Distance to highlights:</strong> Quincy Market and Faneuil Hall
              are roughly 1.2 miles northwest — about 20–25 minutes on foot via the
              Rose Kennedy Greenway. Boston Common and the Freedom Trail start near
              1.5 miles away. USS Constitution at Charlestown Navy Yard is roughly
              2 miles northeast across the harbour.
            </p>
            <p>
              <strong>Smaller-ship alternatives:</strong> Some boutique lines dock closer
              to downtown at Flynn Cruiseport (South Boston) or Long Wharf. Confirm your
              ship&apos;s berth on your cruise line app — walking times improve
              significantly when you land at Long Wharf, but Black Falcon remains the
              norm for large vessels.
            </p>
          </GuideSection>

          <GuideSection title="Walking from the cruise terminal">
            <p>
              Boston rewards walkers more than almost any other major cruise port in
              the region. The Rose Kennedy Greenway — a landscaped park built on former
              elevated highway land — links Black Falcon directly to the historic
              waterfront without navigating highway ramps.
            </p>
            <p>
              <strong>Greenway route:</strong> Exit the terminal toward Northern Avenue,
              join the Greenway northbound, and follow it past fountains and public art
              to Faneuil Hall. The path is flat and paved — suitable for most mobility
              levels, though distances add up on hot days.
            </p>
            <p>
              <strong>Realistic walking radius:</strong> Within 30 minutes on foot you
              can reach Quincy Market, the Boston Tea Party Ships &amp; Museum, and
              the start of the Freedom Trail at Boston Common. Charlestown and USS
              Constitution require either a 40+ minute walk with bridge crossings or a
              short water taxi — see our{" "}
              <Link href="/uss-constitution-from-boston-cruise-port" className="text-blue-800 hover:underline">
                USS Constitution guide
              </Link>
              .
            </p>
            <p>
              For detailed routes and cobblestone warnings, read{" "}
              <Link href="/walking-boston-from-cruise-port" className="text-blue-800 hover:underline">
                walking Boston from the cruise port
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Taxis, rideshare, and coaches">
            <p>
              Taxis and rideshare vehicles (Uber, Lyft) queue outside Black Falcon on
              busy cruise days. Fares to downtown typically run $12–18; Charlestown
              Navy Yard $15–22 depending on traffic. Confirm your driver knows
              &quot;Black Falcon Cruise Terminal&quot; — some GPS systems default to
              older pier names.
            </p>
            <p>
              Organised shore excursions include coach or van pickup at the terminal —
              the lowest-stress option for Freedom Trail tours, Harvard day trips, and
              Salem excursions. Reputable operators structure return timing around
              all-aboard deadlines.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Mode</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Typical time to downtown</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Walking (Greenway)</td>
                    <td className="px-4 py-3">20–25 min to Quincy Market</td>
                    <td className="px-4 py-3">Free; best weather days; flat path</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Taxi / rideshare</td>
                    <td className="px-4 py-3">8–15 min</td>
                    <td className="px-4 py-3">Surge pricing possible when multiple ships dock</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">MBTA subway</td>
                    <td className="px-4 py-3">20–30 min with transfers</td>
                    <td className="px-4 py-3">Silver Line from Seaport; adds navigation complexity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Shore excursion coach</td>
                    <td className="px-4 py-3">Included in tour</td>
                    <td className="px-4 py-3">Pier pickup; cruise-timed return</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Water taxi</td>
                    <td className="px-4 py-3">10 min to Charlestown</td>
                    <td className="px-4 py-3">Seasonal; scenic route to Navy Yard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Public transport (MBTA)">
            <p>
              Boston&apos;s MBTA (&quot;the T&quot;) includes subway, bus, and Silver
              Line bus rapid transit. From Black Falcon, the Silver Line SL1 connects
              to South Station, where you can transfer to the Red Line for Harvard or
              the Green Line for Fenway.
            </p>
            <p>
              <strong>Cruise passenger reality check:</strong> Public transit works for
              confident independent travellers on longer port days, but managing
              CharlieCard purchase, transfers, and return timing against all-aboard
              adds stress most first-time visitors avoid. A Freedom Trail walking tour
              with pier pickup or a simple Greenway walk to Quincy Market often delivers
              better value for limited hours ashore.
            </p>
            <p>
              Download the MBTA mTicket app or buy a CharlieCard at South Station if
              you choose the subway route. Day passes suit multiple rides; single rides
              cost a few dollars each way.
            </p>
          </GuideSection>

          <GuideSection title="Weather and what to wear">
            <p>
              Boston&apos;s coastal location means harbour wind, sudden showers, and
              temperature swings between the Seaport and inland neighborhoods. Spring
              and fall cruise calls (April–May, September–October) often bring crisp
              mornings and mild afternoons — layers are essential.
            </p>
            <p>
              Summer calls (June–August) can push 85°F (29°C) with humidity downtown,
              while winter calls (November–March) require heavy coats, hats, and
              traction-friendly footwear on icy cobblestones.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Pack a compact rain jacket year-round</li>
              <li>Wear comfortable walking shoes — cobblestones punish thin soles</li>
              <li>Sunglasses and sunscreen for exposed harbour walks</li>
              <li>Light fleece or windbreaker even on sunny autumn days</li>
            </ul>
            <p>
              Seasonal planning detail lives in our{" "}
              <Link href="/best-time-to-visit-boston" className="text-blue-800 hover:underline">
                best time to visit Boston
              </Link>{" "}
              guide.
            </p>
          </GuideSection>

          <GuideSection title="Tipping and currency">
            <p>
              The United States uses U.S. dollars ($). Credit and contactless payment
              are standard at restaurants, museums, and shops. Keep small bills for
              food-hall stalls, street performers, and restroom attendants.
            </p>
            <p>
              <strong>Tipping norms:</strong> Restaurants expect 18–20% on sit-down
              meals (tip is not included in the bill). Bar service $1–2 per drink or
              15–20%. Taxi and rideshare 15–20%. Hotel housekeeping $2–5 per night.
              Tour guides $5–10 per person on shared tours, higher for private guides.
            </p>
            <p>
              International visitors should notify their bank before travel to avoid
              card blocks. ATM fees apply at airport and downtown machines — withdraw
              once rather than repeatedly.
            </p>
          </GuideSection>

          <GuideSection title="USS Constitution and Charlestown Navy Yard">
            <p>
              USS Constitution — &quot;Old Ironsides&quot; — is the world&apos;s oldest
              commissioned naval vessel still afloat. The ship and adjacent museum sit
              in the Charlestown Navy Yard, roughly 2 miles from Black Falcon across
              Boston Harbour.
            </p>
            <p>
              Access options include organised tours with Navy Yard stops, water taxi
              from Long Wharf, taxi over the Charlestown Bridge, or a lengthy walk via
              the North End. Ship interior visits depend on security hours and
              maintenance schedules — free timed tickets are required for below-decks
              tours when available.
            </p>
            <p>
              Full timing and access advice is in our dedicated{" "}
              <Link href="/uss-constitution-from-boston-cruise-port" className="text-blue-800 hover:underline">
                USS Constitution from cruise port
              </Link>{" "}
              guide. Most{" "}
              <Link href="/historic-boston-city-tour" className="text-blue-800 hover:underline">
                historic city tours
              </Link>{" "}
              and{" "}
              <Link href="/boston-highlights-tour" className="text-blue-800 hover:underline">
                highlights tours
              </Link>{" "}
              include the Navy Yard on standard itineraries.
            </p>
          </GuideSection>

          <GuideSection title="Best excursions for cruise passengers">
            <p>
              Match your port hours to excursion type rather than overbooking:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>4–5 hours:</strong>{" "}
                <Link href="/quincy-market-waterfront-tour" className="text-blue-800 hover:underline">
                  Quincy Market &amp; waterfront walk
                </Link>{" "}
                or{" "}
                <Link href="/boston-tea-party-tour" className="text-blue-800 hover:underline">
                  Boston Tea Party Museum
                </Link>
              </li>
              <li>
                <strong>6 hours:</strong>{" "}
                <Link href="/freedom-trail-shore-excursion" className="text-blue-800 hover:underline">
                  Freedom Trail tour
                </Link>{" "}
                or{" "}
                <Link href="/boston-highlights-tour" className="text-blue-800 hover:underline">
                  Boston highlights tour
                </Link>
              </li>
              <li>
                <strong>8+ hours:</strong>{" "}
                <Link href="/harvard-cambridge-tour" className="text-blue-800 hover:underline">
                  Harvard &amp; Cambridge
                </Link>
                ,{" "}
                <Link href="/salem-day-trip" className="text-blue-800 hover:underline">
                  Salem day trip
                </Link>
                , or{" "}
                <Link href="/whale-watching-tour" className="text-blue-800 hover:underline">
                  whale watching
                </Link>{" "}
                (seasonal)
              </li>
            </ul>
            <p>
              Compare ranked options in our{" "}
              <Link href="/best-boston-shore-excursions" className="text-blue-800 hover:underline">
                best Boston shore excursions
              </Link>{" "}
              guide or use the{" "}
              <Link href="/boston-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Boston returns are generally reliable, but summer traffic on Northern Avenue, the Sumner/Callahan tunnels, and I-93 can delay taxis and coaches from downtown and Charlestown. Build 45–60 minutes before all-aboard even on organised tours. Walking back via the Greenway from Quincy Market is predictable — factor extra time if you venture to Harvard, Salem, or Lexington."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Freedom Trail from cruise port", href: "/freedom-trail-from-cruise-port" },
              { label: "Best Boston shore excursions", href: "/best-boston-shore-excursions" },
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-boston-from-a-cruise-ship" },
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
