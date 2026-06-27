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

const path = "/fenway-park-guide";

export const metadata: Metadata = pageMetadata({
  title: "Fenway Park Guide — Boston Red Sox & Ballpark Tours",
  description:
    "Fenway Park guide — America's oldest Major League ballpark, Green Monster, stadium tours, and visiting from a Boston cruise ship.",
  path,
});

export default function FenwayParkGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Fenway Park Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Fenway Park Guide" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Fenway Park Guide" }]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Fenway Park guide"
          subtitle="The Green Monster, Red Sox history, and ballpark tours for Boston visitors."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="America's oldest ballpark">
            <p>
              Fenway Park opened in 1912 — the oldest Major League Baseball stadium
              still in use. The manual Green Monster scoreboard, Pesky&apos;s Pole,
              and cramped dimensions create baseball&apos;s most distinctive atmosphere.
              Babe Ruth pitched here before the curse; the 2004 championship broke
              86 years of heartbreak.
            </p>
          </GuideSection>

          <GuideSection title="Guided stadium tours">
            <p>
              Hour-long tours access the Green Monster seats, press box, dugout areas,
              and Fenway Park Living Museum. Non-game days offer the calmest experience
              and easiest access from the cruise port. Home-game days bring extreme
              Kenmore Square traffic — verify the Red Sox schedule against your port date.
            </p>
          </GuideSection>

          <GuideSection title="From a cruise ship">
            <p>
              Fenway sits roughly 3 miles west of Black Falcon — 15–25 minutes by taxi
              or coach. Allow 5+ hours ashore for transfer plus tour. Book the{" "}
              <Link href="/fenway-park-tour" className="text-blue-800 hover:underline">
                Fenway Park tour
              </Link>{" "}
              shore excursion for cruise-timed return.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-boston-from-a-cruise-ship" },
              { label: "One day in Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
              { label: "Boston cruise port guide", href: "/boston-cruise-port-guide" },
            ]}
            excursions={[
              { label: "Fenway Park tour", href: "/fenway-park-tour" },
              { label: "Boston highlights tour", href: "/boston-highlights-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
