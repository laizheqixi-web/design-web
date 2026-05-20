export type Language = 'EN' | 'ZH' | 'DE';

export interface ProjectItem {
  id: string;
  category: string;
  year: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface WhyMeItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface NavigationLinks {
  home: string;
  work: string;
  whyMe: string;
  contact: string;
}
