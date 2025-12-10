import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  highlights: string[];
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

export interface ToolItem {
  name: string;
  icon?: string; // URL or simplified mapping
  proficiency?: number;
}