import type {
  WaterfrontEstateEnclave,
  WaterfrontEstateListing,
  WaterfrontEstatePin,
} from "../types";

export const waterfrontEstatesVisual = {
  heroImage:
    "https://www.figma.com/api/mcp/asset/133488ac-a478-46ec-9e7b-8777f655df6c",
  mapImage:
    "https://www.figma.com/api/mcp/asset/3169f324-a15d-40f5-b423-84c0ee503ebd",
  advisorImage:
    "https://www.figma.com/api/mcp/asset/8e1dd1e0-2258-45e5-b088-b4bb914004ba",
  advisorLogo:
    "https://www.figma.com/api/mcp/asset/0a614b0a-7194-46e8-b48c-03d3993bfc05",
};

export const waterfrontEstateListings: WaterfrontEstateListing[] = [
  {
    id: 1,
    address: "1 Indian Creek Island Rd",
    area: "Indian Creek",
    details: "7,200 sq ft • 6 BD • 8.5 BA • 0.52 Acres",
    badge: "NO FIXED BRIDGES",
    price: "$70M",
  },
  {
    id: 2,
    address: "18 Indian Creek Island Rd",
    area: "Indian Creek",
    details: "7,200 sq ft • 6 BD • 8.5 BA • 0.52 Acres",
    badge: "NO FIXED BRIDGES",
    price: "$70M",
  },
  {
    id: 3,
    address: "27 Indian Creek Island Rd",
    area: "Indian Creek",
    details: "7,200 sq ft • 6 BD • 8.5 BA • 0.52 Acres",
    badge: "NO FIXED BRIDGES",
    price: "$70M",
    highlighted: true,
  },
  {
    id: 4,
    address: "41 Indian Creek Island Rd",
    area: "Indian Creek",
    details: "7,200 sq ft • 6 BD • 8.5 BA • 0.52 Acres",
    badge: "NO FIXED BRIDGES",
    price: "$70M",
  },
  {
    id: 5,
    address: "55 Indian Creek Island Rd",
    area: "Indian Creek",
    details: "7,200 sq ft • 6 BD • 8.5 BA • 0.52 Acres",
    badge: "NO FIXED BRIDGES",
    price: "$70M",
  },
  {
    id: 6,
    address: "70 Indian Creek Island Rd",
    area: "Indian Creek",
    details: "7,200 sq ft • 6 BD • 8.5 BA • 0.52 Acres",
    badge: "NO FIXED BRIDGES",
    price: "$70M",
  },
];

export const waterfrontEstatePins: WaterfrontEstatePin[] = [
  { top: "18%", left: "58%", color: "navy" },
  { top: "26%", left: "66%", color: "gold" },
  { top: "40%", left: "61%", color: "gold" },
  { top: "51%", left: "60%", color: "gold" },
  { top: "72%", left: "74%", color: "gold" },
  { top: "82%", left: "60%", color: "gold" },
];

export const waterfrontEstateEnclaves: WaterfrontEstateEnclave[] = [
  {
    name: "Indian Creek",
    tag: "Open ocean access, no fixed bridges",
    summary: "Guarded island enclave with 24/7 private police.",
    description:
      "Deep-water dockage and ultra-secure privacy make this one of Miami's most coveted waterfront addresses.",
  },
  {
    name: "Star Island",
    tag: "Celebrity enclave, oversized lots",
    summary: "Prestige homes with Biscayne Bay views.",
    description:
      "Private causeway access, manicured landscaping, and large parcels define the island's trophy appeal.",
  },
  {
    name: "Fisher Island",
    tag: "Private island, ferry access only",
    summary: "Luxury resort lifestyle with marina access.",
    description:
      "Known for its exclusivity, private beach club, golf course, and white-glove waterfront living.",
  },
  {
    name: "Palm Island",
    tag: "Private residential island",
    summary: "Boater's paradise with tropical privacy.",
    description:
      "Waterfront mansions with private docks, secure entry, and a serene residential atmosphere.",
  },
  {
    name: "La Gorce",
    tag: "Golf and waterfront access",
    summary: "Wide lots with classic Miami prestige.",
    description:
      "A favored location for buyers seeking deep privacy and prestigious single-family inventory.",
  },
  {
    name: "Sunset Islands",
    tag: "Boutique island collection",
    summary: "Curated waterfront streetscapes near Sunset Harbour.",
    description:
      "Private islands with elegant residences, walkable access, and excellent boating convenience.",
  },
  {
    name: "Venetian Islands",
    tag: "Bayfront modern homes",
    summary: "Linked islands between Miami and the Beach.",
    description:
      "Architecture-forward waterfront estates with skyline views and immediate city access.",
  },
  {
    name: "Bay Point",
    tag: "Guard-gated waterfront community",
    summary: "Estate parcels close to Design District and Edgewater.",
    description:
      "Family-oriented luxury with private security, lush streets, and select bayfront opportunities.",
  },
];
