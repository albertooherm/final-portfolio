import { useLanguage } from "@/contexts/LanguageContext";
import {
  WorkExperienceItem,
  Project,
  Article,
  SocialLink,
} from "@/types";

export const usePortfolioData = () => {
  const { t } = useLanguage();

  // Get work experience data
  const getWorkExperience = (): WorkExperienceItem[] => {
    try {
      const workExpData = t("data.workExperience");
      if (Array.isArray(workExpData)) {
        return workExpData as WorkExperienceItem[];
      }
      return [];
    } catch {
      return [];
    }
  };

  // Get projects data
  const getProjects = (): Project[] => {
    try {
      const projectsData = t("data.projects");
      if (Array.isArray(projectsData)) {
        return projectsData as Project[];
      }
      return [];
    } catch {
      return [];
    }
  };

  // Get articles data
  const getArticles = (): Article[] => {
    try {
      const articlesData = t("data.articles");
      if (Array.isArray(articlesData)) {
        return articlesData as Article[];
      }
      return [];
    } catch {
      return [];
    }
  };

  // Get social links data
  const getSocialLinks = (): SocialLink[] => {
    try {
      const socialLinksData = t("data.socialLinks");
      if (Array.isArray(socialLinksData)) {
        return socialLinksData as SocialLink[];
      }
      return [];
    } catch {
      return [];
    }
  };

  // Get navigation data
  const getNavigation = () => ({
    designerName: t("navigation.designerName") as string,
    projects: t("navigation.projects") as string,
    about: t("navigation.about") as string,
    play: t("navigation.play") as string,
  });

  // Get hero data
  const getHero = () => ({
    title: t("hero.title") as string,
    subtitle: t("hero.subtitle") as string,
    description: t("hero.description") as string,
    cta: t("hero.cta") as string,
  });

  // Get about data
  const getAbout = () => ({
    title: t("about.title") as string,
    profile: {
      name: t("about.profile.name") as string,
      title: t("about.profile.title") as string,
      location: t("about.profile.location") as string,
      bio: (t("about.profile.bio") as string[]) || [],
      cvLink: t("about.profile.cvLink") as string,
      cvUrl: (t("about.profile.cvUrl") as string) || "/cv.pdf",
    },
    workExperience: {
      title: t("about.workExperience.title") as string,
      viewDetails: t("about.workExperience.viewDetails") as string,
    },
  });

  // Get projects section data
  const getProjectsSection = () => ({
    title: t("projects.title") as string,
    viewAll: t("projects.viewAll") as string,
    tryItOut: t("projects.tryItOut") as string,
  });

  // Get articles section data
  const getArticlesSection = () => ({
    title: t("articles.title") as string,
    viewAll: t("articles.viewAll") as string,
    readMore: t("articles.readMore") as string,
  });

  // Get footer data
  const getFooter = () => ({
    contact: t("footer.contact") as string,
    copyright: t("footer.copyright") as string,
  });

  return {
    getWorkExperience,
    getProjects,
    getArticles,
    getSocialLinks,
    getNavigation,
    getHero,
    getAbout,
    getProjectsSection,
    getArticlesSection,
    getFooter,
  };
};
