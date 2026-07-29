export type InsightPost = {
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
};

export type InsightDetailSection = {
  title: string;
  paragraphs: string[];
};

export type InsightDetail = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
  sections: InsightDetailSection[];
  quote: string;
  advisor: {
    label: string;
    name: string;
    role: string;
    image: string;
    logo: string;
    bio: string[];
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
};
