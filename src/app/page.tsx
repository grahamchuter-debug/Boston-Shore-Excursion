import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { GEO_LABEL, HERO_IMAGE, HERO_IMAGE_ALT, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Boston Shore Excursions & Cruise Port Guide — Massachusetts",
  description:
    "Plan shore excursions from Boston, Massachusetts — Freedom Trail, Harvard, Salem, Fenway, whale watching, and Canada & New England cruise port guides.",
  path: "/",
});

export default function HomePage() {
  const featured = excursions.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src={HERO_IMAGE}
          alt={HERO_IMAGE_ALT}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/80 to-slate-900/50"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl lg:grid-cols-2 lg:min-h-[32rem]">
          <div className="flex flex-col justify-center px-4 py-14 md:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              {GEO_LABEL} · Canada &amp; New England
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Shore excursions for Boston cruise passengers
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Historic gateway to New England — Freedom Trail, USS Constitution,
              Harvard, Salem, Fenway, and whale watching with clear return-to-ship
              advice for every port day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/excursions"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Browse excursions
              </Link>
              <Link
                href="/boston-cruise-port-guide"
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold hover:border-white"
              >
                Boston port guide
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:flex flex-col justify-center px-4 py-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">Freedom Trail · Old Ironsides</p>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Boston is one of the strongest Canada &amp; New England cruise ports —
                Revolutionary history, harbour waterfront, and honest timing advice
                from Black Falcon Cruise Terminal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular excursions</h2>
          <Link href="/excursions" className="text-sm font-semibold text-blue-800">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/freedom-trail-from-cruise-port",
                label: "Freedom Trail from cruise port",
                desc: "Can you walk the trail from Black Falcon?",
              },
              {
                href: "/one-day-in-boston-from-a-cruise-ship",
                label: "One day in Boston",
                desc: "4, 6, and 8-hour itinerary ideas",
              },
              {
                href: "/uss-constitution-from-boston-cruise-port",
                label: "USS Constitution",
                desc: "Old Ironsides and Charlestown Navy Yard",
              },
              {
                href: "/boston-cruise-port-guide",
                label: "Boston cruise port guide",
                desc: "Black Falcon terminal and transport",
              },
              {
                href: "/best-boston-shore-excursions",
                label: "Best Boston excursions",
                desc: "Ranked by port time and return confidence",
              },
              {
                href: "/salem-from-boston-cruise-port",
                label: "Salem from cruise port",
                desc: "Honest timing for witch history day trips",
              },
              {
                href: "/whale-watching-from-boston",
                label: "Whale watching",
                desc: "Seasonality and cruise-day timing",
              },
              {
                href: "/boston-cruise-planner",
                label: "Cruise planner",
                desc: "Match tours to your hours ashore",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-white text-center">
          <h2 className="text-2xl font-bold">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your ship schedule and we&apos;ll recommend Boston
            excursions with realistic return timing.
          </p>
          <Link
            href="/enquire"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
