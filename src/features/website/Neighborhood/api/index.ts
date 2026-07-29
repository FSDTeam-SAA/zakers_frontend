import type {
  NeighborhoodDevelopment,
  NeighborhoodPin,
  NeighborhoodStat,
} from "../types";

export const neighborhoodVisual = {
  heroImage:
    "https://www.figma.com/api/mcp/asset/bcce2000-3a93-4ae4-94f5-0664f6cf3b9c",
  mapImage:
    "https://www.figma.com/api/mcp/asset/4508b1f2-5d4e-4068-bd86-84118e0bf245",
  cardImageA:
    "https://www.figma.com/api/mcp/asset/e174579d-ad27-4984-a66e-e5d04156ba3c",
  cardImageB:
    "https://www.figma.com/api/mcp/asset/c417c2fc-a74c-4f68-ad5e-bcd105c3c310",
  cardImageC:
    "https://www.figma.com/api/mcp/asset/8bc0c26f-51cd-4922-aa48-89dbaef4c8be",
  ctaImage:
    "https://www.figma.com/api/mcp/asset/9da93243-d9fd-417e-b23b-9c897674d0fd",
};

export const neighborhoodStats: NeighborhoodStat[] = [
  { value: "12", label: "Active projects" },
  { value: "$676K - $50M", label: "Price range" },
  { value: "$2,002/sf", label: "Avg $/sf" },
  { value: "2026-2031", label: "Delivery window" },
];

export const neighborhoodPins: NeighborhoodPin[] = [
  { top: "24%", left: "41%", primary: true },
  { top: "28%", left: "63%" },
  { top: "46%", left: "58%" },
  { top: "58%", left: "45%" },
];

export const neighborhoodDevelopments: NeighborhoodDevelopment[] = [
  {
    title: "619 Brickell (Nobu Residences)",
    developer: "Related Group",
    price: "$1.2M",
    completion: "Delivery 2028",
    beds: "1-4 Beds",
    image: neighborhoodVisual.cardImageA,
    status: "Now Selling",
  },
  {
    title: "8 Residences",
    developer: "PMG",
    price: "$850K",
    completion: "Delivery 2027",
    beds: "2-3 Beds",
    image: neighborhoodVisual.cardImageB,
    status: "Coming Soon",
  },
  {
    title: "Baccarat Residences Brickell",
    developer: "Related Group",
    price: "$1.8M",
    completion: "Move-in 2028",
    beds: "2-5 Beds",
    image: neighborhoodVisual.cardImageC,
    status: "Under Construction",
  },
];
