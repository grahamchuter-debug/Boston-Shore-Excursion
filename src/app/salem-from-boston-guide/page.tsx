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

const path = "/salem-from-boston-guide";

export const metadata: Metadata = pageMetadata({
  title: "Salem Guide — Witch Trials History & Maritime Heritage",
  description:
    "Salem, Massachusetts guide — 1692 witch trials, Peabody Essex Museum, Derby Wharf, and visiting from a Boston cruise ship.",
  path,
});

export default function SalemGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Salem Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Salem Guide" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Salem Guide" }]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Salem guide"
          subtitle="Witch trials legacy, maritime museums, and colonial streets north of Boston."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Witch trials history">
            <p>
              Salem is synonymous with the 1692 witch trials — a cascade of accusations,
              trials, and 20 executions driven by fear, politics, and Puritan society.
              Modern Salem interprets this history through museums, memorials, and
              walking tours that separate fact from folklore.
            </p>
          </GuideSection>

          <GuideSection title="What to see">
            <ul className="list-disc space-y-2 pl-5">
              <li>Salem Witch Museum — theatrical overview of 1692</li>
              <li>Peabody Essex Museum — world-class maritime art and culture</li>
              <li>Derby Wharf and Friendship schooner replica</li>
              <li>McIntire Historic District — Federal-style architecture</li>
              <li>Salem Witch Trials Memorial</li>
            </ul>
          </GuideSection>

          <GuideSection title="Seasonal atmosphere">
            <p>
              October brings Halloween energy — costumes, events, and heavy crowds.
              September–October Canada & New England cruises align with peak foliage
              and Salem&apos;s busiest season. Midweek visits manage crowds better than
              October Saturdays.
            </p>
          </GuideSection>

          <GuideSection title="From a Boston cruise ship">
            <p>
              Salem is not adjacent to the cruise terminal — honest timing matters. Read{" "}
              <Link href="/salem-from-boston-cruise-port" className="text-blue-800 hover:underline">
                Salem from Boston cruise port
              </Link>{" "}
              before booking. The{" "}
              <Link href="/salem-day-trip" className="text-blue-800 hover:underline">
                Salem day trip
              </Link>{" "}
              excursion suits 8+ hour port days.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Salem from cruise port", href: "/salem-from-boston-cruise-port" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Lexington & Concord guide", href: "/lexington-concord-guide" },
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
