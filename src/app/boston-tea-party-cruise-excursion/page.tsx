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

const path = "/boston-tea-party-cruise-excursion";

export const metadata: Metadata = pageMetadata({
  title: "Boston Tea Party Cruise Excursion — Museum Shore Tour Guide",
  description:
    "Boston Tea Party shore excursion from the cruise port — museum timing, Fort Point Channel location, pairing with Freedom Trail, and booking advice.",
  path,
});

export default function BostonTeaPartyCruiseExcursionPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Boston Tea Party Cruise Excursion",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Boston Tea Party Excursion" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Boston Tea Party Excursion" },
          ]}
        />
        <PageHero
          eyebrow="Excursion guide"
          title="Boston Tea Party cruise excursion"
          subtitle="Interactive museum experience timed for cruise passengers — location, duration, and pairing options."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Why the Tea Party Museum suits cruise days">
            <p>
              The Boston Tea Party Ships &amp; Museum on Fort Point Channel delivers
              60–90 minutes of immersive history — costumed interpreters, replica
              tea ships, and the sole surviving Robinson Tea Chest. Located roughly
              1 mile from Black Falcon, it is one of the most walkable major
              attractions from the cruise terminal.
            </p>
          </GuideSection>

          <GuideSection title="Booking and timed entry">
            <p>
              The museum runs timed entry slots that sell out when multiple ships
              dock. Shore excursions typically include pre-booked tickets — the
              reliable approach on peak cruise days. Book the dedicated{" "}
              <Link href="/boston-tea-party-tour" className="text-blue-800 hover:underline">
                Boston Tea Party tour
              </Link>{" "}
              or enquire about combo packages with Freedom Trail segments.
            </p>
          </GuideSection>

          <GuideSection title="Pairing with other sites">
            <p>
              Combine with Quincy Market lunch (10-minute walk), a partial{" "}
              <Link href="/freedom-trail-from-cruise-port" className="text-blue-800 hover:underline">
                Freedom Trail walk
              </Link>
              , or the Rose Kennedy Greenway return to Black Falcon. Fits comfortably
              on 5–6 hour port days as a primary or secondary activity.
            </p>
            <p>
              Background history:{" "}
              <Link href="/boston-tea-party-guide" className="text-blue-800 hover:underline">
                Boston Tea Party guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Boston Tea Party guide", href: "/boston-tea-party-guide" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Quincy Market guide", href: "/quincy-market-faneuil-hall-guide" },
            ]}
            excursions={[
              { label: "Boston Tea Party tour", href: "/boston-tea-party-tour" },
              { label: "Freedom Trail tour", href: "/freedom-trail-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
