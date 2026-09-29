import type { RoadmapNode } from "@/lib/types";

// Milestone 3: full 5-location roadmap. contentRef resolution convention
// (see components/roadmap/NodeOverlay.tsx):
//   - contact     -> siteConfig (contentRef unused)
//   - project     -> projects[].slug
//   - experience  -> experience[].company
//   - education   -> education[].institution
export const nodes: RoadmapNode[] = [
  {
    id: "education",
    type: "education",
    title: "Education",
    position: [-18, 0, -8],
    environment: "education",
    contentRef: "Technical University of Munich (TUM)",
  },
  {
    id: "car-ordering-mvp",
    type: "project",
    title: "Immersive Car-Ordering MVP",
    position: [-9, 0, -20],
    environment: "project-one",
    contentRef: "car-ordering-mvp",
  },
  {
    id: "ar-3d-room-builder",
    type: "project",
    title: "3D Room Builder — AR Indoor Navigation",
    position: [9, 0, -20],
    environment: "project-two",
    contentRef: "ar-3d-room-builder",
  },
  {
    id: "current-role",
    type: "experience",
    title: "Physiofit Digital",
    position: [18, 0, -8],
    environment: "current-role",
    contentRef: "Physiofit Digital GmbH",
  },
  {
    id: "contact",
    type: "contact",
    title: "Contact",
    position: [0, 0, 18],
    environment: "contact",
    contentRef: "contact",
  },
];
