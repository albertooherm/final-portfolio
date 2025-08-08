"use client";

import { useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import { ProjectCardWithMockup } from "@/components/cards";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const AllProjects = () => {
  const controls = useAnimation();
  const { getProjects, getProjectsSection } = usePortfolioData();

  const projectsData = getProjects();
  const projectsSectionData = getProjectsSection();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 font-sans bg-white dark:bg-[#222223]">
      <div className="container">
        <AnimatedSection delay={0.1}>
          <div className="text-center mt-4 sm:mt-6 md:mt-8 mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 font-sans text-[#222223] dark:text-white">
              All Projects
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 md:space-y-16">
          {projectsData.length > 0 ? (
            projectsData.map((project, index) => (
              <ProjectCardWithMockup
                key={project.id}
                project={project}
                tryItOutText={projectsSectionData.tryItOut}
                index={index}
                isCompact={true}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No projects available.</p>
            </div>
          )}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/"
              className="inline-flex items-center text-[#222223] dark:text-white hover:text-[#222223]/80 dark:hover:text-white/80 transition-colors group font-sans font-semibold"
            >
              Back to home
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform rotate-180" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AllProjects;
