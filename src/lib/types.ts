export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  techStack: string[];
  features: string[];
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  link?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TechCategory {
  label: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  href: string;
}

export interface MegaMenuService {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}
