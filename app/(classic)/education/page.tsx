import type { Metadata } from "next";
import { education } from "@/content/education";
import { formatMonthYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Education",
  description: "Education background.",
};

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Education</h1>
      <div className="mt-8 space-y-10">
        {education.map((entry) => (
          <div
            key={entry.institution}
            className="border-l-2 border-neutral-200 pl-6 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h2 className="text-lg font-medium">
                {entry.degree} {entry.field}
              </h2>
              {entry.startDate && entry.endDate && (
                <span className="text-sm text-neutral-500">
                  {formatMonthYear(entry.startDate)} –{" "}
                  {formatMonthYear(entry.endDate)}
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {entry.institution}
            </p>
            {entry.notes && (
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                {entry.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
