import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-medium text-neutral-500">Hi, I&apos;m</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
        {siteConfig.tagline}
      </p>
      <p className="mt-6 max-w-2xl text-neutral-700 dark:text-neutral-300">
        Product-focused engineer with extensive experience building, scaling,
        and owning multi-platform health-tech products within nimble,
        fast-paced startup environments. Proven track record of architecting
        AI automation pipelines, leading mission-critical customer
        infrastructure migrations, and shipping high-traffic applications to
        over 70k monthly active users.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={siteConfig.resumePath}
          download
          className="rounded-md bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          Download résumé
        </a>
        <Link
          href="/projects"
          className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-neutral-950 dark:border-neutral-700 dark:hover:border-neutral-100"
        >
          View projects
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-neutral-950 dark:border-neutral-700 dark:hover:border-neutral-100"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
