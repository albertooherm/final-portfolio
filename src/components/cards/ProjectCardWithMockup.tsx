"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardWithMockupProps {
  project: Project;
  tryItOutText: string;
  index: number;
  isCompact?: boolean;
}

export const ProjectCardWithMockup = ({
  project,
  tryItOutText,
  index,
  isCompact = false,
}: ProjectCardWithMockupProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group"
    >
      <div
        className={`flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 ${
          isCompact ? "gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12" : ""
        }`}
      >
        {/* Text Content - Left Side */}
        <motion.div
          className="flex-1 space-y-4 min-w-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2 + 0.3,
            ease: "easeOut",
          }}
        >
          {/* Date Range */}
          <motion.div
            className={`text-sm text-[#222223]/60 dark:text-white/60 font-medium font-sans ${
              isCompact ? "text-xs sm:text-sm" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.4,
              ease: "easeOut",
            }}
          >
            {project.dateRange}
          </motion.div>

          {/* Project Title */}
          <motion.h3
            className={`font-black text-[#222223] dark:text-white group-hover:text-[#222223]/80 dark:group-hover:text-white/80 transition-colors font-sans ${
              isCompact
                ? "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                : "text-2xl sm:text-3xl lg:text-4xl"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.5,
              ease: "easeOut",
            }}
          >
            {project.title}
          </motion.h3>

          {/* Project Description */}
          <motion.p
            className={`text-[#222223]/70 dark:text-white/70 leading-relaxed font-sans max-w-2xl font-normal ${
              isCompact
                ? "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                : "text-lg sm:text-xl"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.6,
              ease: "easeOut",
            }}
          >
            {project.description}
          </motion.p>

          {/* Project Tags */}
          {project.tags && project.tags.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.65,
                ease: "easeOut",
              }}
            >
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs text-[#222223]/60 dark:text-white/60 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-medium font-sans"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Try it out link */}
          <motion.a
            href={project.link}
            className={`inline-flex items-center text-[#222223] dark:text-white hover:text-[#222223]/80 dark:hover:text-white/80 transition-colors group/link font-sans font-semibold ${
              isCompact ? "text-xs sm:text-sm md:text-base" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.7,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            {tryItOutText}
            <ArrowRight
              className={`ml-2 group-hover/link:translate-x-1 transition-transform ${
                isCompact ? "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" : "w-5 h-5"
              }`}
            />
          </motion.a>
        </motion.div>

        {/* Project Mockup - Right Side */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2 + 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className={`w-full mx-auto lg:mx-0 ${
              isCompact
                ? "max-w-[160px] sm:max-w-[200px] md:max-w-xs lg:max-w-sm"
                : "max-w-sm"
            }`}
          >
            <div className="relative">
              {/* Phone Mockup */}
              <motion.div
                className={`bg-muted/50 rounded-2xl p-4 flex items-center justify-center border border-border ${
                  isCompact
                    ? "w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96"
                    : "w-64 h-80 sm:w-72 sm:h-96"
                }`}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Phone Frame */}
                <div className="w-full h-full bg-background rounded-xl border border-border flex flex-col">
                  {/* Phone Notch */}
                  <div
                    className={`bg-foreground rounded-b-2xl mx-auto ${
                      isCompact
                        ? "w-8 h-2 sm:w-10 sm:h-3 md:w-12 md:h-4 lg:w-16 lg:h-6"
                        : "w-16 h-6"
                    }`}
                  ></div>

                  {/* Phone Screen Content */}
                  <div className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center space-y-2">
                      <p className="text-xs text-muted-foreground font-sans">
                        Place your best screen here.
                      </p>
                      <p className="text-xs text-muted-foreground/60 font-sans">
                        Project mockup
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements with animations */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2 + 0.8,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/30 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2 + 1.0,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};
