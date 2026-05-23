import type { Experience } from "./types";

export type IconName =
  | "PenTool"
  | "Code"
  | "Palette"
  | "Megaphone"
  | "TrendingUp"
  | "GraduationCap"
  | "Compass"
  | "LineChart"
  | "Stethoscope"
  | "Settings"
  | "Rocket"
  | "Search"
  | "Shield"
  | "Sparkles";

export function roleToIcon(role: Pick<Experience, "role" | "company">): IconName {
  const text = `${role.role} ${role.company}`.toLowerCase();
  if (
    text.includes("lawn") ||
    text.includes("self-employed") ||
    text.includes("founder") ||
    text.includes("startup")
  )
    return "Rocket";
  if (text.includes("blog") || text.includes("writer") || text.includes("content"))
    return "PenTool";
  if (
    text.includes("unix") ||
    text.includes("admin") ||
    text.includes("engineer") ||
    text.includes("developer") ||
    text.includes("programming") ||
    text.includes("software")
  )
    return "Code";
  if (text.includes("design")) return "Palette";
  if (text.includes("marketing")) return "Megaphone";
  if (text.includes("sales")) return "TrendingUp";
  if (text.includes("teach") || text.includes("education") || text.includes("instructor"))
    return "GraduationCap";
  if (text.includes("product") || text.includes("manager")) return "Compass";
  if (text.includes("finance") || text.includes("treasurer") || text.includes("account"))
    return "LineChart";
  if (text.includes("health") || text.includes("medical") || text.includes("clinical"))
    return "Stethoscope";
  if (text.includes("risk") || text.includes("operations") || text.includes("compliance"))
    return "Shield";
  if (text.includes("research")) return "Search";
  return "Sparkles";
}
