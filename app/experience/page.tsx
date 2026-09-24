import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { formatMonthYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      <div className="mt-8 space-y-10">
        {experience.map((entry) => (
          <div
            key={`${entry.company}-${entry.startDate}`}
            className="border-l-2 border-neutral-200 pl-6 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h2 className="text-lg font-medium">{entry.title}</h2>
              <span className="text-sm text-neutral-500">
                {formatMonthYear(entry.startDate)} –{" "}
                {formatMonthYear(entry.endDate)}
              </span>
            </div>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {entry.company}
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              {entry.summary}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
