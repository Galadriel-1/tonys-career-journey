import Link from "next/link";
import projects from "@/data/projects.json";
import type { Project } from "@/lib/types";
import resume from "@/data/resume.json";

const data = projects as Project[];
const name = (resume as { name: string }).name;

export const metadata = {
  title: `My AI Builds · ${name}`,
  description: "A growing list of what I've made and what I've used.",
};

export default function BuildsPage() {
  const sorted = [...data].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );

  return (
    <main className="flex-1 bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-primary no-underline transition-colors"
        >
          ← back to my journey
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mt-10">
          My AI Builds
        </h1>
        <p className="mt-2 italic text-muted-foreground">
          A growing list of what I&apos;ve made and what I&apos;ve used.
        </p>

        {sorted.length === 0 ? (
          <p className="mt-12 text-muted-foreground">Nothing here yet.</p>
        ) : (
          <div className="mt-12 space-y-10">
            {sorted.map((p, i) => (
              <div key={p.id}>
                {i > 0 && <hr className="border-border/60 mb-10" />}
                <article>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                    {p.title}
                  </h2>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-primary hover:underline no-underline"
                  >
                    {p.url}
                  </a>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm italic text-muted-foreground">
                    Tools I used: {p.toolsUsed.join(", ")}
                  </p>
                </article>
              </div>
            ))}
          </div>
        )}

        <div className="mt-20">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary no-underline transition-colors"
          >
            ← back to my journey
          </Link>
        </div>
      </div>
    </main>
  );
}
