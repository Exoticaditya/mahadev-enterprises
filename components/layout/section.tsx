import { cn } from "@/lib/utils";

export function Section({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn("py-20 md:py-28", className)}>{children}</section>;
}