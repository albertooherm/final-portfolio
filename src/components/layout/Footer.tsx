"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-[#222223] font-sans">
      <div className="container">
        {/* Section Separator */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8 sm:mb-12"></div>

        <motion.div
          className="text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base text-[#222223]/60 dark:text-white/60 font-sans">
            © {new Date().getFullYear()} Alberto Hermosillo
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
