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

const path = "/things-to-do-in-boston-from-a-cruise-ship";

export const metadata: Metadata = pageMetadata({
  title: "Things To Do In Boston From A Cruise Ship",
  description:
    "Best things to do in Boston from a cruise ship — Freedom Trail, USS Constitution, Quincy Market, Harvard, Salem, whale watching, and walking routes from Black Falcon.",
  path,
});

export default function ThingsToDoBostonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Things To Do In Boston From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Things To Do From A Cruise Ship" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Things To Do From A Cruise Ship" },
          ]}
        />
        <PageHero
          eyebrow="Activity guide"
          title="Things to do in Boston from a cruise ship"
          subtitle="Historic sites, food, waterfront walks, and day trips matched to cruise port reality."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Downtown and waterfront">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/freedom-trail-from-cruise-port" className="text-blue-800 hover:underline">
                  Freedom Trail walking
                </Link>{" "}
                — Revolutionary landmarks from Boston Common to the North End
              </li>
              <li>
                <Link href="/quincy-market-faneuil-hall-guide" className="text-blue-800 hover:underline">
                  Faneuil Hall &amp; Quincy Market
                </Link>{" "}
                — food, history, street performers
              </li>
              <li>
                <Link href="/boston-tea-party-guide" className="text-blue-800 hover:underline">
                  Boston Tea Party Ships &amp; Museum
                </Link>{" "}
                — interactive 1773 re-enactment
              </li>
              <li>
                Rose Kennedy Greenway — flat walk from Black Falcon to downtown
              </li>
              <li>
                Long Wharf — harbour views and seasonal harbour cruises
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="USS Constitution and Charlestown">
            <p>
              Old Ironsides at Charlestown Navy Yard is Boston&apos;s other must-see
              alongside the Freedom Trail. The 1797 frigate and adjacent museum sit
              across the harbour — included on most highlights and historic city tours.
            </p>
            <p>
              Full access guide:{" "}
              <Link href="/uss-constitution-from-boston-cruise-port" className="text-blue-800 hover:underline">
                USS Constitution from cruise port
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Organised shore excursions">
            <p>
              Browse ranked options in our{" "}
              <Link href="/best-boston-shore-excursions" className="text-blue-800 hover:underline">
                best Boston shore excursions
              </Link>{" "}
              guide — highlights tours, Freedom Trail walks, Harvard, Salem, whale
              watching, Fenway, and Lexington &amp; Concord each suit different port
              windows.
            </p>
          </GuideSection>

          <GuideSection title="Day trips beyond Boston">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/harvard-cambridge-from-boston-cruise-port" className="text-blue-800 hover:underline">
                  Harvard &amp; Cambridge
                </Link>{" "}
                — 6–8 hours ashore
              </li>
              <li>
                <Link href="/salem-from-boston-cruise-port" className="text-blue-800 hover:underline">
                  Salem witch trials history
                </Link>{" "}
                — 8+ hours only
              </li>
              <li>
                <Link href="/lexington-concord-guide" className="text-blue-800 hover:underline">
                  Lexington &amp; Concord
                </Link>{" "}
                — Revolutionary War battlefields
              </li>
              <li>
                <Link href="/whale-watching-from-boston" className="text-blue-800 hover:underline">
                  Whale watching
                </Link>{" "}
                — April through October
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Sports and culture">
            <p>
              <Link href="/fenway-park-guide" className="text-blue-800 hover:underline">
                Fenway Park
              </Link>{" "}
              tours suit baseball fans on non-game days. Beacon Hill and Back Bay
              brownstones reward photographers willing to walk beyond the trail.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Walking from cruise port", href: "/walking-boston-from-cruise-port" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
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
