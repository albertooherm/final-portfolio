// Navigation types
export interface Navigation {
  designerName: string;
  projects: string;
  about: string;
  play: string;
}

// Hero section types
export interface Hero {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

// About section types
export interface AboutProfile {
  name: string;
  title: string;
  location: string;
  bio: string[];
  cvLink: string;
  cvUrl: string;
}

export interface AboutWorkExperience {
  title: string;
  viewDetails: string;
}

export interface About {
  title: string;
  profile: AboutProfile;
  workExperience: AboutWorkExperience;
}

// Work experience item types
export interface WorkExperienceItem {
  id: string;
  title: string;
  company: string;
  product: string;
  description: string;
  dateRange: string;
  isCurrent: boolean;
  location: string;
  tags: string[];
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  dateRange: string;
  tags: string[];
  image: string;
  link: string;
}

// Article types
export interface Article {
  id: string;
  title: string;
  description: string;
  dateRange: string;
  link: string;
}

// Social link types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Data structure types
export interface Data {
  workExperience: WorkExperienceItem[];
  projects: Project[];
  articles: Article[];
  socialLinks: SocialLink[];
}

// Footer types
export interface Footer {
  contact: string;
  copyright: string;
}

// Projects section types
export interface Projects {
  title: string;
  viewAll: string;
  tryItOut: string;
}

// Articles section types
export interface Articles {
  title: string;
  viewAll: string;
  readMore: string;
}

// Complete translation interface
export interface Translation {
  navigation: Navigation;
  hero: Hero;
  about: About;
  projects: Projects;
  articles: Articles;
  footer: Footer;
  data: Data;
}

// Component props types
export interface WorkExperienceCardProps {
  experience: WorkExperienceItem;
  viewDetailsText: string;
}

export interface ProjectCardProps {
  project: Project;
  tryItOutText: string;
}

export interface ArticleCardProps {
  article: Article;
  readMoreText: string;
}

export interface SocialLinkProps {
  social: SocialLink;
}

// Animation types
export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// Theme types
export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Language types
export type Language = "en" | "es";

export interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
}
