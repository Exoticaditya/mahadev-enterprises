export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="space-y-3 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-brand-brass border-t-transparent" />
        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Loading experience</p>
      </div>
    </div>
  );
}