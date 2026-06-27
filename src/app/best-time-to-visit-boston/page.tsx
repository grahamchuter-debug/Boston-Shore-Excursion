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

const path = "/best-time-to-visit-boston";

export const metadata: Metadata = pageMetadata({
  title: "Best Time To Visit Boston — Cruise Season & Weather Guide",
  description:
    "Best time to visit Boston for cruise passengers — Canada & New England season, weather by month, foliage, whale watching, and crowd patterns.",
  path,
});

export default function BestTimeToVisitBostonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Time To Visit Boston",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Time To Visit Boston" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Time To Visit Boston" },
          ]}
        />
        <PageHero
          eyebrow="Seasonal guide"
          title="Best time to visit Boston"
          subtitle="Cruise season timing, weather, foliage, whale watching, and what to expect each month."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Canada & New England cruise season">
            <p>
              Boston cruise calls cluster on Canada & New England itineraries from
              late April through October, with peak volume September–October for
              foliage sailings. A few repositioning cruises call in November. Winter
              calls are rare and limit outdoor walking comfort.
            </p>
          </GuideSection>

          <GuideSection title="Month-by-month overview">
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Period</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Weather</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Highlights</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Apr–May</td>
                    <td className="px-4 py-3">Cool, variable; 50–65°F</td>
                    <td className="px-4 py-3">Whale season opens; fewer crowds</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Jun–Aug</td>
                    <td className="px-4 py-3">Warm, humid; 70–85°F</td>
                    <td className="px-4 py-3">Peak whale watching; busy waterfront</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Sep–Oct</td>
                    <td className="px-4 py-3">Crisp; 55–70°F</td>
                    <td className="px-4 py-3">Peak foliage; Salem Halloween energy</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Nov–Mar</td>
                    <td className="px-4 py-3">Cold; 25–45°F</td>
                    <td className="px-4 py-3">Limited cruises; indoor museums suit best</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Best months for cruise passengers">
            <p>
              <strong>September–October</strong> balances comfortable walking weather,
              autumn colour, and the classic New England cruise experience. Expect
              higher crowds and pre-book excursions on multi-ship days.
            </p>
            <p>
              <strong>May–June</strong> suits whale watching and milder temperatures
              with lighter Salem and Freedom Trail crowds. <strong>July–August</strong>
              brings heat and humidity but long daylight hours.
            </p>
          </GuideSection>

          <GuideSection title="Seasonal activities">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Whale watching: April–October —{" "}
                <Link href="/whale-watching-from-boston" className="text-blue-800 hover:underline">
                  whale watching guide
                </Link>
              </li>
              <li>
                Salem peak season: September–October —{" "}
                <Link href="/salem-from-boston-cruise-port" className="text-blue-800 hover:underline">
                  Salem timing
                </Link>
              </li>
              <li>
                Fenway tours: best on non-game days year-round
              </li>
            </ul>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
              { label: "Boston cruise ship schedule", href: "/boston-cruise-ship-schedule" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
            ]}
            excursions={[
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
              { label: "Whale watching tour", href: "/whale-watching-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
