"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold tracking-tight text-base md:text-lg text-foreground no-underline"
        >
          {name}
        </Link>
        <Link
          href="/builds"
          className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors no-underline"
        >
          My AI Builds <span aria-hidden>→</span>
        </Link>
      </div>
    </nav>
  );
}
