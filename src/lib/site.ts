import {
  Home,
  Building2,
  Package,
  Sofa,
  Warehouse,
  Truck,
  Wrench,
  Globe2,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Aspire Removals & Transport",
  short: "Aspire Removals",
  tagline: "Trust Us Take You Home",
  phone: "07493 732371",
  email: "info@aspireremovals.co.uk",
  address: "167 Henley Avenue, Sutton, SM3 9SD",
  hours: [
    { d: "Monday – Friday", h: "07:00 – 19:00" },
    { d: "Saturday", h: "08:00 – 17:00" },
    { d: "Sunday", h: "By appointment" },
  ],
};

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

function svc(
  slug: string,
  title: string,
  short: string,
  description: string,
  icon: LucideIcon,
  benefits: string[],
  process: { title: string; text: string }[],
  faqs: { q: string; a: string }[],
): Service {
  return { slug, title, short, description, icon, benefits, process, faqs };
}

const defaultProcess = [
  { title: "Enquire", text: "Tell us what you need and we'll respond the same day." },
  { title: "Plan", text: "We agree scope, timing and a clear fixed price up front." },
  { title: "Execute", text: "Uniformed crews handle the job with care and precision." },
  { title: "Sign-off", text: "We only leave once you're completely satisfied." },
];

const defaultFaqs = [
  { q: "Are you fully insured?", a: "Yes — every job includes Goods-in-Transit and Public Liability cover." },
  { q: "How quickly can you book me in?", a: "Most jobs can be scheduled within a few days; short-notice slots are often available." },
  { q: "Do you cover the whole UK?", a: "Yes, we operate nationwide from our London base." },
];

export const SERVICES: Service[] = [
  svc(
    "home-removals",
    "Home Removals",
    "Effortless home moves, handled end-to-end.",
    "From studios to five-bedroom houses, our uniformed crews plan, pack and move your home with care anywhere in the UK.",
    Home,
    [
      "Free in-home or video survey",
      "Uniformed, DBS-checked crews",
      "Blankets, straps & floor protection included",
      "Comprehensive goods-in-transit cover",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "packaging",
    "Packaging",
    "Professional packing and premium materials.",
    "Full, part or fragile-only packing using premium double-wall boxes, acid-free tissue and custom crating for antiques and artwork.",
    Package,
    [
      "Premium double-wall cartons",
      "Custom crating for art & antiques",
      "Detailed inventory & labelling",
      "Free carton collection after your move",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "assembly-disassembly",
    "Assembly & Disassembly",
    "Furniture taken apart and rebuilt with care.",
    "Beds, wardrobes, desks and flat-pack furniture professionally dismantled at collection and rebuilt at delivery — tools, hardware and know-how included.",
    Wrench,
    [
      "Beds, wardrobes and modular units",
      "Flat-pack assembly at destination",
      "All tools and fixings supplied",
      "Photographic inventory of hardware",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "storage-services",
    "Storage Services",
    "Clean, secure, monitored self-storage.",
    "Short and long-term storage in a clean, alarmed facility with 24/7 CCTV — ideal for between-move gaps, downsizing or long-term overflow.",
    Warehouse,
    [
      "24/7 CCTV & alarmed facility",
      "Flexible weekly or monthly terms",
      "Container, room or pallet options",
      "Collection & delivery included",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "international-removals",
    "International Removals",
    "Door-to-door European and worldwide moves.",
    "Full-service international relocation with export packing, customs paperwork and door-to-door delivery by road, sea or air.",
    Globe2,
    [
      "Road, sea and air freight options",
      "Export-grade packing & crating",
      "Customs documentation handled",
      "Door-to-door tracked delivery",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "man-and-van",
    "Man & Van Services",
    "Flexible hourly transport with a helping hand.",
    "Perfect for single items, small moves and marketplace pickups — a friendly driver plus a large van, priced by the hour with no hidden extras.",
    Truck,
    [
      "Hourly and fixed-price options",
      "Same-day slots in London",
      "Two-person crew available",
      "Fully insured & tracked",
    ],
    defaultProcess,
    defaultFaqs,
  ),

  // ---- Sub-services (full pages, reached from navbar & Home Removals) ----
  svc(
    "domestic-removals",
    "Domestic Removals",
    "UK house moves, done properly.",
    "Local and long-distance domestic house moves anywhere in the UK, with the same fully-insured, uniformed crews on every job.",
    Home,
    [
      "Local and nationwide coverage",
      "Fixed-price quotes with no hidden fees",
      "Blankets, straps & floor protection",
      "Reassembly at your new home",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "business-removals",
    "Business Removals",
    "Move your business with zero downtime.",
    "Weekend and out-of-hours commercial moves for offices, studios and retail — IT decommission, crate hire and a dedicated project manager included.",
    Building2,
    [
      "Out-of-hours & weekend moves",
      "IT decommission & recommission",
      "Crate hire and colour-coded plans",
      "Dedicated project manager",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "special-furniture",
    "Special Furniture",
    "Pianos, antiques and oversized pieces.",
    "Specialist handling for pianos, antiques, sculpture, safes and oversized furniture — custom crating, protective materials and specialist equipment.",
    Sofa,
    [
      "Pianos, safes & oversized pieces",
      "Custom crating and blanket-wrap",
      "Stair-climbing and hoisting equipment",
      "High-value item insurance available",
    ],
    defaultProcess,
    defaultFaqs,
  ),
  svc(
    "packing-services",
    "Packing Services",
    "Museum-grade packing for every item.",
    "Full, part or fragile-only packing services delivered by trained packers using premium materials and detailed inventory.",
    Boxes,
    [
      "Full, part or fragile-only options",
      "Room-by-room photographic inventory",
      "Premium double-wall cartons",
      "Unpack service available",
    ],
    defaultProcess,
    defaultFaqs,
  ),
];

export const SERVICE_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

// Top-level services shown on the Home page and Services index.
export const TOP_SERVICE_SLUGS = [
  "home-removals",
  "packaging",
  "assembly-disassembly",
  "storage-services",
  "international-removals",
  "man-and-van",
] as const;

export const TOP_SERVICES: Service[] = TOP_SERVICE_SLUGS.map(
  (slug) => SERVICE_BY_SLUG[slug],
);

// Navbar structure for the Services dropdown (with optional sub-menus).
export type NavServiceChild = {
  label: string;
  to: string; // resolved href for navigation
};

export type NavServiceItem = {
  label: string;
  to: string;
  children?: NavServiceChild[];
};

export const NAV_SERVICES: NavServiceItem[] = [
  {
    label: "Home Removals",
    to: "/services/home-removals",
    children: [
      { label: "Domestic Removals", to: "/services/domestic-removals" },
      { label: "International Removals", to: "/services/international-removals" },
      { label: "Business Removals", to: "/services/business-removals" },
      { label: "Special Furniture", to: "/services/special-furniture" },
    ],
  },
  {
    label: "Packaging",
    to: "/services/packaging",
    children: [
      { label: "Packing Services", to: "/services/packing-services" },
      { label: "Package Material", to: "/products" },
    ],
  },
  { label: "Assembly & Disassembly", to: "/services/assembly-disassembly" },
  { label: "Storage Services", to: "/services/storage-services" },
  { label: "International Removals", to: "/services/international-removals" },
  { label: "Man & Van Services", to: "/services/man-and-van" },
];

// Backwards compat for any legacy imports.
export const STORAGE_SERVICE = SERVICE_BY_SLUG["storage-services"];
