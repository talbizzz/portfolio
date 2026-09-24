import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "car-ordering-mvp",
    title: "Immersive Car-Ordering MVP",
    summary:
      "Led a 5-developer team building an immersive car-ordering MVP prototype in a joint TUM × Mercedes × Salesforce program.",
    description:
      "As Frontend Team Lead on a joint TUM × Mercedes × Salesforce program, owned the frontend architecture for an immersive car-ordering MVP prototype. Managed agile sprint planning, conducted code reviews, and delivered the final presentation to major corporate stakeholders.",
    role: "Frontend Team Lead",
    techStack: ["React", "TypeScript"],
    featured: true,
  },
  {
    slug: "ar-3d-room-builder",
    title: "3D Room Builder — AR Indoor Navigation",
    summary:
      "Owned end-to-end development of a 3D Room Builder module inside an AR-based indoor navigation and localization application.",
    description:
      "As iOS Developer Intern at TUM, owned the end-to-end development of a 3D Room Builder module inside an AR-based indoor navigation and localization app. Integrated 2D/3D spatial modeling features and delivered an MVP presented to key industry partners.",
    role: "iOS Developer (Swift)",
    techStack: ["Swift", "ARKit"],
    featured: true,
  },
];
