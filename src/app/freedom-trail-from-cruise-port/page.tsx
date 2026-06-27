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

const path = "/freedom-trail-from-cruise-port";

const faqs = [
  {
    question: "Can cruise passengers walk the Freedom Trail from Black Falcon?",
    answer:
      "Yes — you can walk from Black Falcon via the Rose Kennedy Greenway to Boston Common (about 25–35 minutes), then follow the red-brick trail through downtown and the North End. The full 2.5-mile route to Charlestown requires significantly more time.",
  },
  {
    question: "How far is the Freedom Trail from the cruise terminal?",
    answer:
      "Boston Common, the traditional trail start, is roughly 1.5 miles from Black Falcon Cruise Terminal — 25–35 minutes on foot. Quincy Market sits slightly closer at about 1.2 miles.",
  },
  {
    question: "How much of the Freedom Trail fits a port day?",
    answer:
      "Most cruise passengers cover 4–8 downtown sites in 3–4 hours with a guide, or 2–3 hours independently at a fast pace. The complete 16-site trail to Bunker Hill Monument needs 5–6 hours minimum.",
  },
  {
    question: "Is a guided Freedom Trail tour worth it?",
    answer:
      "For first-time visitors with 5+ hours ashore, yes — guides provide context, manage pacing, and often include pier transfer. Independent walking suits confident travellers who accept missing some sites.",
  },
  {
    question: "Which Freedom Trail section is best for cruise passengers?",
    answer:
      "The downtown core — State House, Granary Burying Ground, Old State House, Faneuil Hall, and Paul Revere's House — delivers the highest history density per mile. Charlestown adds USS Constitution when time allows.",
  },
  {
    question: "When should Freedom Trail walkers use transport?",
    answer:
      "Use a taxi or tour coach if mobility is limited, weather is poor, or you need to reach Charlestown and return within a 6-hour port window. The North End to Navy Yard segment adds significant walking time.",
  },
  {
    question: "Are Freedom Trail cobblestones difficult?",
    answer:
      "Yes — uneven granite and brick surfaces challenge strollers, wheelchairs, and anyone with balance concerns. Wear supportive shoes and allow extra time between stops.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Freedom Trail From Boston Cruise Port — Distance, Timing & Tips",
  description:
    "Can cruise passengers walk the Freedom Trail from Black Falcon? Distance, realistic timing, best sections, guided vs independent, and return-to-ship advice.",
  path,
});

export default function FreedomTrailFromCruisePortPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Freedom Trail From Boston Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Freedom Trail From Cruise Port" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Freedom Trail From Cruise Port" },
          ]}
        />
        <PageHero
          eyebrow="Authority guide"
          title="Freedom Trail from the Boston cruise port"
          subtitle="Distance from Black Falcon, what you can realistically walk, and when to book a guided tour."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="The Freedom Trail is Boston's signature experience — but Black Falcon sits in the Seaport, not on the trail itself. Plan your route before you leave the ship."
            fields={{
              timeInPort: "5–8 hours recommended for guided tour",
              bestFor: "Revolutionary history, walking, first visits",
              activityLevel: "Moderate — 2–3 miles typical",
              familyFriendly: "Good — teens engage; cobbles challenge strollers",
              returnToShip: "High on organised tours",
              popularTypes: "Walking tours, coach + walk combos",
            }}
          />

          <GuideSection title="Can cruise passengers walk the Freedom Trail?">
            <p>
              <strong>Yes — partially and realistically.</strong> The Freedom Trail is
              a 2.5-mile red-brick path linking 16 historic sites from Boston Common
              to the Bunker Hill Monument in Charlestown. Cruise passengers dock at
              Black Falcon in the Seaport — separated from the trail by the Greenway
              and downtown blocks, but absolutely reachable on foot.
            </p>
            <p>
              <strong>What fits a port day:</strong> A guided partial walk covering
              downtown and North End highlights (4–8 sites) in 3–4 hours. Attempting
              all 16 sites independently on a 6-hour call is possible for fast walkers
              but leaves little margin for lunch, museums, or traffic delays.
            </p>
            <p>
              Deeper landmark context lives in our{" "}
              <Link href="/freedom-trail-guide" className="text-blue-800 hover:underline">
                Freedom Trail guide
              </Link>
              . Port logistics are covered in the{" "}
              <Link href="/boston-cruise-port-guide" className="text-blue-800 hover:underline">
                Boston cruise port guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Distance from Black Falcon Cruise Terminal">
            <p>
              Understanding distances prevents overcommitting on short port days:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Destination</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Distance</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Walking time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Quincy Market / Faneuil Hall</td>
                    <td className="px-4 py-3">~1.2 miles</td>
                    <td className="px-4 py-3">20–25 min via Greenway</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Boston Common (trail start)</td>
                    <td className="px-4 py-3">~1.5 miles</td>
                    <td className="px-4 py-3">25–35 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Paul Revere House (North End)</td>
                    <td className="px-4 py-3">~1.8 miles from terminal</td>
                    <td className="px-4 py-3">35–45 min direct walk</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">USS Constitution (Charlestown)</td>
                    <td className="px-4 py-3">~2 miles</td>
                    <td className="px-4 py-3">40–50 min or water taxi</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Bunker Hill Monument</td>
                    <td className="px-4 py-3">~2.3 miles</td>
                    <td className="px-4 py-3">End of full trail — plan transport back</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Realistic timing by hours ashore">
            <h3 className="text-lg font-semibold text-slate-900">4 hours ashore</h3>
            <p>
              Walk the Greenway to Faneuil Hall and Quincy Market — trail-adjacent
              sites without committing to a full Freedom Trail walk. Alternatively,
              reach Boston Common and cover 2–3 nearby stops (State House exterior,
              Granary Burying Ground) before returning. A guided tour is tight at
              this duration.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">6 hours ashore</h3>
            <p>
              Sweet spot for a{" "}
              <Link href="/freedom-trail-shore-excursion" className="text-blue-800 hover:underline">
                guided Freedom Trail tour
              </Link>{" "}
              — downtown core plus North End, often 4–6 sites with expert narration.
              Independent walkers can cover a similar range if they maintain pace and
              skip lengthy museum interiors.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">8 hours ashore</h3>
            <p>
              Allows Charlestown extension to USS Constitution and Old North Church
              combinations, or a fuller trail walk with lunch at Quincy Market.
              Consider pairing morning trail walking with an afternoon Tea Party Museum
              visit if tickets are pre-booked.
            </p>
          </GuideSection>

          <GuideSection title="Best Freedom Trail sections for cruise passengers">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Boston Common &amp; State House</strong> — Trail anchor and
                golden-domed capitol. Free exterior viewing; interior tours limited.
              </li>
              <li>
                <strong>Granary Burying Ground</strong> — Resting place of Adams,
                Revere, Hancock, and Franklin&apos;s parents. Compact and powerful.
              </li>
              <li>
                <strong>Old State House &amp; Boston Massacre site</strong> — Colonial
                government seat amid modern skyscrapers.
              </li>
              <li>
                <strong>Faneuil Hall &amp; Quincy Market</strong> — &quot;Cradle of
                Liberty&quot; plus food stalls — ideal lunch stop.
              </li>
              <li>
                <strong>Paul Revere House</strong> — Oldest structure in downtown
                Boston; small museum interior (fee applies).
              </li>
              <li>
                <strong>Old North Church</strong> — &quot;One if by land, two if by
                sea&quot; lantern site in the North End.
              </li>
              <li>
                <strong>Charlestown Navy Yard</strong> — USS Constitution and WWII
                destroyer Cassin Young — see dedicated guide.
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Guided vs independent">
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Approach</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Pros</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Cons</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Guided shore excursion</td>
                    <td className="px-4 py-3">Pier pickup, expert context, cruise-timed return, efficient routing</td>
                    <td className="px-4 py-3">Fixed pace; group size; advance booking on busy days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Independent walk</td>
                    <td className="px-4 py-3">Flexible stops; free (minus museum fees); Greenway access</td>
                    <td className="px-4 py-3">Self-navigation; easy to lose time at shops; you manage return</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Coach + walk combo</td>
                    <td className="px-4 py-3">Covers Charlestown without exhausting walk back</td>
                    <td className="px-4 py-3">Less time at each stop than pure walking tour</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="When to use transport">
            <p>
              Walk when you stay downtown and the weather cooperates. Book transport or
              a tour coach when:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Mobility limitations make cobblestones impractical</li>
              <li>You want USS Constitution on a 6-hour call without a 5-mile round-trip walk</li>
              <li>Heat, rain, or winter ice reduce comfortable walking range</li>
              <li>Multiple ships in port compress your effective hours ashore</li>
            </ul>
            <p>
              The{" "}
              <Link href="/historic-boston-city-tour" className="text-blue-800 hover:underline">
                historic Boston city tour
              </Link>{" "}
              drives between districts with shorter walks at each stop — a strong
              alternative when a pure walking tour feels too demanding.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Freedom Trail tours from reputable operators typically achieve high return confidence — downtown and North End are well served by taxis back to Black Falcon via the Greenway corridor. Independent walkers should start heading back 90 minutes before all-aboard if they reach Charlestown. Summer events and road closures around Faneuil Hall occasionally redirect foot traffic — allow buffer time."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Freedom Trail guide", href: "/freedom-trail-guide" },
              { label: "Walking from cruise port", href: "/walking-boston-from-cruise-port" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
            ]}
            excursions={[
              { label: "Freedom Trail shore excursion", href: "/freedom-trail-shore-excursion" },
              { label: "Historic Boston city tour", href: "/historic-boston-city-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
