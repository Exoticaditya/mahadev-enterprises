import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-start justify-center gap-6 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="max-w-2xl text-balance text-5xl md:text-7xl">The page you’re looking for does not exist.</h1>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}