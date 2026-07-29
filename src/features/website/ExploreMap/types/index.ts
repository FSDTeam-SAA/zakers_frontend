export type ExploreMapLocation = {
  top: string;
  left: string;
  status: "pre-construction" | "under-construction" | "move-in-ready";
};

export type ExploreMapProperty = {
  name: string;
  neighborhood: string;
  price: string;
  beds: string;
  completion: string;
  developer: string;
  image: string;
  statusLabel: string;
  isHighlighted?: boolean;
};

export type ExploreMapAdvantage = {
  title: string;
  description: string;
};
