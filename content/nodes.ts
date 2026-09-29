import type { RoadmapNode } from "@/lib/types";

// Milestone 2: one prototype node (Contact) to prove the mechanic end-to-end.
// Milestone 3 extends this to the full 5-location roadmap.
export const nodes: RoadmapNode[] = [
  {
    id: "contact",
    type: "contact",
    title: "Contact",
    position: [0, 0, -8],
    environment: "contact",
    contentRef: "contact",
  },
];
