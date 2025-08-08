"use client";

import { ReactNode } from "react";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
}

const TechBadge = ({ icon, label }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-xs font-medium text-[#222223]/80 dark:text-white/80">
      <span className="inline-flex items-center justify-center w-4 h-4 opacity-80">
        {icon}
      </span>
      {label}
    </span>
  );
};

export default TechBadge;
