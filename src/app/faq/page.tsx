import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/faq";

const faqs = [
  {
    question: "Where do cruise ships dock in Boston?",
    answer:
      "Most large ships use the Black Falcon Cruise Terminal at 1 Black Falcon Avenue in the Seaport District. Smaller vessels may call at Flynn Cruiseport or Long Wharf depending on the line.",
  },
  {
    question: "Can I walk from the Boston cruise terminal to downtown?",
    answer:
      "Yes — the Rose Kennedy Greenway connects Black Falcon to Faneuil Hall and Quincy Market in roughly 20–25 minutes on foot. Boston Common and the Freedom Trail start about 1.5 miles from the terminal.",
  },
  {
    question: "What is the best shore excursion in Boston?",
    answer:
      "First-time visitors typically choose a Boston highlights tour or Freedom Trail walking tour. Quincy Market walks suit short port days. See our best excursions ranking for full comparison.",
  },
  {
    question: "Can I visit Salem from a Boston cruise ship?",
    answer:
      "Only on 8+ hour port days with an organised coach tour that guarantees cruise-ship return. Travel is 40–60 minutes each way — not realistic on shorter calls.",
  },
  {
    question: "Does Boston have whale watching for cruise passengers?",
    answer:
      "Yes, April through October when sea conditions allow. Trips last 3–4 hours to Stellwagen Bank. Allow 6–8 hours ashore and have a backup plan for weather cancellations.",
  },
  {
    question: "How early should I return to the ship in Boston?",
    answer:
      "Build at least 45–60 minutes before all-aboard. Summer traffic on Northern Avenue and I-93 can delay taxi and coach returns from downtown and Charlestown.",
  },
  {
    question: "How do I enquire about Boston shore excursions?",
    answer:
      "Use our enquiry form with ship name, port date, hours ashore, and interests. We respond with options matched to your schedule and return-to-ship requirements.",
  },
  {
    question: "Is USS Constitution included on Boston tours?",
    answer:
      "Most historic city tours and highlights tours include Charlestown Navy Yard. Interior ship access depends on security hours and maintenance — confirm when booking.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Boston Shore Excursions FAQ",
  description:
    "Frequently asked questions about Boston shore excursions, Black Falcon cruise terminal, Freedom Trail timing, and return-to-ship planning.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Boston Shore Excursions FAQ",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Common questions"
          title="Boston shore excursions FAQ"
          subtitle="Port logistics, Freedom Trail planning, and return-to-ship advice for Massachusetts cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Boston is a premier Canada &amp; New England cruise port — match your tour
              to hours ashore and all-aboard deadlines at Black Falcon. Freedom Trail,
              USS Constitution, and Quincy Market are walkable or tour-accessible on
              most standard port calls.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Quick links">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/boston-cruise-port-guide" className="text-blue-800 underline">
                  Boston cruise port guide
                </Link>
              </li>
              <li>
                <Link href="/freedom-trail-from-cruise-port" className="text-blue-800 underline">
                  Freedom Trail from cruise port
                </Link>
              </li>
              <li>
                <Link href="/best-boston-shore-excursions" className="text-blue-800 underline">
                  Best shore excursions
                </Link>
              </li>
              <li>
                <Link href="/boston-cruise-planner" className="text-blue-800 underline">
                  Cruise planner
                </Link>
              </li>
              <li>
                <Link href="/enquire" className="text-blue-800 underline">
                  Book or enquire
                </Link>
              </li>
            </ul>
          </GuideSection>

          <FAQSection faqs={faqs} title="All questions" />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
