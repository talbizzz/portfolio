export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  techStack: string[];
  links?: { label: string; url: string }[];
  image?: string;
  featured?: boolean;
}

export interface ExperienceEntry {
  company: string;
  title: string;
  startDate: string; // "YYYY-MM"
  endDate: string | "present";
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  notes?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone?: string;
  resumePath: string;
  social: { label: string; url: string }[];
}

export type RoadmapNodeType = "education" | "project" | "experience" | "contact";

export interface RoadmapNode {
  id: string;
  type: RoadmapNodeType;
  title: string;
  position: [number, number, number];
  environment: string;
  contentRef: string;
}
