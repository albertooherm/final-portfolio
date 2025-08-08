"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const WorkExperience = () => {
  const animation = useScrollAnimation();
  const { t } = useLanguage();

  // Get work experience data from translations
  const getWorkExperienceData = () => {
    try {
      const workData = t("sampleData.workExperience");
      return Array.isArray(workData) ? workData : [];
    } catch (error) {
      return [];
    }
  };

  const workExperience = getWorkExperienceData();

  // Fallback data if no work experience is found
  const fallbackWorkExperience = [
    {
      title: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      description:
        "Led design initiatives for multiple product lines, improving user engagement by 40%. Collaborated with cross-functional teams to deliver user-centered solutions.",
      dateRange: "2022 - present",
      location: "San Francisco, CA",
    },
    {
      title: "Product Designer",
      company: "StartupXYZ",
      description:
        "Designed and launched 3 major features that increased user retention by 25%. Worked closely with engineering team to ensure design feasibility and implementation.",
      dateRange: "2020 - 2022",
      location: "New York, NY",
    },
    {
      title: "Junior Designer",
      company: "Creative Agency",
      description:
        "Created visual designs for web and mobile applications. Participated in user research and usability testing sessions.",
      dateRange: "2019 - 2020",
      location: "Los Angeles, CA",
    },
  ];

  const displayWorkExperience =
    workExperience.length > 0 ? workExperience : fallbackWorkExperience;

  return (
    <section
      id="work-experience"
      className="py-16 sm:py-20 lg:py-24 font-sans bg-white dark:bg-[#222223]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Separator */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-16 sm:mb-20"></div>
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-sans text-[#222223] dark:text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {displayWorkExperience.map((job: any, index: number) => (
            <motion.article
              key={job.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8 p-6 sm:p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0">
                  <span className="text-sm text-[#222223]/70 dark:text-white/70 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg font-medium font-sans">
                    {job.dateRange}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black mb-2 group-hover:text-[#222223]/80 dark:group-hover:text-white/80 transition-colors font-sans text-[#222223] dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#222223]/80 dark:text-white/80 mb-3 font-medium font-sans">
                    {job.company} • {job.location}
                  </p>
                  <p className="text-base sm:text-lg text-[#222223]/70 dark:text-white/70 leading-relaxed mb-4 sm:mb-6 font-sans font-normal">
                    {job.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-base text-[#222223] dark:text-white hover:text-[#222223]/80 dark:hover:text-white/80 transition-colors group/link font-sans font-semibold"
                  >
                    View details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#all-experience"
            className="inline-flex items-center text-[#222223] dark:text-white hover:text-[#222223]/80 dark:hover:text-white/80 transition-colors group font-sans font-semibold"
          >
            View all experience
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
