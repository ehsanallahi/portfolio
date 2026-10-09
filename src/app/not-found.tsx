import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ctaVariants } from "@/components/shared/cta";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-4 pt-24 text-center">
      <div>
        <p className="text-gradient font-mono text-7xl font-bold sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">This page doesn&apos;t exist</h1>
        <p className="mt-3 text-muted-foreground">The link may be broken, or the page may have moved.</p>
        <Link href="/" className={`${ctaVariants({ variant: "primary", size: "lg" })} mt-8`}>
          <ArrowLeft className="group-hover/cta:-translate-x-1" aria-hidden="true" />
          Back home
        </Link>
      </div>
    </section>
  );
}
