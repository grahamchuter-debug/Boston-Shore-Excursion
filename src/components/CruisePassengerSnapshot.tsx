import type { CruiseSnapshotFields } from "@/lib/excursions";

const defaultFields: Required<CruiseSnapshotFields> = {
  timeInPort: "6–9 hours typical Boston call",
  bestFor: "Freedom Trail, USS Constitution, Quincy Market",
  activityLevel: "Varies by tour",
  familyFriendly: "Good with age-appropriate choices",
  returnToShip: "Build 45–60 min before all-aboard",
  popularTypes: "Historic tours, harbour walks, day trips",
};

type CruisePassengerSnapshotProps = {
  fields?: CruiseSnapshotFields;
  intro?: string;
};

export function CruisePassengerSnapshot({
  fields,
  intro,
}: CruisePassengerSnapshotProps) {
  const merged = { ...defaultFields, ...fields };
  const rows: [string, string][] = [
    ["Typical time in port", merged.timeInPort],
    ["Best for", merged.bestFor],
    ["Activity level", merged.activityLevel],
    ["Family friendly", merged.familyFriendly],
    ["Return to ship", merged.returnToShip],
    ["Popular excursion types", merged.popularTypes],
  ];

  return (
    <aside
      className="rounded-xl border border-blue-200 bg-blue-50 p-6"
      aria-label="Cruise passenger snapshot"
    >
      <h2 className="text-lg font-semibold text-blue-950">
        Cruise passenger snapshot
      </h2>
      {intro && (
        <p className="mt-3 text-slate-700 leading-relaxed">{intro}</p>
      )}
      <dl className="cruise-snapshot__grid mt-5">
        {rows.map(([label, value]) => (
          <div key={label} className="cruise-snapshot__item">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function CruisePassengerCallout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
      <h2 className="text-lg font-semibold text-blue-950">
        Best for cruise passengers in Boston, Massachusetts
      </h2>
      <div className="mt-3 text-slate-700 leading-relaxed">
        {children ?? (
          <p>
            Boston is a historic gateway to New England — match your tour to hours
            ashore, Black Falcon terminal logistics, and all-aboard deadlines.
            Freedom Trail and waterfront walks offer the highest return confidence
            on standard port days.
          </p>
        )}
      </div>
    </section>
  );
}
