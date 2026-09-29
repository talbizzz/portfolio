"use client";

import dynamic from "next/dynamic";

const RoadmapExperience = dynamic(
  () =>
    import("@/components/roadmap/RoadmapExperience").then(
      (mod) => mod.RoadmapExperience,
    ),
  { ssr: false },
);

export function RoadmapLoader() {
  return <RoadmapExperience />;
}
