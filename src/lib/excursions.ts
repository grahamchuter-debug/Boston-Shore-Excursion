export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "freedom-trail-shore-excursion",
    path: "/freedom-trail-shore-excursion",
    title: "Freedom Trail Shore Excursion from Boston Cruise Port",
    shortTitle: "Freedom Trail Tour",
    summary:
      "Walk Boston's Revolutionary history with a guide — Old State House, Faneuil Hall, Paul Revere's House, and the North End on a cruise-timed Freedom Trail tour.",
    duration: "3–4 hours (typical guided tour)",
    fitness: "Moderate",
    distanceFromTerminal:
      "Black Falcon Cruise Terminal is roughly 1.5 miles from the Freedom Trail start at Boston Common; organised tours include pier pickup or a short transfer.",
    transferRequired: true,
    transferNote:
      "Most shore excursions include coach or van transfer from Black Falcon to downtown. Independent walkers can reach Boston Common in 25–35 minutes on foot via the Rose Kennedy Greenway.",
    bestFor: [
      "First-time Boston visitors",
      "History enthusiasts",
      "Passengers with 5+ hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Standard Freedom Trail tours are built around cruise schedules with downtown drop-off or pier return. Allow 45–60 minutes buffer before all-aboard for I-93 traffic from downtown.",
    weatherConsiderations:
      "Boston cobblestones become slippery in rain. Summer heat on exposed sections near the harbour can be intense — carry water. Winter calls require warm layers and traction-friendly footwear.",
    cruiseSnapshot:
      "The Freedom Trail is Boston's signature shore excursion — 16 historic sites linked by a red-brick path through downtown and the North End. A guided tour covers the highlights cruise passengers actually have time for.",
    snapshotFields: {
      timeInPort: "5–8 hours recommended",
      bestFor: "History, walking, first visits",
      activityLevel: "Moderate — 2–3 miles walking typical",
      familyFriendly: "Good — engaging for teens; cobblestones challenge strollers",
      returnToShip: "High on organised tours",
      popularTypes: "Walking tours, small-group guides, coach + walk combos",
    },
    description: [
      "Boston's Freedom Trail connects 16 landmarks from Boston Common to the Bunker Hill Monument in Charlestown — a 2.5-mile route through the cradle of American independence. For cruise passengers, a guided partial walk is far more realistic than attempting the full trail independently on a tight port day.",
      "Organised shore excursions typically cover the downtown core: Massachusetts State House, Park Street Church, Granary Burying Ground, King's Chapel, Old South Meeting House, Old State House, Faneuil Hall, and Paul Revere's House in the North End. Guides place each stop in Revolutionary context and manage pacing for your return window.",
      "Black Falcon Cruise Terminal sits in the Seaport District, separated from historic downtown by the Rose Kennedy Greenway. Tours that include pier pickup eliminate navigation stress and I-93 crossing concerns — especially valuable for first-time visitors.",
    ],
    highlights: [
      "Old State House and Boston Massacre site",
      "Faneuil Hall and Quincy Market",
      "Paul Revere's House in the North End",
      "Granary Burying Ground — Adams, Revere, Hancock",
      "Expert guide pacing for cruise schedules",
    ],
    faqs: [
      {
        question: "Can cruise passengers walk the Freedom Trail independently?",
        answer:
          "Partially — you can reach Boston Common from Black Falcon on foot and walk key downtown sites. A guide adds context and efficient routing. See our Freedom Trail from cruise port guide for distance and timing detail.",
      },
      {
        question: "How much of the trail fits a port day?",
        answer:
          "Most tours cover 4–8 downtown sites in 3–4 hours. The full 16-site trail to Charlestown requires 5–6 hours minimum and is rarely completed on standard cruise calls.",
      },
      {
        question: "Is the Freedom Trail suitable for limited mobility?",
        answer:
          "Cobblestones and curbs challenge wheelchairs and walkers. Some operators offer modified routes; enquire about accessibility before booking.",
      },
    ],
    relatedSlugs: [
      "historic-boston-city-tour",
      "boston-highlights-tour",
      "boston-tea-party-tour",
    ],
  },
  {
    slug: "historic-boston-city-tour",
    path: "/historic-boston-city-tour",
    title: "Historic Boston City Tour from Cruise Port",
    shortTitle: "Historic Boston City Tour",
    summary:
      "Coach and walking overview of Revolutionary Boston — Freedom Trail highlights, Beacon Hill, Charlestown Navy Yard, and harbour viewpoints on a single cruise-timed itinerary.",
    duration: "4–5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Tours depart Black Falcon or meet at a downtown hotel zone; Charlestown Navy Yard is roughly 2 miles northeast of the terminal.",
    transferRequired: true,
    transferNote:
      "Included on all organised tours. Combines driving between districts with guided walks at key stops.",
    bestFor: [
      "Passengers wanting broad Boston overview",
      "Those who prefer less walking than a full Freedom Trail tour",
      "First-time visitors with 6+ hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "City overview tours are designed for cruise passengers with built-in return timing. Summer harbour traffic on Northern Avenue and Atlantic Avenue can add 10–20 minutes — reputable operators pad accordingly.",
    weatherConsiderations:
      "Coach sections provide shelter in rain. Walking stops are brief but exposed at the Navy Yard. Layer for harbour wind even on mild days.",
    cruiseSnapshot:
      "A historic city tour delivers Boston's greatest hits without the walking intensity of a full Freedom Trail — ideal when you want Revolutionary history, USS Constitution, and waterfront views in one organised day.",
    snapshotFields: {
      timeInPort: "6–8 hours ideal",
      bestFor: "Overview, history, moderate walking",
      activityLevel: "Easy to moderate — short walks at stops",
      familyFriendly: "Excellent — varied stops keep interest",
      returnToShip: "High confidence",
      popularTypes: "Coach tours, small-group vans",
    },
    description: [
      "Historic Boston city tours stitch together the districts cruise passengers most want to see — downtown Revolutionary sites, Beacon Hill's brick sidewalks, the Charlestown Navy Yard with USS Constitution, and harbour panoramas from the Seaport or Long Wharf.",
      "Unlike a pure walking tour, coach-based itineraries reduce fatigue and cover more ground. Typical stops include Faneuil Hall, the Old North Church, Copp's Hill Burying Ground, and the Constitution — with optional time at Quincy Market for lunch.",
      "This format suits passengers who want context and photography opportunities without committing to 3+ miles of cobblestone walking. Guides explain how Boston shaped the American Revolution and why the harbour remains central to the city's identity.",
    ],
    highlights: [
      "Freedom Trail highlights by coach and foot",
      "USS Constitution and Charlestown Navy Yard",
      "Beacon Hill and Old North Church",
      "Harbour and skyline photo stops",
      "Quincy Market lunch window when timing allows",
    ],
    faqs: [
      {
        question: "Does this tour include USS Constitution?",
        answer:
          "Most historic city tours include the Charlestown Navy Yard. Constitution entry depends on security hours and ship maintenance schedule — your operator confirms on the day.",
      },
      {
        question: "How does this differ from a Freedom Trail walking tour?",
        answer:
          "City tours drive between districts with shorter walks at each stop. Freedom Trail tours cover more ground on foot in downtown and the North End.",
      },
      {
        question: "Is this good for a 6-hour port day?",
        answer:
          "Yes — this is one of the best uses of a standard Boston call. Four-hour calls are tight; consider a highlights tour or independent waterfront walk instead.",
      },
    ],
    relatedSlugs: [
      "freedom-trail-shore-excursion",
      "boston-highlights-tour",
      "quincy-market-waterfront-tour",
    ],
  },
  {
    slug: "boston-tea-party-tour",
    path: "/boston-tea-party-tour",
    title: "Boston Tea Party Tour & Museum Shore Excursion",
    shortTitle: "Boston Tea Party Tour",
    summary:
      "Interactive visit to the Boston Tea Party Ships & Museum on Fort Point Channel — re-enactments, tea chests, and Revolutionary storytelling timed for cruise schedules.",
    duration: "2–3 hours (museum + nearby sites)",
    fitness: "Easy",
    distanceFromTerminal:
      "Boston Tea Party Ships & Museum is roughly 1 mile from Black Falcon — 20-minute walk via the Greenway or 5 minutes by taxi.",
    transferRequired: false,
    transferNote:
      "Walkable from downtown or reachable by short taxi from the cruise terminal. Many combo tours include pier transfer plus museum entry.",
    bestFor: [
      "Interactive history lovers",
      "Families with school-age children",
      "Passengers pairing with Quincy Market or Freedom Trail",
    ],
    returnConfidence: "High",
    returnNote:
      "The museum runs timed entry slots — book ahead on peak cruise days. Allow 45 minutes return buffer; the museum sits close to downtown and the terminal corridor.",
    weatherConsiderations:
      "Mostly indoor experience. Outdoor ship deck sections can be windy. Rain does not affect the core visit.",
    cruiseSnapshot:
      "The Boston Tea Party Ships & Museum brings December 1773 to life — passengers board replica tea ships, dump tea into the harbour, and explore immersive galleries. A strong anchor for a half-day historic itinerary.",
    snapshotFields: {
      timeInPort: "4+ hours (pairs well with other downtown sites)",
      bestFor: "Interactive history, families",
      activityLevel: "Easy — minimal walking",
      familyFriendly: "Excellent — designed for engagement",
      returnToShip: "High — compact duration",
      popularTypes: "Museum entry, combo walking tours",
    },
    description: [
      "The Boston Tea Party Ships & Museum on Fort Point Channel recreates the event that sparked the American Revolution. Costumed interpreters guide you through town meeting re-enactments, authentically rigged tea ships, and a award-winning multi-sensory documentary.",
      "For cruise passengers, the museum's 60–90 minute core experience fits neatly into a port day — especially combined with Faneuil Hall, the Greenway walk, or a condensed Freedom Trail section. Timed tickets prevent overcrowding but require advance booking when multiple ships are in port.",
      "Located between the Seaport and downtown, the museum is one of the most walkable major attractions from Black Falcon Cruise Terminal. Combo shore excursions often bundle museum entry with a guided Freedom Trail segment.",
    ],
    highlights: [
      "Interactive tea ship boarding",
      "Costumed historical interpreters",
      "Robinson Tea Chest — sole surviving tea chest",
      "Abigail's Tea Room for post-visit refreshment",
      "Easy pairing with Quincy Market and waterfront",
    ],
    faqs: [
      {
        question: "Do I need to book the Tea Party Museum in advance?",
        answer:
          "Strongly recommended on cruise days — timed entry slots sell out when several ships are in port. Shore excursions typically include pre-booked tickets.",
      },
      {
        question: "Can I visit the Tea Party Museum independently?",
        answer:
          "Yes — it is walkable from Black Falcon. Allow 90 minutes for the experience plus 30 minutes each way walking if not taking a taxi.",
      },
      {
        question: "Is this suitable for young children?",
        answer:
          "Yes — the interactive format engages school-age children well. Very young toddlers may find the re-enactment loud.",
      },
    ],
    relatedSlugs: [
      "freedom-trail-shore-excursion",
      "quincy-market-waterfront-tour",
      "boston-highlights-tour",
    ],
  },
  {
    slug: "harvard-cambridge-tour",
    path: "/harvard-cambridge-tour",
    title: "Harvard & Cambridge Tour from Boston Cruise Port",
    shortTitle: "Harvard & Cambridge Tour",
    summary:
      "Cross the Charles River to Harvard Yard, Harvard Square, and Cambridge's academic landmarks — a classic Boston shore excursion for intellectually curious cruise passengers.",
    duration: "4–5 hours including transfers",
    fitness: "Easy",
    distanceFromTerminal:
      "Harvard Square is roughly 4 miles from Black Falcon — 20–30 minutes by coach or taxi depending on traffic.",
    transferRequired: true,
    transferNote:
      "Requires transport across the Charles River. Red Line subway is possible independently but adds navigation complexity on a port day.",
    bestFor: [
      "University and architecture enthusiasts",
      "Passengers with 6+ hours ashore",
      "Those who have already seen downtown Boston",
    ],
    returnConfidence: "High",
    returnNote:
      "Harvard tours allow predictable timing when booked through cruise-focused operators. Rush-hour bridge traffic (4–6 pm) rarely affects morning and midday port calls.",
    weatherConsiderations:
      "Harvard Yard is open and exposed. Autumn foliage peaks mid-October on many Canada & New England itineraries. Rain makes brick paths slick in the Yard.",
    cruiseSnapshot:
      "Harvard and MIT define Boston's intellectual identity. A Cambridge tour adds university courtyards, bookshops, and Charles River views to your port day — best with at least six hours ashore.",
    snapshotFields: {
      timeInPort: "6–8 hours recommended",
      bestFor: "Universities, architecture, culture",
      activityLevel: "Easy — campus walking",
      familyFriendly: "Good — teens especially enjoy Harvard Square",
      returnToShip: "High on organised tours",
      popularTypes: "Coach tours, student-led campus walks",
    },
    description: [
      "Cambridge sits across the Charles River from Boston — home to Harvard University, MIT, and a distinct college-town atmosphere. Shore excursions typically include Harvard Yard, the Widener Library exterior, John Harvard Statue, and Harvard Square's shops and cafés.",
      "Some tours add MIT's Killian Court, the Charles River Esplanade, or a drive through Back Bay's Victorian brownstones on the return route. Student-led campus tours offer insider perspective when available.",
      "From Black Falcon, the cross-river journey is straightforward by coach but impractical to walk. Independent travellers can take the Silver Line to South Station then the Red Line to Harvard, but managing subway timing against all-aboard adds stress most cruise passengers prefer to avoid.",
    ],
    highlights: [
      "Harvard Yard and historic campus buildings",
      "Harvard Square shops and street life",
      "Charles River views and MIT skyline",
      "Optional Back Bay brownstone drive",
      "Student guide perspective when available",
    ],
    faqs: [
      {
        question: "Can I visit Harvard on a 4-hour port day?",
        answer:
          "Not realistically — transfer time alone consumes an hour round-trip. Save Cambridge for 6+ hour calls or combine with a very condensed downtown visit.",
      },
      {
        question: "Is Harvard Yard open to visitors?",
        answer:
          "Yes — the Yard is publicly accessible. Some building interiors require university affiliation. Outdoor campus walks are the tour focus.",
      },
      {
        question: "Harvard or Salem — which should I choose?",
        answer:
          "Harvard fits better on 6–8 hour calls with less travel risk. Salem requires more road time — see our Salem from cruise port guide.",
      },
    ],
    relatedSlugs: [
      "boston-highlights-tour",
      "historic-boston-city-tour",
      "freedom-trail-shore-excursion",
    ],
  },
  {
    slug: "salem-day-trip",
    path: "/salem-day-trip",
    title: "Salem Day Trip from Boston Cruise Port",
    shortTitle: "Salem Day Trip",
    summary:
      "Guided day trip to Salem, Massachusetts — witch trials history, maritime heritage, and atmospheric colonial streets on a carefully timed cruise shore excursion.",
    duration: "5–6 hours including travel",
    fitness: "Easy",
    distanceFromTerminal:
      "Salem is roughly 25 miles northeast of Boston — 40–60 minutes each way by coach depending on Route 1A traffic.",
    transferRequired: true,
    transferNote:
      "Coach transport essential. Do not attempt independent Salem visits on port days under 8 hours.",
    bestFor: [
      "Witch trials and colonial history enthusiasts",
      "Passengers with 8+ hours ashore",
      "October foliage and Halloween-season calls",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Salem day trips are viable on long port days but traffic on Route 1A and I-93 can tighten margins. Only book through operators who guarantee cruise-ship return. Avoid independent trips on calls under 8 hours.",
    weatherConsiderations:
      "Salem's coastal location brings fog and wind. October is peak season — expect crowds at witch history sites. Indoor museums provide shelter.",
    cruiseSnapshot:
      "Salem's witch trials legacy and maritime past draw cruise passengers seeking something beyond downtown Boston — but travel time makes this an 8-hour port day excursion, not a quick add-on.",
    snapshotFields: {
      timeInPort: "8+ hours strongly recommended",
      bestFor: "Witch history, maritime heritage",
      activityLevel: "Easy — village walking",
      familyFriendly: "Good — witch content may unsettle very young children",
      returnToShip: "Moderate — traffic dependent",
      popularTypes: "Coach day trips, small-group vans",
    },
    description: [
      "Salem, Massachusetts — 17 miles north of Boston — is synonymous with the 1692 witch trials and centuries of maritime trade. Cruise shore excursions typically include the Salem Witch Museum or Peabody Essex Museum, a walking tour of the McIntire Historic District, and time at Derby Wharf.",
      "The appeal is genuine: atmospheric colonial streets, world-class maritime art at the Peabody Essex, and Halloween-season energy that peaks on October Canada & New England sailings. But honesty matters — Salem is not a quick detour from Black Falcon.",
      "Allow 40–60 minutes each way by coach. With 2–3 hours in Salem, you need at least 8 hours ashore to justify the journey. Shorter port calls should stay in Boston — see our Salem from cruise port guide for full timing analysis.",
    ],
    highlights: [
      "Salem Witch Museum or Peabody Essex Museum",
      "Colonial and McIntire District walking tour",
      "Derby Wharf and Friendship schooner",
      "Maritime and witch trials storytelling",
      "October seasonal atmosphere on fall cruises",
    ],
    faqs: [
      {
        question: "Can I visit Salem on a 6-hour port day?",
        answer:
          "We do not recommend it. Travel alone consumes 80–120 minutes, leaving insufficient time in Salem with a safe return buffer.",
      },
      {
        question: "Is Salem worth it from a cruise ship?",
        answer:
          "On 8+ hour calls with a guaranteed-return tour, yes — for witch history and maritime enthusiasts. Downtown Boston offers more for shorter calls.",
      },
      {
        question: "When is Salem busiest?",
        answer:
          "October weekends are extremely crowded. Midweek cruise calls in September–October are popular but manageable with pre-booked tours.",
      },
    ],
    relatedSlugs: [
      "historic-boston-city-tour",
      "freedom-trail-shore-excursion",
      "boston-highlights-tour",
    ],
  },
  {
    slug: "whale-watching-tour",
    path: "/whale-watching-tour",
    title: "Whale Watching Tour from Boston Cruise Port",
    shortTitle: "Whale Watching Tour",
    summary:
      "Stellwagen Bank whale watching from Boston harbour — humpbacks, fin whales, and marine wildlife on a timed cruise excursion with clear return-to-ship planning.",
    duration: "3–4 hours (typical trip)",
    fitness: "Easy",
    distanceFromTerminal:
      "Whale watch boats depart from Long Wharf or Rowes Wharf, roughly 1–1.5 miles from Black Falcon — short taxi or included transfer.",
    transferRequired: true,
    transferNote:
      "Departure pier is walkable but most shore excursions include terminal pickup. Allow 15 minutes to reach Long Wharf from Black Falcon.",
    bestFor: [
      "Wildlife and nature enthusiasts",
      "Passengers with 6+ hours ashore",
      "Those who have already toured historic Boston",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Whale watching trips have fixed departure times and weather-dependent schedules. Trips can run late if whales are distant. Book only with operators who guarantee cruise-ship return or choose afternoon departures with generous port windows.",
    weatherConsiderations:
      "Season runs roughly April through October. Sea conditions cancel trips — always have a backup plan. Dress warmer than land temperature; harbour wind is significant.",
    cruiseSnapshot:
      "Stellwagen Bank National Marine Sanctuary sits off Cape Cod — reachable from Boston harbour. Humpback whales, fin whales, dolphins, and seabirds make this a memorable port day when season and sea conditions align.",
    snapshotFields: {
      timeInPort: "6–8 hours recommended",
      bestFor: "Wildlife, photography, ocean lovers",
      activityLevel: "Easy — boat-based",
      familyFriendly: "Good — seasickness possible in rough conditions",
      returnToShip: "Moderate — weather and wildlife dependent",
      popularTypes: "Harbour boat tours, combo harbour + whale trips",
    },
    description: [
      "Boston whale watching boats head to Stellwagen Bank — a rich feeding ground where humpback whales, fin whales, minke whales, and white-sided dolphins gather from spring through autumn. Naturalist guides explain migration patterns and conservation efforts.",
      "For cruise passengers, timing is everything. Typical trips last 3–4 hours including boarding. Morning departures suit early-arriving ships; afternoon trips work when you have 7+ hours ashore. Weather cancellations are common — peak summer offers the best conditions but also the busiest bookings.",
      "Whale watching pairs poorly with Salem or Lexington day trips on the same port day. It complements a half-day historic tour or stands alone when you have already explored downtown Boston on a previous call.",
    ],
    highlights: [
      "Stellwagen Bank whale sanctuary",
      "Humpback and fin whale sightings",
      "Naturalist narration and education",
      "Boston harbour departure views",
      "Dolphin and seabird encounters",
    ],
    faqs: [
      {
        question: "When is whale watching season in Boston?",
        answer:
          "Roughly April through October, with peak sightings May through September. Winter cruise calls cannot whale watch.",
      },
      {
        question: "What if my whale watch is cancelled?",
        answer:
          "Operators typically offer rebooking or refund. Have a backup downtown plan — our things to do guide lists alternatives.",
      },
      {
        question: "Will I get seasick?",
        answer:
          "Possible in rough seas. Take medication before boarding if prone. Larger catamarans are more stable than smaller vessels.",
      },
    ],
    relatedSlugs: [
      "quincy-market-waterfront-tour",
      "boston-highlights-tour",
      "historic-boston-city-tour",
    ],
  },
  {
    slug: "fenway-park-tour",
    path: "/fenway-park-tour",
    title: "Fenway Park Tour from Boston Cruise Port",
    shortTitle: "Fenway Park Tour",
    summary:
      "Behind-the-scenes Fenway Park experience — America's oldest ballpark, Green Monster, and Boston Red Sox history on a cruise-timed shore excursion.",
    duration: "2–3 hours including transfers",
    fitness: "Easy",
    distanceFromTerminal:
      "Fenway Park is roughly 3 miles west of Black Falcon — 15–25 minutes by taxi or coach.",
    transferRequired: true,
    transferNote:
      "Green Line subway reaches Fenway but coach or taxi is simpler on a port day. Game-day traffic adds significant delays — check the Red Sox schedule.",
    bestFor: [
      "Baseball fans and sports history enthusiasts",
      "Passengers with 5+ hours ashore",
      "Those seeking non-Revolutionary Boston culture",
    ],
    returnConfidence: "High",
    returnNote:
      "Guided ballpark tours run on fixed schedules independent of game days. Avoid home-game afternoons when Kenmore Square traffic is extreme. Standard tours fit comfortably within 6-hour port windows.",
    weatherConsiderations:
      "Tours include open-air seating areas and field views. Rain rarely cancels indoor-museum portions but wet field access may be limited.",
    cruiseSnapshot:
      "Fenway Park opened in 1912 — the oldest Major League ballpark still in use. A guided tour covers the Green Monster, press box, and decades of Red Sox lore for sports-minded cruise passengers.",
    snapshotFields: {
      timeInPort: "5–6 hours minimum",
      bestFor: "Sports fans, American culture",
      activityLevel: "Easy — stadium walking with stairs",
      familyFriendly: "Excellent for baseball-loving families",
      returnToShip: "High — fixed tour duration",
      popularTypes: "Stadium tours, combo Fenway + city tours",
    },
    description: [
      "Fenway Park is a Boston institution — cramped, characterful, and steeped in baseball history from Babe Ruth to the 2004 curse-breaking championship. Hour-long guided tours access the Green Monster seats, the press box, dugout areas, and the Fenway Park Living Museum.",
      "Located in the Fenway-Kenmore neighbourhood, the ballpark is a straightforward coach or taxi ride from Black Falcon. On non-game days, tours run throughout the morning and afternoon. Home-game days bring extreme congestion — verify the Red Sox schedule against your port date.",
      "Fenway pairs well with a condensed Freedom Trail morning or an afternoon Quincy Market visit. It offers a distinctly Boston experience beyond colonial history — ideal for repeat visitors or sports enthusiasts.",
    ],
    highlights: [
      "Green Monster and manual scoreboard",
      "Press box and broadcast history",
      "Dugout and field-level views",
      "Fenway Park Living Museum",
      "Kenmore Square and Lansdowne Street atmosphere",
    ],
    faqs: [
      {
        question: "Can I tour Fenway on a game day?",
        answer:
          "Morning tours often run before evening games, but traffic and parking are chaotic. Non-game days provide a better experience and easier return timing.",
      },
      {
        question: "Is Fenway accessible?",
        answer:
          "Tours involve stairs and uneven surfaces. Accessible tour options exist — enquire with the operator when booking.",
      },
      {
        question: "Does this fit a 4-hour port call?",
        answer:
          "Tight — transfer time plus the 60-minute tour leaves little else. Prefer 6+ hours or combine only with nearby Back Bay walking.",
      },
    ],
    relatedSlugs: [
      "boston-highlights-tour",
      "historic-boston-city-tour",
      "quincy-market-waterfront-tour",
    ],
  },
  {
    slug: "lexington-concord-tour",
    path: "/lexington-concord-tour",
    title: "Lexington & Concord Tour from Boston Cruise Port",
    shortTitle: "Lexington & Concord Tour",
    summary:
      "Follow the Battle Road — Lexington Green, Concord's Old North Bridge, and Revolutionary War sites beyond downtown Boston on a cruise-timed shore excursion.",
    duration: "5–6 hours including travel",
    fitness: "Easy",
    distanceFromTerminal:
      "Lexington is roughly 15 miles northwest — 30–45 minutes each way by coach on Route 2 or I-95.",
    transferRequired: true,
    transferNote:
      "Coach essential. Minuteman National Historical Park sites are spread across towns — not walkable from Boston.",
    bestFor: [
      "Revolutionary War deep-dive enthusiasts",
      "Passengers with 8+ hours ashore",
      "Literary history fans (Walden Pond, Authors Ridge)",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Lexington and Concord tours require highway travel with traffic risk on I-93 and Route 2. Viable on 8+ hour calls through guaranteed-return operators only.",
    weatherConsiderations:
      "Battle Road walking trails are exposed. Autumn foliage on October cruises is spectacular. Mud after rain on unpaved trail sections.",
    cruiseSnapshot:
      "Where the American Revolution began — Lexington Green's 'shot heard round the world' and Concord's Old North Bridge. A meaningful extension for history-focused passengers with long port days.",
    snapshotFields: {
      timeInPort: "8+ hours recommended",
      bestFor: "Revolutionary War history",
      activityLevel: "Easy to moderate — trail walking",
      familyFriendly: "Good — outdoor history engages older children",
      returnToShip: "Moderate — highway traffic dependent",
      popularTypes: "Coach tours, park ranger-led walks",
    },
    description: [
      "Lexington and Concord — northwest of Boston — preserve the opening battles of the American Revolution. Shore excursions follow the Battle Road through Minuteman National Historical Park: Lexington Green, the Hancock-Clarke House, Old North Bridge, and Concord's literary landmarks.",
      "Some tours add Walden Pond, Sleepy Hollow Cemetery's Authors Ridge (Emerson, Thoreau, Hawthorne), or Harvard Square on the return route. The countryside setting contrasts sharply with downtown Boston's urban density.",
      "Travel time is the constraint. Allow 30–45 minutes each way plus 2–3 hours at sites. This is an 8-hour port day excursion — not compatible with whale watching or Salem on the same call.",
    ],
    highlights: [
      "Lexington Green and Minuteman Statue",
      "Old North Bridge — 'shot heard round the world'",
      "Minuteman National Historical Park Battle Road",
      "Optional Walden Pond and Authors Ridge",
      "Expert Revolutionary War narration",
    ],
    faqs: [
      {
        question: "Lexington & Concord or Freedom Trail — which first?",
        answer:
          "Freedom Trail for first-time visitors with standard port hours. Lexington & Concord for dedicated Revolutionary War enthusiasts with 8+ hours.",
      },
      {
        question: "Can I do this independently from the cruise port?",
        answer:
          "Possible with rental car and confident navigation, but highway traffic and parking at park sites make organised tours safer for return timing.",
      },
      {
        question: "Is this available year-round?",
        answer:
          "Yes, though park facilities have reduced hours in winter. Autumn foliage peaks mid-October.",
      },
    ],
    relatedSlugs: [
      "freedom-trail-shore-excursion",
      "historic-boston-city-tour",
      "salem-day-trip",
    ],
  },
  {
    slug: "quincy-market-waterfront-tour",
    path: "/quincy-market-waterfront-tour",
    title: "Quincy Market & Waterfront Tour from Boston Cruise Port",
    shortTitle: "Quincy Market & Waterfront",
    summary:
      "Faneuil Hall, Quincy Market food hall, harbour walk, and Rose Kennedy Greenway — Boston's most walkable shore excursion from the cruise terminal.",
    duration: "2–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Quincy Market is roughly 1.2 miles from Black Falcon — 20–25 minute walk via the Greenway.",
    transferRequired: false,
    transferNote:
      "One of the most walkable options from Black Falcon. Taxi available if mobility is limited.",
    bestFor: [
      "Food lovers and casual explorers",
      "Short port days (4–5 hours)",
      "Passengers preferring flexible, low-stress sightseeing",
    ],
    returnConfidence: "High",
    returnNote:
      "Harbourfront and Quincy Market are among the easiest areas to return from on foot or short taxi. Highest confidence excursion for tight port windows.",
    weatherConsiderations:
      "Harbour wind on exposed walkways. Quincy Market interior provides shelter. Summer crowds at food stalls peak midday.",
    cruiseSnapshot:
      "Quincy Market and Faneuil Hall anchor Boston's visitor waterfront — food stalls, street performers, harbour views, and Revolutionary history within an easy walk from Black Falcon.",
    snapshotFields: {
      timeInPort: "4+ hours sufficient",
      bestFor: "Food, waterfront, casual sightseeing",
      activityLevel: "Easy — flat walking",
      familyFriendly: "Excellent",
      returnToShip: "High — closest major attraction to terminal",
      popularTypes: "Self-guided walks, guided food tours, harbour combos",
    },
    description: [
      "Faneuil Hall — the 'Cradle of Liberty' — and adjacent Quincy Market form Boston's busiest visitor hub. Colonial history meets clam chowder, lobster rolls, and street entertainment in a compact area ideal for cruise passengers.",
      "The Rose Kennedy Greenway connects Black Falcon in the Seaport directly to the waterfront — a flat, landscaped route that makes this the most walkable major excursion zone from the cruise terminal. Continue to Long Wharf for harbour views and optional harbour cruise departures.",
      "Guided food tours add North End tastings and Italian heritage context. Independent exploration suits passengers who want flexibility and the highest return-to-ship confidence on shorter port days.",
    ],
    highlights: [
      "Faneuil Hall historic meeting house",
      "Quincy Market food hall and stalls",
      "Rose Kennedy Greenway walk from terminal",
      "Long Wharf harbour views",
      "Street performers and Boston harbour atmosphere",
    ],
    faqs: [
      {
        question: "Can I walk to Quincy Market from the cruise terminal?",
        answer:
          "Yes — roughly 20–25 minutes via the Greenway. This is the most walkable major attraction from Black Falcon.",
      },
      {
        question: "Is Quincy Market good for a 4-hour port day?",
        answer:
          "Excellent choice for short calls — food, history, and harbour views without needing a coach tour.",
      },
      {
        question: "What should I eat at Quincy Market?",
        answer:
          "Clam chowder, lobster roll, and Boston cream pie are classics. The North End nearby offers superior Italian if you have time to walk further.",
      },
    ],
    relatedSlugs: [
      "boston-tea-party-tour",
      "freedom-trail-shore-excursion",
      "boston-highlights-tour",
    ],
  },
  {
    slug: "boston-highlights-tour",
    path: "/boston-highlights-tour",
    title: "Boston Highlights Tour from Cruise Port",
    shortTitle: "Boston Highlights Tour",
    summary:
      "Best-of Boston in one port day — Freedom Trail sites, USS Constitution, Quincy Market, and harbour panoramas on a balanced cruise shore excursion.",
    duration: "5–6 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Multi-district tour covering downtown, Charlestown, and waterfront — all transfers included.",
    transferRequired: true,
    transferNote:
      "Full-day highlights tours include all transport from Black Falcon Cruise Terminal.",
    bestFor: [
      "First-time Boston visitors",
      "Passengers with one day only in Boston",
      "Those wanting history, harbour, and food in one tour",
    ],
    returnConfidence: "High",
    returnNote:
      "Highlights tours are the bread-and-butter of Boston cruise excursions — operators calibrate routes to standard 6–8 hour port windows with proven return timing.",
    weatherConsiderations:
      "Mix of coach, outdoor walking, and harbour exposure. Layers recommended year-round.",
    cruiseSnapshot:
      "The essential Boston port day — Revolutionary landmarks, Old Ironsides, Quincy Market lunch, and harbour views when you want the broadest single-excursion overview.",
    snapshotFields: {
      timeInPort: "6–8 hours ideal",
      bestFor: "First visits, comprehensive overview",
      activityLevel: "Easy to moderate",
      familyFriendly: "Excellent",
      returnToShip: "High",
      popularTypes: "Coach highlights tours, small-group vans",
    },
    description: [
      "Boston highlights tours compress the city's must-sees into a single cruise-timed itinerary — typically Freedom Trail landmarks downtown, USS Constitution at Charlestown Navy Yard, a Quincy Market or Faneuil Hall stop, and harbour photo opportunities.",
      "This is the recommended choice for first-time visitors with 6–8 hours ashore who want one organised experience rather than piecing together multiple bookings. Guides connect Revolutionary history to modern Boston's identity as a harbour city and academic hub.",
      "Highlights tours deliberately skip Salem, Lexington, and whale watching — those require dedicated port days. Instead they maximise downtown and Charlestown coverage with predictable, high-confidence return timing.",
    ],
    highlights: [
      "Freedom Trail core sites",
      "USS Constitution and Navy Yard",
      "Faneuil Hall and Quincy Market",
      "Harbour and skyline viewpoints",
      "Single-booking port day simplicity",
    ],
    faqs: [
      {
        question: "How is this different from the historic city tour?",
        answer:
          "Highlights tours emphasise the greatest hits with slightly faster pacing. Historic city tours may spend more time at individual Revolutionary sites.",
      },
      {
        question: "Does this include Salem or Harvard?",
        answer:
          "No — those require separate day trips. This tour stays within Boston and Charlestown.",
      },
      {
        question: "Best excursion for first-time visitors?",
        answer:
          "Yes — along with the Freedom Trail walking tour, this is our top recommendation for a first Boston port call.",
      },
    ],
    relatedSlugs: [
      "freedom-trail-shore-excursion",
      "historic-boston-city-tour",
      "quincy-market-waterfront-tour",
    ],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/boston-cruise-port-guide",
  "/best-boston-shore-excursions",
  "/things-to-do-in-boston-from-a-cruise-ship",
  "/one-day-in-boston-from-a-cruise-ship",
  "/walking-boston-from-cruise-port",
  "/freedom-trail-from-cruise-port",
  "/freedom-trail-guide",
  "/salem-from-boston-cruise-port",
  "/salem-from-boston-guide",
  "/harvard-cambridge-from-boston-cruise-port",
  "/harvard-cambridge-guide",
  "/whale-watching-from-boston",
  "/boston-tea-party-cruise-excursion",
  "/boston-tea-party-guide",
  "/uss-constitution-from-boston-cruise-port",
  "/fenway-park-guide",
  "/quincy-market-faneuil-hall-guide",
  "/lexington-concord-guide",
  "/best-time-to-visit-boston",
  "/boston-cruise-ship-schedule",
  "/boston-cruise-planner",
  "/faq",
  "/enquire",
  "/excursions",
];
