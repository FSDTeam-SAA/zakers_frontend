import type {
  ExploreMapAdvantage,
  ExploreMapLocation,
  ExploreMapProperty,
} from "../types";

export const exploreMapVisual = {
  heroImage:
    "https://www.figma.com/api/mcp/asset/b5f7f5f6-b629-46a8-89f5-a598393a59b9",
  mapImage:
    "https://www.figma.com/api/mcp/asset/6ce831b9-cccc-4aef-aa67-1f498f5afcab",
  propertyImage:
    "https://www.figma.com/api/mcp/asset/69a17017-ffac-4cf8-962e-c1e0bb972b70",
};

export const exploreMapLocations: ExploreMapLocation[] = [
  { top: "18%", left: "55%", status: "pre-construction" },
  { top: "32%", left: "46%", status: "pre-construction" },
  { top: "40%", left: "77%", status: "pre-construction" },
  { top: "52%", left: "46%", status: "under-construction" },
  { top: "66%", left: "26%", status: "pre-construction" },
  { top: "76%", left: "34%", status: "pre-construction" },
  { top: "71%", left: "45%", status: "pre-construction" },
];

export const exploreMapProperties: ExploreMapProperty[] = [
  {
    name: "Aurelia Residences",
    neighborhood: "Brickell",
    price: "From $1.2M",
    beds: "1–4 Beds",
    completion: "Est. 2027",
    developer: "Related Group",
    image: exploreMapVisual.propertyImage,
    statusLabel: "Pre Construction",
    isHighlighted: true,
  },
  {
    name: "Marea Bay Villas",
    neighborhood: "Brickell",
    price: "From $1.2M",
    beds: "1–4 Beds",
    completion: "Est. 2027",
    developer: "Related Group",
    image: exploreMapVisual.propertyImage,
    statusLabel: "Pre Construction",
  },
  {
    name: "Aria Reserve North",
    neighborhood: "Brickell",
    price: "From $1.2M",
    beds: "1–4 Beds",
    completion: "Est. 2027",
    developer: "Related Group",
    image: exploreMapVisual.propertyImage,
    statusLabel: "Pre Construction",
  },
  {
    name: "Onda Beach Residences",
    neighborhood: "Brickell",
    price: "From $1.2M",
    beds: "1–4 Beds",
    completion: "Est. 2027",
    developer: "Related Group",
    image: exploreMapVisual.propertyImage,
    statusLabel: "Pre Construction",
  },
];

export const exploreMapAdvantages: ExploreMapAdvantage[] = [
  {
    title: "Find Properties Faster",
    description:
      "Navigate curated pins across Miami and filter instantly by neighborhood, price, and construction status.",
  },
  {
    title: "Compare Locations",
    description:
      "Visualize proximity to waterfront, dining, and culture to compare neighborhoods side by side.",
  },
  {
    title: "Discover Investment Opportunities",
    description:
      "Uncover emerging pre-construction developments before they reach the broader market.",
  },
];
