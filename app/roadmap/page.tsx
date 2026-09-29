import type { Metadata } from "next";
import { RoadmapLoader } from "@/components/roadmap/RoadmapLoader";

export const metadata: Metadata = {
  title: "Career Roadmap",
  robots: { index: false, follow: false },
};

export default function RoadmapPage() {
  return <RoadmapLoader />;
}
