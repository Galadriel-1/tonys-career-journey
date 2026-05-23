export function Skills({ skills }: { skills: string[] }) {
  return (
    <section className="relative w-full border-t border-border/60 bg-card/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight">
            Skills along the way
          </h2>
          <p className="text-sm md:text-base text-muted-foreground italic">
            the tools in my bag
          </p>
        </div>

        <ul className="flex flex-wrap justify-start gap-2 md:gap-3 w-full">
          {skills.map((s) => (
            <li key={s}>
              <button
                type="button"
                className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm md:text-base font-medium text-foreground/85 transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/30 active:scale-95 active:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
