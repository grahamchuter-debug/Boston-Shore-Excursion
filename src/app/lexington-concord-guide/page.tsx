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

const path = "/lexington-concord-guide";

export const metadata: Metadata = pageMetadata({
  title: "Lexington & Concord Guide — Revolutionary War Battlefields",
  description:
    "Lexington and Concord guide — Battle Road, Old North Bridge, Minuteman National Historical Park, and shore excursions from Boston cruise port.",
  path,
});

export default function LexingtonConcordGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Lexington & Concord Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Lexington & Concord Guide" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Lexington & Concord Guide" },
          ]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Lexington & Concord guide"
          subtitle="Where the American Revolution began — Battle Road, Old North Bridge, and Minuteman history."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="The shot heard round the world">
            <p>
              On April 19, 1775, British regulars marched from Boston to seize colonial
              weapons at Concord. Minutemen assembled on Lexington Green; shots fired
              at dawn. At Old North Bridge in Concord, colonial militia forced British
              retreat — the opening battles of the Revolutionary War.
            </p>
          </GuideSection>

          <GuideSection title="Key sites">
            <ul className="list-disc space-y-2 pl-5">
              <li>Lexington Green and Minuteman Statue</li>
              <li>Minuteman National Historical Park Battle Road trail</li>
              <li>Old North Bridge and Minute Man statue by Daniel Chester French</li>
              <li>Hancock-Clarke House — where John Hancock and Samuel Adams stayed</li>
              <li>Optional Walden Pond and Authors Ridge in Sleepy Hollow Cemetery</li>
            </ul>
          </GuideSection>

          <GuideSection title="From a Boston cruise ship">
            <p>
              Lexington sits 15 miles northwest — 30–45 minutes each way by coach.
              Requires 8+ hours ashore with guaranteed-return operators. Not compatible
              with Salem or whale watching the same day. Book the{" "}
              <Link href="/lexington-concord-tour" className="text-blue-800 hover:underline">
                Lexington &amp; Concord tour
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Highway travel on I-93 and Route 2 introduces traffic risk. Only book through cruise-focused operators on 8+ hour calls with 60-minute return buffer."
          />

          <GuideRelatedLinks
            guides={[
              { label: "Freedom Trail guide", href: "/freedom-trail-guide" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Best Boston shore excursions", href: "/best-boston-shore-excursions" },
            ]}
            excursions={[
              { label: "Lexington & Concord tour", href: "/lexington-concord-tour" },
              { label: "Freedom Trail tour", href: "/freedom-trail-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
