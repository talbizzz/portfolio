import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, ${siteConfig.tagline}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <div className="mt-6 space-y-4 text-neutral-700 dark:text-neutral-300">
        <p>
          I&apos;m {siteConfig.name}, a {siteConfig.tagline.toLowerCase()}{" "}
          based in Munich, Germany.
        </p>
        <p>
          Product-focused engineer with extensive experience building,
          scaling, and owning multi-platform health-tech products within
          nimble, fast-paced startup environments. Proven track record of
          architecting AI automation pipelines, leading mission-critical
          customer infrastructure migrations, and shipping high-traffic
          applications to over 70k monthly active users. I care about
          bridging the gap between technical execution and business value —
          whether that means designing a system architecture, writing the
          code myself, or making the judgment call on what&apos;s actually
          worth building.
        </p>
        <p>
          Currently a core engineer at Physiofit Digital, where — as one of
          two engineers alongside the CTO — I&apos;ve helped take a
          health-tech product ecosystem from 0 to over 70,000 monthly active
          users across 600+ practices, spanning AI automation, infrastructure,
          and full-stack product engineering across web and mobile.
        </p>
      </div>
    </div>
  );
}
