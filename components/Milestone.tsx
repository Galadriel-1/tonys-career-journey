"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Code,
  Palette,
  Megaphone,
  TrendingUp,
  GraduationCap,
  Compass,
  LineChart,
  Stethoscope,
  Settings,
  Rocket,
  Search,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/role-icons";

const ICONS: Record<IconName, LucideIcon> = {
  PenTool,
  Code,
  Palette,
  Megaphone,
  TrendingUp,
  GraduationCap,
  Compass,
  LineChart,
  Stethoscope,
  Settings,
  Rocket,
  Search,
  Shield,
  Sparkles,
};

type Side = "left" | "right";
type Emphasis = "before" | "now";

interface MilestoneProps {
  title: string;
  meta?: string;
  iconName?: IconName;
  emphasis?: Emphasis;
  side?: Side;
  children?: React.ReactNode;
}

export function Milestone({
  title,
  meta,
  iconName = "Sparkles",
  emphasis,
  side = "right",
  children,
}: MilestoneProps) {
  const Icon = ICONS[iconName] ?? Sparkles;

  const initialRotate = side === "left" ? 2.5 : -2.5;

  const dotRing =
    emphasis === "now"
      ? "border-primary shadow-[0_0_24px_rgba(226,90,28,0.55)]"
      : emphasis === "before"
        ? "border-muted-foreground/40"
        : "border-foreground/60";

  const cardEmphasis =
    emphasis === "now"
      ? "ring-1 ring-primary/30 shadow-xl shadow-primary/15 bg-card"
      : emphasis === "before"
        ? "bg-card/60 opacity-90"
        : "bg-card";

  const titleColor = emphasis === "before" ? "text-foreground/75" : "text-foreground";

  const sideOnDesktop =
    side === "left"
      ? "md:col-start-1 md:col-end-2 md:pr-12 md:text-right md:items-end"
      : "md:col-start-3 md:col-end-4 md:pl-12";

  return (
    <div className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_56px_1fr] items-start gap-x-6 md:gap-x-0">
      {/* Center dot column (always rendered, sits on the spine) */}
      <div className="row-start-1 md:col-start-2 md:col-end-3 flex justify-center pt-6">
        <div
          className={`relative h-5 w-5 rounded-full border-2 bg-background transition-all ${dotRing}`}
          aria-hidden="true"
        >
          {emphasis === "now" && (
            <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse" />
          )}
        </div>
      </div>

      {/* Spacer for desktop alternation: keeps non-active column empty */}
      <div className={`hidden md:block ${side === "left" ? "md:col-start-3" : "md:col-start-1"}`} />

      <motion.div
        className={`row-start-1 col-start-2 md:row-start-1 ${sideOnDesktop}`}
        initial={{ opacity: 0, y: 60, rotate: initialRotate, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.5 }}
      >
        <article
          className={`relative rounded-2xl border border-border/70 p-6 md:p-8 backdrop-blur-sm transition-all ${cardEmphasis}`}
        >
          {emphasis && (
            <span
              className={`absolute -top-3 ${side === "left" && "md:right-6 md:left-auto"} left-6 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                emphasis === "now"
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/80 text-background"
              }`}
            >
              {emphasis === "now" ? "★ where I am now" : "before"}
            </span>
          )}

          <div
            className={`flex items-start gap-4 ${side === "left" ? "md:flex-row-reverse md:text-right" : ""}`}
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                emphasis === "now"
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-foreground/80"
              }`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className={`font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight ${titleColor}`}
              >
                {title}
              </h3>
              {meta && (
                <p className="mt-1 text-sm text-muted-foreground font-medium">{meta}</p>
              )}
            </div>
          </div>

          {children && (
            <div className={`mt-5 ${side === "left" ? "md:text-right" : ""} text-foreground/85`}>
              {children}
            </div>
          )}
        </article>
      </motion.div>
    </div>
  );
}
