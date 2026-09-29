"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function VersionToggle() {
  const pathname = usePathname();
  const isRoadmap = pathname?.startsWith("/roadmap");

  return (
    <Link
      href={isRoadmap ? "/" : "/roadmap"}
      className="fixed bottom-4 right-4 z-30 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
    >
      {isRoadmap ? "← Classic version" : "Explore 3D roadmap →"}
    </Link>
  );
}
