import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-50"
      >
        ← All projects
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-1 text-sm text-neutral-500">{project.role}</p>
      <p className="mt-6 text-neutral-700 dark:text-neutral-300">
        {project.description}
      </p>
      {project.techStack.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2">
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
      {project.links && project.links.length > 0 && (
        <div className="mt-6 flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
