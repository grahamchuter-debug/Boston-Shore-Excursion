import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { CruisePlanner } from "@/components/CruisePlanner";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/boston-cruise-planner";

export const metadata: Metadata = pageMetadata({
  title: "Boston Cruise Planner — Match Excursions To Hours Ashore",
  description:
    "Interactive Boston cruise planner — select your hours in port and see which shore excursions fit with realistic transfer and return timing.",
  path,
});

export default function BostonCruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Boston Cruise Planner",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Boston Cruise Planner" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Boston Cruise Planner" }]}
        />
        <PageHero
          eyebrow="Plan your port day"
          title="Boston cruise planner"
          subtitle="Select your hours ashore and see which excursions fit with realistic transfer and return timing."
        />

        <div className="mt-10 space-y-8">
          <CruisePassengerCallout>
            <p>
              Boston is one of the richest historic ports on Canada &amp; New England
              routes — match your tour to hours ashore and all-aboard deadlines at
              Black Falcon Cruise Terminal. Four hours suits Quincy Market walks;
              six hours opens Freedom Trail tours; eight hours allows Harvard, Salem,
              or whale watching.
            </p>
          </CruisePassengerCallout>
          <ReturnToShipBlock
            confidence="Moderate"
            note="Build at least 45–60 minutes between your excursion's stated return and your ship's all-aboard time. Summer traffic on Northern Avenue, Atlantic Avenue, and I-93 can add unexpected delay on returns from downtown and Charlestown."
          />
          <CruisePlanner />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
