import type { ResumeData } from "@/lib/types";
import { formatPeriod } from "@/lib/format";
import { roleToIcon } from "@/lib/role-icons";
import { Milestone } from "./Milestone";

export function Path({ resume }: { resume: ResumeData }) {
  const items: React.ReactNode[] = [];

  items.push(
    <Milestone
      key="about"
      title="About me"
      meta={resume.education[0] ? resume.education[0].school : undefined}
      iconName="Sparkles"
      side="right"
    >
      <p className="text-base md:text-lg leading-relaxed">{resume.summary}</p>
    </Milestone>,
  );

  resume.experience.forEach((exp, i) => {
    const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
    items.push(
      <Milestone
        key={`role-${i}`}
        title={exp.role}
        meta={`${exp.company} · ${formatPeriod(exp.start, exp.end)}`}
        iconName={roleToIcon(exp)}
        emphasis={exp.emphasis}
        side={side}
      >
        <ul className="space-y-2 text-base leading-relaxed list-disc list-outside ml-5 marker:text-primary/70">
          {exp.bullets.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
      </Milestone>,
    );
  });

  return (
    <section
      id="journey"
      className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-32"
    >
      <header className="text-center mb-20">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-primary mb-4">
          the journey
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight leading-tight">
          A path, with stops.
        </h2>
      </header>

      {/* Mobile spine (left side) */}
      <div
        className="md:hidden pointer-events-none absolute left-[34px] top-72 bottom-32 w-[2px] bg-gradient-to-b from-primary/40 via-foreground/15 to-primary/40"
        aria-hidden="true"
      />
      {/* Desktop spine (centered) */}
      <div
        className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 top-72 bottom-32 w-[2px] bg-gradient-to-b from-primary/40 via-foreground/15 to-primary/40 shadow-[0_0_24px_rgba(226,90,28,0.15)]"
        aria-hidden="true"
      />

      <div className="relative space-y-16 md:space-y-28">{items}</div>
    </section>
  );
}
