import type {
  PropertyDetailsAvailability,
  PropertyDetailsEditorial,
  PropertyDetailsGallery,
  PropertyDetailsHighlight,
  PropertyDetailsInfoCard,
  PropertyDetailsRelated,
  PropertyDetailsSummary,
} from "../types";

export const propertyDetailsGallery: PropertyDetailsGallery = {
  hero: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
  thumbnails: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  ],
  overviewImage:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  interiorImages: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  ],
};

export const propertyDetailsSummary: PropertyDetailsSummary = {
  slug: "cora-merrick-park",
  title: "Cora Merrick Park",
  subtitle: "Coral Gables Pre-Construction Condos",
  location: "Edgewater, Miami",
  category: "PRE-CONSTRUCTION",
  salesProgress: "62% Sold",
  startingFrom: "$1.8M",
  delivery: "Q2 2027",
  bedrooms: "2-4 Bed",
  sizeRange: "1,100 - 3,400 SF",
  stage: "Pre-Construction",
  developer: "Marquis Development Group",
  depositStructure: "20/20/20/20/20",
  rentalPolicy: "Flexible, no minimum",
  pricePerSqFt: "$1,150",
  stories: "58",
  totalResidences: "312",
  statusLabel: "Pre-construction",
};

export const propertyDetailsOverview = {
  heading: "A New Standard for Bayfront Living",
  body: "Cora Merrick Park is presented here as a high-design boutique development with wellness-driven amenities, expansive terraces, and an address woven directly into one of Miami's most desirable lifestyle corridors. The project balances contemporary architecture with private club sensibilities, making it appealing to both end-users and long-term investors.",
  detailHeading: "Designed Without Compromise",
  detailBody:
    "Interiors are conceived as blank canvases of natural stone, white oak, and 10-foot ceilings - designed to be finished by their owners, not dictated to them.",
};

export const propertyDetailsHighlights: PropertyDetailsHighlight[] = [
  { value: "312", label: "Total Residences" },
  { value: "Two-Story Spa", label: "Wellness Concept" },
  { value: "62% Sold", label: "Sales Progress" },
  { value: "$1.8M", label: "Starting Price" },
];

export const propertyDetailsInfoCards: PropertyDetailsInfoCard[] = [
  { title: "Timeline", description: "Delivery Q2 2027" },
  { title: "Location", description: "Edgewater, Miami" },
  { title: "Architecture", description: "Award-winning design collective" },
  { title: "Developer", description: "Marquis Development Group" },
  { title: "Lifestyle", description: "Bayfront resort living" },
  { title: "Design", description: "Natural stone & white oak interiors" },
  { title: "Neighborhood", description: "Private marina access" },
  { title: "Wellness Features", description: "Spa, pool & fitness club" },
];

export const propertyDetailsAvailability: PropertyDetailsAvailability[] = [
  {
    unitType: "Residence A",
    bedrooms: "2 Bed",
    bathrooms: "2.5 Bath",
    interiorSize: "1,420 SF",
    startingPrice: "$1.8M",
    status: "AVAILABLE",
  },
  {
    unitType: "Residence B",
    bedrooms: "3 Bed",
    bathrooms: "3 Bath",
    interiorSize: "1,850 SF",
    startingPrice: "$2.3M",
    status: "SOLD",
  },
  {
    unitType: "Residence C",
    bedrooms: "1 Bed",
    bathrooms: "1 Bath",
    interiorSize: "900 SF",
    startingPrice: "$950K",
    status: "AVAILABLE",
  },
  {
    unitType: "Residence D",
    bedrooms: "4 Bed",
    bathrooms: "3.5 Bath",
    interiorSize: "2,300 SF",
    startingPrice: "$2.9M",
    status: "AVAILABLE",
  },
  {
    unitType: "Residence E",
    bedrooms: "2 Bed",
    bathrooms: "2 Bath",
    interiorSize: "1,500 SF",
    startingPrice: "$1.6M",
    status: "RESERVED",
  },
];

export const propertyDetailsEditorial: PropertyDetailsEditorial = {
  quote:
    "Aurelia Residences stands out in Edgewater's crowded development pipeline for its restraint - a sculptural bayfront tower that lets the architecture, not the amenities list, carry the luxury narrative. At 62% sold with only a limited collection of residences and penthouses remaining, this is a rare opportunity to secure pre-construction pricing on a well-capitalized, resort-grade address with genuine long-term upside.",
  body:
    "With 312 residences across 58 stories, flexible rental terms, and direct developer relationships through our advisory team, we consider Aurelia Residences a strong candidate for both end-users seeking bayfront living and investors targeting Edgewater's continued appreciation.",
  author: "THE MIAMI CONDO SOURCE EDITORIAL TEAM",
};

export const propertyDetailsAdvisor = {
  image:
    "https://www.figma.com/api/mcp/asset/8e1dd1e0-2258-45e5-b088-b4bb914004ba",
  logo:
    "https://www.figma.com/api/mcp/asset/0a614b0a-7194-46e8-b48c-03d3993bfc05",
};

export const propertyDetailsRelated: PropertyDetailsRelated[] = [
  {
    title: "Marisol Bayfront",
    location: "Brickell, Miami",
    price: "From $2.4M",
    status: "PRE-CONSTRUCTION",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
  {
    title: "The Vantage Collection",
    location: "Sunny Isles Beach",
    price: "From $3.9M",
    status: "PRE-CONSTRUCTION",
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
  {
    title: "One Financial Place",
    location: "Brickell, Miami",
    price: "From $1.45M",
    status: "DELIVERED",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
];
