import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    ref,
    isInView: isClient ? isInView : false,
    initial: { opacity: 0, y: 50 },
    animate:
      isClient && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };
};
