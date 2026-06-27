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

const path = "/freedom-trail-guide";

export const metadata: Metadata = pageMetadata({
  title: "Freedom Trail Guide — Boston's Historic Walking Route",
  description:
    "Complete Freedom Trail guide — 16 historic sites from Boston Common to Bunker Hill, Revolutionary history, and tips for cruise passengers visiting Boston.",
  path,
});

export default function FreedomTrailGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Freedom Trail Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Freedom Trail Guide" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Freedom Trail Guide" }]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Freedom Trail guide"
          subtitle="Boston's 2.5-mile red-brick path through Revolutionary America — sites, history, and cruise passenger context."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="What is the Freedom Trail?">
            <p>
              The Freedom Trail links 16 historic sites from Boston Common to the
              Bunker Hill Monument in Charlestown — 2.5 miles through the cradle of
              American independence. Red bricks or a painted line mark the route
              through downtown, the North End, and across the harbour to Charlestown
              Navy Yard.
            </p>
          </GuideSection>

          <GuideSection title="Key sites north to south">
            <ul className="list-disc space-y-2 pl-5">
              <li>Boston Common and Massachusetts State House</li>
              <li>Park Street Church and Granary Burying Ground</li>
              <li>King&apos;s Chapel and Old South Meeting House</li>
              <li>Old State House and Faneuil Hall</li>
              <li>Paul Revere House and Old North Church</li>
              <li>USS Constitution and Bunker Hill Monument</li>
            </ul>
          </GuideSection>

          <GuideSection title="Cruise passengers">
            <p>
              Most cruise visitors walk a partial trail — downtown and North End
              highlights in 3–4 hours. Full trail completion needs 5–6 hours minimum.
              Read our dedicated{" "}
              <Link href="/freedom-trail-from-cruise-port" className="text-blue-800 hover:underline">
                Freedom Trail from cruise port
              </Link>{" "}
              guide for Black Falcon distances and book a{" "}
              <Link href="/freedom-trail-shore-excursion" className="text-blue-800 hover:underline">
                Freedom Trail shore excursion
              </Link>{" "}
              for guided pacing.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Freedom Trail from cruise port", href: "/freedom-trail-from-cruise-port" },
              { label: "USS Constitution guide", href: "/uss-constitution-from-boston-cruise-port" },
              { label: "Quincy Market guide", href: "/quincy-market-faneuil-hall-guide" },
            ]}
            excursions={[
              { label: "Freedom Trail tour", href: "/freedom-trail-shore-excursion" },
              { label: "Historic Boston city tour", href: "/historic-boston-city-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
