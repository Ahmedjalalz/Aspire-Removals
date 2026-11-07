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
  url: "https://www.aspireremovalsandtransport.co.uk",
  hours: [
    { d: "Monday – Friday", h: "07:00 – 19:00" },
    { d: "Saturday", h: "08:00 – 17:00" },
    { d: "Sunday", h: "By appointment" },
  ],
};

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  short: string;
  description: string;
  imageAlt: string;
  icon: LucideIcon;
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

function svc(
  slug: string,
  title: string,
  metaTitle: string,
  metaDescription: string,
  short: string,
  description: string,
  imageAlt: string,
  icon: LucideIcon,
  benefits: string[],
  process: { title: string; text: string }[],
  faqs: { q: string; a: string }[],
): Service {
  return {
    slug,
    title,
    metaTitle,
    metaDescription,
    short,
    description,
    imageAlt,
    icon,
    benefits,
    process,
    faqs,
  };
}

const defaultProcess = [
  { title: "Enquire", text: "Tell us what you need and we'll respond the same day." },
  { title: "Plan", text: "We agree scope, timing and a clear fixed price up front." },
  { title: "Execute", text: "Uniformed crews handle the job with care and precision." },
  { title: "Sign-off", text: "We only leave once you're completely satisfied." },
];

export const SERVICES: Service[] = [
  svc(
    "home-removals",
    "Home Removals",
    "Home Removals UK | House Moving Services | Aspire Removals",
    "Stress-free home removals across the UK. Uniformed DBS-checked crews, full packing options, furniture protection, and goods-in-transit insurance included.",
    "Effortless home moves, handled end-to-end.",
    "From studios to five-bedroom houses, our uniformed crews plan, pack and move your home with care anywhere in the UK.",
    "Aspire Removals professional home removal team packing and moving boxes into a UK property",
    Home,
    [
      "Free in-home or video survey",
      "Uniformed, DBS-checked crews",
      "Blankets, straps & floor protection included",
      "Comprehensive goods-in-transit cover",
    ],
    defaultProcess,
    [
      {
        q: "How far in advance should I book my home removal?",
        a: "We recommend booking 2 to 4 weeks in advance, especially for Friday and month-end moves. However, we always accommodate short-notice moves whenever our schedule permits.",
      },
      {
        q: "Are my belongings insured during the house move?",
        a: "Yes, every domestic removal includes comprehensive Goods-in-Transit insurance and Public Liability protection as standard for complete peace of mind.",
      },
      {
        q: "Do you supply packing boxes and protective materials?",
        a: "Yes! We provide premium double-wall moving boxes, bubble wrap, tape, and packing paper beforehand, or our specialists can complete the entire packing process for you.",
      },
      {
        q: "Can you dismantle and reassemble beds and wardrobes?",
        a: "Absolutely. Our crews carry complete toolkits to safely dismantle large beds, wardrobes, and flat-pack furniture, reassembling them in your new rooms.",
      },
    ],
  ),
  svc(
    "packaging",
    "Packaging",
    "Packaging Materials & Moving Supplies UK | Aspire Removals",
    "Professional packing materials and moving supplies. Heavy-duty double-wall boxes, bubble wrap, tape, and protective covers delivered across the UK.",
    "Professional packing and premium materials.",
    "Full, part or fragile-only packing using premium double-wall boxes, acid-free tissue and custom crating for antiques and artwork.",
    "Hands carefully wrapping delicate kitchenware and ceramics with premium bubble wrap packaging",
    Package,
    [
      "Premium double-wall cartons",
      "Custom crating for art & antiques",
      "Detailed inventory & labelling",
      "Free carton collection after your move",
    ],
    defaultProcess,
    [
      {
        q: "What types of packing boxes do you supply?",
        a: "We supply heavy-duty double-wall corrugated cartons in small, medium, and large sizes, as well as specialised wardrobe boxes with metal hanging rails and heavy book boxes.",
      },
      {
        q: "Can I order packing materials without booking a move?",
        a: "Yes. You can order moving boxes and packing supplies directly through our website for prompt delivery to your address.",
      },
      {
        q: "How much bubble wrap and tape will I need?",
        a: "Our move coordinators can estimate your packing supplies based on your property size and inventory. Typically, a 3-bedroom house requires 2–3 rolls of tape and 50–100m of bubble wrap.",
      },
    ],
  ),
  svc(
    "assembly-disassembly",
    "Assembly & Disassembly",
    "Furniture Assembly & Disassembly Services | Aspire Removals",
    "Expert furniture disassembly & reassembly services across the UK. We take apart beds, wardrobes, and flat-pack furniture and rebuild them at your new home.",
    "Furniture taken apart and rebuilt with care.",
    "Beds, wardrobes, desks and flat-pack furniture professionally dismantled at collection and rebuilt at delivery — tools, hardware and know-how included.",
    "Professional mover assembling a modern flat-pack wardrobe with precision hand tools",
    Wrench,
    [
      "Beds, wardrobes and modular units",
      "Flat-pack assembly at destination",
      "All tools and fixings supplied",
      "Photographic inventory of hardware",
    ],
    defaultProcess,
    [
      {
        q: "What types of furniture can you dismantle and reassemble?",
        a: "We handle divans, ottoman and wooden bed frames, multi-door wardrobes, IKEA and flat-pack furniture, dining tables, desks, and gym equipment.",
      },
      {
        q: "Do you keep track of screws, bolts, and fixings?",
        a: "Yes. We bag, label, and securely tape all fittings to their corresponding items, photographing key steps so reassembly is precise and seamless.",
      },
      {
        q: "Do I need to supply tools for the assembly?",
        a: "No, our crews arrive fully equipped with professional power tools, hex keys, screwdrivers, and protective work mats.",
      },
    ],
  ),
  svc(
    "storage-services",
    "Storage Services",
    "Secure Storage Services UK | Short & Long Term | Aspire Removals",
    "Clean, alarmed, 24/7 CCTV-monitored storage facilities for short and long-term storage. Complete collection and delivery service across the UK.",
    "Clean, secure, monitored self-storage.",
    "Short and long-term storage in a clean, alarmed facility with 24/7 CCTV — ideal for between-move gaps, downsizing or long-term overflow.",
    "Clean, brightly lit modern self-storage facility interior with secure private units",
    Warehouse,
    [
      "24/7 CCTV & alarmed facility",
      "Flexible weekly or monthly terms",
      "Container, room or pallet options",
      "Collection & delivery included",
    ],
    defaultProcess,
    [
      {
        q: "Is your storage facility secure and climate-controlled?",
        a: "Yes, our facilities feature 24/7 CCTV surveillance, fire detection systems, perimeter alarms, and clean, dry, climate-controlled units.",
      },
      {
        q: "Do you collect my items and deliver them to storage?",
        a: "Yes! We offer a door-to-door service where our team loads your items from your home, transports them to storage, and delivers them back when you are ready.",
      },
      {
        q: "What is the minimum storage rental period?",
        a: "We offer flexible terms starting from as little as one week, with discounts available for long-term storage agreements.",
      },
    ],
  ),
  svc(
    "international-removals",
    "International Removals",
    "International Removals UK | European & Global Moving | Aspire",
    "Door-to-door international moving services from the UK to Europe and worldwide. Export packing, customs clearance, sea, air, and road freight solutions.",
    "Door-to-door European and worldwide moves.",
    "Full-service international relocation with export packing, customs paperwork and door-to-door delivery by road, sea or air.",
    "Shipping containers and freight logistics being prepared for international overseas relocation",
    Globe2,
    [
      "Road, sea and air freight options",
      "Export-grade packing & crating",
      "Customs documentation handled",
      "Door-to-door tracked delivery",
    ],
    defaultProcess,
    [
      {
        q: "Which countries do you move to?",
        a: "We provide regular door-to-door road freight across France, Spain, Germany, Italy, and Europe, as well as sea and air container shipping to Australia, Canada, the USA, UAE, and worldwide.",
      },
      {
        q: "Do you handle customs declarations and paperwork?",
        a: "Yes, our international relocation coordinators manage import/export documentation, customs forms, and inventory declarations to prevent port delays.",
      },
      {
        q: "How are fragile and high-value items protected for overseas transit?",
        a: "We use professional export wrapping, acid-free cushioning, and custom wooden crating designed specifically for long-distance maritime and air transport.",
      },
    ],
  ),
  svc(
    "man-and-van",
    "Man & Van Services",
    "Man and Van Services UK | Reliable Van Hire & Movers | Aspire",
    "Flexible man & van services for small moves, student relocations, and single-item transport. Fully insured, punctual drivers with transparent hourly rates.",
    "Flexible hourly transport with a helping hand.",
    "Perfect for single items, small moves and marketplace pickups — a friendly driver plus a large van, priced by the hour with no hidden extras.",
    "Uniformed man and van movers carefully loading a sofa into a moving van on a residential street",
    Truck,
    [
      "Hourly and fixed-price options",
      "Same-day slots in London",
      "Two-person crew available",
      "Fully insured & tracked",
    ],
    defaultProcess,
    [
      {
        q: "What is the minimum booking time for Man and Van?",
        a: "Our standard man and van service has a 2-hour minimum booking period, after which time is charged in transparent half-hour increments.",
      },
      {
        q: "Can I book a 2-person or 3-person team with the van?",
        a: "Yes, you can choose between a driver-only helper or a multi-person uniformed crew to handle all heavy lifting and staircase carrying.",
      },
      {
        q: "Are short-notice or same-day bookings available?",
        a: "Yes, subject to fleet availability we frequently accommodate same-day and emergency moves across London and surrounding areas.",
      },
    ],
  ),

  // ---- Sub-services (full pages, reached from navbar & Home Removals) ----
  svc(
    "domestic-removals",
    "Domestic Removals",
    "Domestic Removals UK | Trusted House Movers | Aspire Removals",
    "Reliable domestic removals across the UK. Tailored house moving services with fixed prices, protective equipment, and experienced, uniformed crews.",
    "UK house moves, done properly.",
    "Local and long-distance domestic house moves anywhere in the UK, with the same fully-insured, uniformed crews on every job.",
    "Aspire Removals removal truck parked outside a British residential house during home moving",
    Home,
    [
      "Local and nationwide coverage",
      "Fixed-price quotes with no hidden fees",
      "Blankets, straps & floor protection",
      "Reassembly at your new home",
    ],
    defaultProcess,
    [
      {
        q: "How do you calculate the price for a domestic move?",
        a: "Our quotes are based on the volume of items, access conditions at both properties, travel distance, and any extra services like packing or dismantling. Quotes are 100% fixed with no hidden fees.",
      },
      {
        q: "What protective materials do you use on moving day?",
        a: "We protect your home with floor runners and banister covers, while sofas, mattresses, and appliances are wrapped in padded quilted transit blankets and specialized covers.",
      },
      {
        q: "What happens if there is a delay in key release on completion day?",
        a: "We understand property completion delays happen. We remain parked and ready, and our coordinator stays in close communication with you until keys are handed over.",
      },
    ],
  ),
  svc(
    "business-removals",
    "Business Removals",
    "Office & Business Removals UK | Commercial Relocation | Aspire",
    "Professional commercial relocation and office removals with zero downtime. Weekend moves, IT decommission, crate hire, and dedicated project management.",
    "Move your business with zero downtime.",
    "Weekend and out-of-hours commercial moves for offices, studios and retail — IT decommission, crate hire and a dedicated project manager included.",
    "Office relocation showing securely packed computer monitors and rolling office crates",
    Building2,
    [
      "Out-of-hours & weekend moves",
      "IT decommission & recommission",
      "Crate hire and colour-coded plans",
      "Dedicated project manager",
    ],
    defaultProcess,
    [
      {
        q: "Can you complete our office move outside working hours or over a weekend?",
        a: "Yes. We frequently carry out commercial relocations on Friday evenings and weekends so your team can log on and resume work on Monday morning without interruption.",
      },
      {
        q: "Do you move sensitive IT hardware and server racks?",
        a: "Yes. We use anti-static bubble wrap, computer crates, screen covers, and server transport trolleys to ensure all computing equipment arrives safely.",
      },
      {
        q: "Do you provide heavy-duty plastic crate hire for staff?",
        a: "Yes, we deliver numbered and colour-coded plastic lidded crates before the move and collect them once uncrating is complete.",
      },
    ],
  ),
  svc(
    "special-furniture",
    "Special Furniture",
    "Specialist Furniture Movers | Piano & Antique Removals | Aspire",
    "Specialist transport for pianos, fine art, antiques, and heavy oversized furniture. Custom crating, hoist equipment, and high-value transit insurance.",
    "Pianos, antiques and oversized pieces.",
    "Specialist handling for pianos, antiques, sculpture, safes and oversized furniture — custom crating, protective materials and specialist equipment.",
    "Professional movers wrapping and preparing a grand piano with heavy-duty padded covers",
    Sofa,
    [
      "Pianos, safes & oversized pieces",
      "Custom crating and blanket-wrap",
      "Stair-climbing and hoisting equipment",
      "High-value item insurance available",
    ],
    defaultProcess,
    [
      {
        q: "Can you move grand and upright pianos?",
        a: "Yes, our crews are trained in piano moves using specialized piano shoes, heavy-duty dollies, padded covers, and ramp systems.",
      },
      {
        q: "How do you protect valuable artwork, sculptures, and antiques?",
        a: "We build bespoke timber crates, use acid-free tissue paper and multiple layers of protective foam to isolate items from vibration and shock.",
      },
      {
        q: "Are high-value items covered by insurance?",
        a: "Yes, we offer extended high-value goods-in-transit cover tailored specifically to the declared value of your antiques, instruments, and art pieces.",
      },
    ],
  ),
  svc(
    "packing-services",
    "Packing Services",
    "Professional Packing Services UK | Home & Office | Aspire",
    "Full, partial, and fragile-only packing services by trained professionals. High-grade double-wall boxes, acid-free tissue, and itemized inventories.",
    "Museum-grade packing for every item.",
    "Full, part or fragile-only packing services delivered by trained packers using premium materials and detailed inventory.",
    "Professional packers wrapping delicate glassware and fragile items in protective packing paper",
    Boxes,
    [
      "Full, part or fragile-only options",
      "Room-by-room photographic inventory",
      "Premium double-wall cartons",
      "Unpack service available",
    ],
    defaultProcess,
    [
      {
        q: "What is the difference between full packing and fragile-only packing?",
        a: "Full packing covers everything in your home from clothes and books to kitchen utensils. Fragile-only packing focuses specifically on delicate items like glassware, porcelain, mirrors, and lamps.",
      },
      {
        q: "When does the packing team arrive?",
        a: "For larger properties, we typically pack the day before your move. For smaller homes, packing can often be completed on the morning of moving day.",
      },
      {
        q: "Do you also offer an unpacking service at our new property?",
        a: "Yes! We can unpack cartons onto flat surfaces and remove all empty boxes and packing rubbish, leaving your new home clutter-free.",
      },
    ],
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
