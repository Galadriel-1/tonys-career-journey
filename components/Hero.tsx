import type { ResumeData } from "@/lib/types";

export function Hero({ resume }: { resume: ResumeData }) {
  const eyebrow = resume.headline.split("·")[0]?.trim() ?? resume.headline;

  let ctaHref: string;
  let ctaLabel: string;
  if (resume.links.linkedin) {
    ctaHref = resume.links.linkedin;
    ctaLabel = "Connect on LinkedIn";
  } else if (resume.links.portfolio) {
    ctaHref = resume.links.portfolio.startsWith("http")
      ? resume.links.portfolio
      : `https://${resume.links.portfolio}`;
    ctaLabel = "Visit my portfolio";
  } else if (resume.links.email) {
    ctaHref = `mailto:${resume.links.email}`;
    ctaLabel = "Get in touch";
  } else {
    ctaHref = "#journey";
    ctaLabel = "See my journey";
  }

  const ctaIsExternal = ctaHref.startsWith("http");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-peach/40" />
      <div className="absolute top-32 -right-32 w-[640px] h-[640px] rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-peach/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 py-32">
        <p className="font-heading text-xs md:text-sm font-bold uppercase tracking-[0.28em] text-primary mb-8">
          {eyebrow}
        </p>

        <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.92] text-foreground">
          {resume.name}
        </h1>

        <p className="mt-10 max-w-3xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
          {resume.summary}
        </p>

        <a
          href={ctaHref}
          target={ctaIsExternal ? "_blank" : undefined}
          rel={ctaIsExternal ? "noopener noreferrer" : undefined}
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all no-underline"
        >
          {ctaLabel} <span aria-hidden>→</span>
        </a>

        <div className="mt-20 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-block w-12 h-px bg-foreground/30" />
          scroll for the journey
        </div>
      </div>
    </section>
  );
}
