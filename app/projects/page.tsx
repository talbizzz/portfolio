import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <div className="mt-8 space-y-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-100"
          >
            <h2 className="text-xl font-medium">{project.title}</h2>
            <p className="mt-1 text-sm text-neutral-500">{project.role}</p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              {project.summary}
            </p>
            {project.techStack.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
