"use client";

import { ArrowRight } from "lucide-react";
import { ProjectCardWithMockup } from "@/components/cards";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const Projects = () => {
  const { getProjects, getProjectsSection } = usePortfolioData();

  const projectsData = getProjects();
  const projectsSectionData = getProjectsSection();

  // Show only first 3 projects for featured section
  const displayProjects = projectsData.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 font-sans bg-white dark:bg-[#222223]"
    >
      <div className="container">
        {/* Section Separator */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-16 sm:mb-20"></div>

        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-sans text-[#222223] dark:text-white">
              {projectsSectionData.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => (
              <ProjectCardWithMockup
                key={project.id}
                project={project}
                tryItOutText={projectsSectionData.tryItOut}
                index={index}
                isCompact={false}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No featured projects available.</p>
            </div>
          )}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="/projects"
              className="inline-flex items-center text-[#222223] dark:text-white hover:text-[#222223]/80 dark:hover:text-white/80 transition-colors group font-sans font-semibold"
            >
              {projectsSectionData.viewAll}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
