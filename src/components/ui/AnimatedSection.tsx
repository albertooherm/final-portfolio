"use client";

import { motion } from "framer-motion";
import { AnimationProps } from "@/types";

export const AnimatedSection = ({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
