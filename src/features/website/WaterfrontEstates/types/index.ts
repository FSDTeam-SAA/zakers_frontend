export type WaterfrontEstateListing = {
  id: number;
  address: string;
  area: string;
  details: string;
  badge: string;
  price: string;
  highlighted?: boolean;
};

export type WaterfrontEstateEnclave = {
  name: string;
  tag: string;
  summary: string;
  description: string;
};

export type WaterfrontEstatePin = {
  top: string;
  left: string;
  color: "gold" | "navy";
};
