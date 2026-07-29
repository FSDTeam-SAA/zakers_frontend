export type FindMyProjectHero = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  primaryAction: string;
  secondaryAction: string;
};

export type FindMyProjectCard = {
  title: string;
  location: string;
  price: string;
  match: string;
  status: string;
  beds: string;
  completion: string;
  features: string[];
  image: string;
  href: string;
};

export type FindMyProjectAdvisor = {
  image: string;
  logo: string;
  name: string;
  company: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type FindMyProjectCta = {
  image: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
};
