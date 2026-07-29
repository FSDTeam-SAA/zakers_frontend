import type {
  FindMyProjectAdvisor,
  FindMyProjectCard,
  FindMyProjectCta,
  FindMyProjectHero,
} from "../types";

export const findMyProjectHero: FindMyProjectHero = {
  eyebrow: "Curated For You",
  title: "Your Personalized Property Matches",
  description:
    "Based on your preferences, we've selected the luxury developments that best fit your lifestyle, location, and investment goals.",
  tags: [
    "8 Matching Developments",
    "Brickell + Edgewater",
    "Budget $1M-$2M",
    "Ocean View Preferred",
  ],
  primaryAction: "Modify Search",
  secondaryAction: "Start New Search",
};

export const findMyProjectCards: FindMyProjectCard[] = [
  {
    title: "Aria Reserve North",
    location: "Sunny Isles Beach · Melo Group",
    price: "From $2.4M",
    match: "98% Match",
    status: "Move-In Ready",
    beds: "1-4 Beds",
    completion: "Est. 2027",
    features: ["Ocean View", "Private Marina", "Smart Home"],
    image: "https://www.figma.com/api/mcp/asset/0b931a18-1539-4600-a7a7-3c846f9111eb",
    href: "/properties/cora-merrick-park",
  },
  {
    title: "Aurelia Residences",
    location: "Brickell · Marquis Development",
    price: "From $1.8M",
    match: "96% Match",
    status: "Pre-Construction",
    beds: "2-4 Beds",
    completion: "Q2 2027",
    features: ["Bayfront", "Spa Club", "White Oak"],
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
  {
    title: "Onda Beach Residences",
    location: "Bay Harbor Islands · VALLECILLO",
    price: "From $1.9M",
    match: "95% Match",
    status: "Move-In Ready",
    beds: "2-5 Beds",
    completion: "Delivered",
    features: ["Waterfront", "Boat Slips", "Italian Design"],
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
  {
    title: "One Twenty Brickell",
    location: "Brickell · PMG",
    price: "From $1.15M",
    match: "94% Match",
    status: "Pre-Construction",
    beds: "1-3 Beds",
    completion: "Est. 2028",
    features: ["Skyline Views", "Flexible Rental", "Amenity Deck"],
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
  {
    title: "Villa Miami",
    location: "Edgewater · Terra + Major",
    price: "From $3.6M",
    match: "92% Match",
    status: "Pre-Construction",
    beds: "3-5 Beds",
    completion: "Est. 2027",
    features: ["Private Elevator", "Chef Kitchens", "Butler Service"],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
  {
    title: "The Residences at 1428",
    location: "Brickell · Ytech",
    price: "From $1.25M",
    match: "91% Match",
    status: "Now Selling",
    beds: "1-2 Beds",
    completion: "Est. 2027",
    features: ["Wellness Floor", "Co-Working", "Pet Spa"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/cora-merrick-park",
  },
];

export const findMyProjectAdvisor: FindMyProjectAdvisor = {
  image: "https://www.figma.com/api/mcp/asset/8e1dd1e0-2258-45e5-b088-b4bb914004ba",
  logo: "https://www.figma.com/api/mcp/asset/0a614b0a-7194-46e8-b48c-03d3993bfc05",
  name: "ZACH AKERS",
  company: "ONE Sotheby's International Realty",
  description:
    "Zach Akers is one of Miami's leading new development specialists, with more than $100 million in pre-construction sales across South Florida's most coveted residential projects. His practice blends developer fluency, floor plan strategy, and white-glove execution for local and international clients.",
  stats: [
    { value: "$100M+", label: "Pre-Construction Sales" },
    { value: "16 Years", label: "Experience" },
    { value: "Florida Native", label: "Local Expertise" },
    { value: "Multilingual Team", label: "Global Client Service" },
  ],
};

export const findMyProjectCta: FindMyProjectCta = {
  image: "https://www.figma.com/api/mcp/asset/0b32d269-cc86-4130-8465-6ad13b36f733",
  title: "Still Looking For The Perfect Property?",
  description:
    "Our luxury real estate specialists will personally help you find the ideal Miami development.",
  primaryAction: "Contact Advisor",
  secondaryAction: "Request Floor Plans",
};
