import type { ResumeData } from "@/lib/types";

export function Footer({ resume }: { resume: ResumeData }) {
  const links: { label: string; href: string }[] = [];

  if (resume.links.linkedin) {
    links.push({ label: "LinkedIn", href: resume.links.linkedin });
  }
  if (resume.links.github) {
    links.push({ label: "GitHub", href: resume.links.github });
  }
  if (resume.links.portfolio) {
    const url = resume.links.portfolio.startsWith("http")
      ? resume.links.portfolio
      : `https://${resume.links.portfolio}`;
    links.push({ label: "Portfolio", href: url });
  }
  if (resume.links.email) {
    links.push({ label: "Email", href: `mailto:${resume.links.email}` });
  }

  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-heading text-xl font-bold tracking-tight">{resume.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Thanks for scrolling all the way down. 💖
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
