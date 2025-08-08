"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WorkExperienceCardProps } from "@/types";
import TechBadge from "@/components/ui/TechBadge";
import { getTechIcon } from "@/components/ui/techIcons";

export const WorkExperienceCard = ({
  experience,
  viewDetailsText,
}: WorkExperienceCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-4 sm:p-6 lg:p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
        <div className="flex-shrink-0">
          <span className="inline-block text-xs sm:text-sm text-[#222223]/70 dark:text-white/70 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg font-medium font-sans">
            {experience.dateRange}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-2 group-hover:text-[#222223]/80 dark:group-hover:text-white/80 transition-colors font-sans text-[#222223] dark:text-white">
            {experience.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#222223]/80 dark:text-white/80 mb-3 font-medium font-sans">
            {experience.company} • {experience.product}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#222223]/70 dark:text-white/70 leading-relaxed mb-4 font-sans font-normal">
            {experience.description}
          </p>

          {Array.isArray(experience.tags) && experience.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.tags.map((tag, idx) => (
                <TechBadge key={`${tag}-${idx}`} icon={getTechIcon(tag)} label={tag} />
              ))}
            </div>
          )}

          <a
            href="#"
            className="inline-flex items-center text-sm sm:text-base text-[#222223] dark:text-white hover:text-[#222223]/80 dark:hover:text-white/80 transition-colors group/link font-sans font-semibold"
          >
            {viewDetailsText}
            <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
