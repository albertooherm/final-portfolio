"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ArticleCardProps } from "@/types";

export const ArticleCard = ({ article, readMoreText }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
        <div className="mb-4">
          <span className="inline-block text-xs text-[#222223]/70 dark:text-white/70 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-lg font-medium font-sans">
            {article.dateRange}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 group-hover:text-[#222223]/80 dark:group-hover:text-white/80 transition-colors font-sans text-[#222223] dark:text-white">
          {article.title}
        </h3>

        <p className="text-sm sm:text-base text-[#222223]/70 dark:text-white/70 leading-relaxed mb-4 font-sans font-normal">
          {article.description}
        </p>

        <a
          href={article.link}
          className="inline-flex items-center text-sm sm:text-base text-[#222223] dark:text-white hover:text-[#222223]/80 dark:hover:text-white/80 transition-colors group/link font-sans font-semibold"
        >
          {readMoreText}
          <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
};
