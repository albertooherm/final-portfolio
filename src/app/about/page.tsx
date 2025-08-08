"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import { WorkExperienceCard } from "@/components/cards";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const About = () => {
  const controls = useAnimation();
  const { getAbout, getWorkExperience } = usePortfolioData();

  const aboutData = getAbout();
  const workExperienceData = getWorkExperience();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 font-sans bg-white dark:bg-[#222223] min-h-screen">
      <div className="container">
        <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Picture */}
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto">
              {/* Profile Picture Placeholder */}
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                {/* Placeholder for actual profile image */}
                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-sans">
                    Profile Photo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Heading */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 md:mb-6 font-sans text-[#222223] dark:text-white">
                {aboutData.title}
              </h1>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              {aboutData.profile.bio.map((paragraph: string, index: number) => (
                <motion.p
                  key={index}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-[#222223]/70 dark:text-white/70 leading-relaxed font-sans font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>

          {/* View CV Link */}
          <AnimatedSection delay={0.7}>
            <div className="mt-8 sm:mt-12">
              <a
                href={aboutData.profile.cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#222223]/70 dark:text-white/70 hover:text-[#222223] dark:hover:text-white transition-colors group font-sans underline underline-offset-4"
              >
                {aboutData.profile.cvLink}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="container mt-8 sm:mt-12 md:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Separator */}
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8 sm:mb-12 md:mb-16"></div>

          <AnimatedSection delay={0.1}>
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 md:mb-6 font-sans text-[#222223] dark:text-white">
                {aboutData.workExperience.title}
              </h2>
            </div>
          </AnimatedSection>

          {/* Work Experience Data */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {workExperienceData.length > 0 ? (
              workExperienceData.map(experience => (
                <WorkExperienceCard
                  key={experience.id}
                  experience={experience}
                  viewDetailsText={aboutData.workExperience.viewDetails}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No work experience data available.
                </p>
              </div>
            )}
          </div>

          {/* Back to Home Link */}
          <AnimatedSection delay={0.4}>
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
      </div>
    </section>
  );
};

export default About;
