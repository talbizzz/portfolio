import type { Metadata } from "next";
import { skills } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
      <div className="mt-8 space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              {group.category}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
