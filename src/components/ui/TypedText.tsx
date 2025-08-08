"use client";

import { useEffect, useState } from "react";

interface TypedTextProps {
  phrases: string[];
  typingSpeed?: number; // ms per character
  deletingSpeed?: number; // ms per character
  pauseTime?: number; // ms pause at end of a phrase
  className?: string;
}

const TypedText = ({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 35,
  pauseTime = 1200,
  className = "",
}: TypedTextProps) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length] || "";

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex(prev => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    // Reset when phrases array changes
    setIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [phrases]);

  return <span className={className}>{displayText}</span>;
};

export default TypedText;
