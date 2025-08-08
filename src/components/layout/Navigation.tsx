"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border font-sans"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand / Name (clickable) */}
          <Link
            href="/"
            aria-label="Go to home"
            className="flex-shrink-0 inline-flex items-center hover:text-primary transition-colors"
          >
            <span className="text-lg font-black text-foreground font-sans">Alberto Hermosillo</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center justify-center flex-1">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors font-sans"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors font-sans"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors font-sans"
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={isMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-flex"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden border-t border-border mt-4 pt-4"
            >
              <div className="flex flex-col space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/projects", label: "Projects" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.25, delay: 0.05 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link
                      href={item.href}
                      className="block text-sm font-medium text-foreground hover:text-primary transition-colors font-sans py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.25, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center space-x-4 pt-3 border-t border-border"
                >
                  <LanguageToggle />
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
