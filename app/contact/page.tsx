import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-xl text-neutral-700 dark:text-neutral-300">
        The fastest way to reach me is by email. I&apos;m always open to
        talking about new opportunities.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-md bg-neutral-950 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          {siteConfig.email}
        </a>
        <a
          href={siteConfig.resumePath}
          download
          className="rounded-md border border-neutral-300 px-5 py-2.5 text-center text-sm font-medium transition-colors hover:border-neutral-950 dark:border-neutral-700 dark:hover:border-neutral-100"
        >
          Download résumé
        </a>
      </div>
      {siteConfig.phone && (
        <p className="mt-4 text-sm text-neutral-500">{siteConfig.phone}</p>
      )}
      {siteConfig.social.length > 0 && (
        <ul className="mt-8 flex gap-4">
          {siteConfig.social.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline underline-offset-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
