export function BrandsStrip() {
  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <div className="grid gap-4 rounded-[2rem] border border-border/60 bg-card/50 backdrop-blur-md px-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground grid-cols-2 md:grid-cols-4 text-center items-center justify-center shadow-soft">
          <div className="flex flex-col items-center justify-center p-2 border-r border-border/40 last:border-r-0 max-md:[&:nth-child(2n)]:border-r-0">
            <span className="font-semibold text-brand-brass">Studio-Grade</span>
            <span className="mt-1 text-[10px] text-muted-foreground/75 normal-case font-sans">Reformers</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border-r border-border/40 last:border-r-0 max-md:[&:nth-child(2n)]:border-r-0">
            <span className="font-semibold text-brand-brass">Commercial</span>
            <span className="mt-1 text-[10px] text-muted-foreground/75 normal-case font-sans">Wellness Supply</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border-r border-border/40 last:border-r-0 max-md:border-t max-md:border-border/40">
            <span className="font-semibold text-brand-brass">Luxury Ready</span>
            <span className="mt-1 text-[10px] text-muted-foreground/75 normal-case font-sans">Hospitality</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 last:border-r-0 max-md:border-t max-md:border-border/40 max-md:border-r-0">
            <span className="font-semibold text-brand-brass">Origin</span>
            <span className="mt-1 text-[10px] text-muted-foreground/75 normal-case font-sans">Rishikesh, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}