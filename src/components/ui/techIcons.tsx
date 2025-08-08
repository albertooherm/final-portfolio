"use client";

import {
  Atom,
  FileCode2,
  Rocket,
  Wind,
  Layers3,
  FlaskConical,
  Flame,
  Cloud,
  Figma,
  Package,
  GitBranch,
  Smartphone,
  Braces,
  Cpu,
} from "lucide-react";
import { ReactNode } from "react";

export const getTechIcon = (name: string): ReactNode => {
  const key = name.toLowerCase();
  if (key.includes("react native")) return <Smartphone className="w-3.5 h-3.5" />;
  if (key.includes("react")) return <Atom className="w-3.5 h-3.5" />;
  if (key.includes("typescript")) return <FileCode2 className="w-3.5 h-3.5" />;
  if (key.includes("javascript")) return <Braces className="w-3.5 h-3.5" />;
  if (key.includes("next")) return <Rocket className="w-3.5 h-3.5" />;
  if (key.includes("tailwind")) return <Wind className="w-3.5 h-3.5" />;
  if (key.includes("redux")) return <Layers3 className="w-3.5 h-3.5" />;
  if (key.includes("zustand")) return <Cpu className="w-3.5 h-3.5" />;
  if (key.includes("jest")) return <FlaskConical className="w-3.5 h-3.5" />;
  if (key.includes("firebase")) return <Flame className="w-3.5 h-3.5" />;
  if (key.includes("bitrise")) return <Rocket className="w-3.5 h-3.5" />;
  if (key.includes("sonar")) return <Cloud className="w-3.5 h-3.5" />;
  if (key.includes("figma")) return <Figma className="w-3.5 h-3.5" />;
  if (key.includes("expo")) return <Package className="w-3.5 h-3.5" />;
  if (key.includes("git")) return <GitBranch className="w-3.5 h-3.5" />;
  return <FileCode2 className="w-3.5 h-3.5" />;
};
