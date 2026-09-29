"use client";

import type { RoadmapNode } from "@/lib/types";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { siteConfig } from "@/content/site-config";
import { formatMonthYear } from "@/lib/utils";

export function NodeOverlay({
  node,
  onClose,
}: {
  node: RoadmapNode;
  onClose: () => void;
}) {
  return (
    <div className="pointer-events-auto fixed inset-x-4 top-4 z-20 mx-auto max-w-md rounded-lg border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 sm:inset-x-auto sm:right-6 sm:top-6">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50"
      >
        ✕
      </button>
      {renderContent(node)}
    </div>
  );
}

function renderContent(node: RoadmapNode) {
  switch (node.type) {
    case "contact":
      return (
        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 block font-medium underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
          {siteConfig.phone && (
            <p className="mt-1 text-sm text-neutral-500">{siteConfig.phone}</p>
          )}
          <a
            href={siteConfig.resumePath}
            download
            className="mt-3 inline-block rounded-md bg-neutral-950 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-950"
          >
            Download résumé
          </a>
          {siteConfig.social.length > 0 && (
            <ul className="mt-3 flex gap-3">
              {siteConfig.social.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline underline-offset-4"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "project": {
      const project = projects.find((p) => p.slug === node.contentRef);
      if (!project) return <p>Project not found.</p>;
      return (
        <div>
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <p className="text-sm text-neutral-500">{project.role}</p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            {project.description}
          </p>
          {project.techStack.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs dark:bg-neutral-800"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    case "experience": {
      const entry = experience.find((e) => e.company === node.contentRef);
      if (!entry) return <p>Experience entry not found.</p>;
      return (
        <div>
          <h2 className="text-lg font-semibold">{entry.title}</h2>
          <p className="text-sm text-neutral-500">
            {entry.company} · {formatMonthYear(entry.startDate)} –{" "}
            {formatMonthYear(entry.endDate)}
          </p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            {entry.summary}
          </p>
        </div>
      );
    }

    case "education": {
      const entry =
        education.find((e) => e.institution === node.contentRef) ??
        education[0];
      if (!entry) return <p>Education entry not found.</p>;
      return (
        <div>
          <h2 className="text-lg font-semibold">
            {entry.degree} {entry.field}
          </h2>
          <p className="text-sm text-neutral-500">{entry.institution}</p>
          {entry.notes && (
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {entry.notes}
            </p>
          )}
        </div>
      );
    }
  }
}
