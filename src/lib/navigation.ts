export type NavItem = { label: string; href: string };

export const PORT_GUIDE_PATH = "/boston-cruise-port-guide";
export const CRUISE_PLANNER_PATH = "/boston-cruise-planner";

export const mainNav: NavItem[] = [
  { label: "Excursions", href: "/excursions" },
  { label: "Port Guide", href: PORT_GUIDE_PATH },
  { label: "Cruise Planner", href: CRUISE_PLANNER_PATH },
  { label: "FAQ", href: "/faq" },
  { label: "Enquire", href: "/enquire" },
];

export const guideLinks: NavItem[] = [
  { label: "Boston Cruise Port Guide", href: PORT_GUIDE_PATH },
  { label: "Best Boston Shore Excursions", href: "/best-boston-shore-excursions" },
  {
    label: "Things To Do From A Cruise Ship",
    href: "/things-to-do-in-boston-from-a-cruise-ship",
  },
  { label: "One Day In Boston", href: "/one-day-in-boston-from-a-cruise-ship" },
  { label: "Freedom Trail From Cruise Port", href: "/freedom-trail-from-cruise-port" },
  { label: "Walking From Cruise Port", href: "/walking-boston-from-cruise-port" },
  { label: "USS Constitution", href: "/uss-constitution-from-boston-cruise-port" },
  { label: "Salem From Cruise Port", href: "/salem-from-boston-cruise-port" },
  { label: "Whale Watching", href: "/whale-watching-from-boston" },
  { label: "Best Time To Visit", href: "/best-time-to-visit-boston" },
  { label: "Cruise Ship Schedule", href: "/boston-cruise-ship-schedule" },
  { label: "Cruise Planner", href: CRUISE_PLANNER_PATH },
  { label: "FAQ", href: "/faq" },
];

export const destinationGuideLinks: NavItem[] = [
  { label: "Freedom Trail Guide", href: "/freedom-trail-guide" },
  { label: "Boston Tea Party Guide", href: "/boston-tea-party-guide" },
  { label: "Harvard & Cambridge Guide", href: "/harvard-cambridge-guide" },
  { label: "Salem Guide", href: "/salem-from-boston-guide" },
  { label: "Fenway Park Guide", href: "/fenway-park-guide" },
  { label: "Quincy Market & Faneuil Hall", href: "/quincy-market-faneuil-hall-guide" },
  { label: "Lexington & Concord Guide", href: "/lexington-concord-guide" },
  { label: "Harvard From Cruise Port", href: "/harvard-cambridge-from-boston-cruise-port" },
  { label: "Boston Tea Party Excursion", href: "/boston-tea-party-cruise-excursion" },
];

export const excursionLinks: NavItem[] = [
  { label: "Freedom Trail Tour", href: "/freedom-trail-shore-excursion" },
  { label: "Historic Boston City Tour", href: "/historic-boston-city-tour" },
  { label: "Boston Highlights Tour", href: "/boston-highlights-tour" },
  { label: "Whale Watching Tour", href: "/whale-watching-tour" },
  { label: "Salem Day Trip", href: "/salem-day-trip" },
  { label: "Harvard & Cambridge Tour", href: "/harvard-cambridge-tour" },
];
