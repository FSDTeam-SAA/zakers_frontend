export type PropertyDetailsGallery = {
  hero: string;
  thumbnails: string[];
  overviewImage: string;
  interiorImages: string[];
};

export type PropertyDetailsHighlight = {
  value: string;
  label: string;
};

export type PropertyDetailsInfoCard = {
  title: string;
  description: string;
};

export type PropertyDetailsAvailability = {
  unitType: string;
  bedrooms: string;
  bathrooms: string;
  interiorSize: string;
  startingPrice: string;
  status: string;
};

export type PropertyDetailsEditorial = {
  quote: string;
  body: string;
  author: string;
};

export type PropertyDetailsSummary = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  salesProgress: string;
  startingFrom: string;
  delivery: string;
  bedrooms: string;
  sizeRange: string;
  stage: string;
  developer: string;
  depositStructure: string;
  rentalPolicy: string;
  pricePerSqFt: string;
  stories: string;
  totalResidences: string;
  statusLabel: string;
};

export type PropertyDetailsRelated = {
  title: string;
  location: string;
  price: string;
  status: string;
  image: string;
  href: string;
};
