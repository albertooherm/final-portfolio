"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import TypedText from "@/components/ui/TypedText";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const Hero = () => {
  const controls = useAnimation();
  const { t } = useLanguage();

  const phrases = (t("hero.typewriter") as string[]) || [];

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  const social = (t("data.socialLinks") as unknown as { name: string; url: string; icon: string }[]) || [];
  const cvUrl = (t("about.profile.cvUrl") as string) || "/cv.pdf";

  return (
    <section className="py-24 sm:py-32 lg:py-40 font-sans bg-white dark:bg-[#222223]">
      <div className="container">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Picture */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto">
              {/* Profile Picture Placeholder */}
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                {/* Placeholder for actual profile image */}
                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-sans">Profile Photo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-[#222223] dark:text-white font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <TypedText phrases={phrases} className="inline-block" />
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#222223]/70 dark:text-white/70 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto font-sans font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.6 }}
          >
            <div className="flex justify-center space-x-6 sm:space-x-8">
              {social.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[#222223]/70 dark:text-white/70 hover:text-[#222223] dark:hover:text-white transition-colors group"
                >
                  {link.icon === "github" && (
                    <Github className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                  )}
                  {link.icon === "linkedin" && (
                    <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                  )}
                  {link.icon === "mail" && (
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA Link */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ delay: 0.7 }}>
            <a
              href={cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#222223]/70 dark:text-white/70 hover:text-[#222223] dark:hover:text-white transition-colors group font-sans underline underline-offset-4"
            >
              {t("about.profile.cvLink")}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
