import type { SkillCategory } from "@/lib/types";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Swift", "Java"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "React Native", "Angular", "Vite", "Next.js"],
  },
  {
    category: "Backend & Cloud",
    items: [
      "Node.js",
      "Firebase",
      "Supabase",
      "PostgreSQL",
      "GCP Cloud",
      "Cloudflare",
      "TypeSense",
      "BigQuery",
    ],
  },
  {
    category: "State Management",
    items: ["Redux", "Zustand", "React Context"],
  },
  {
    category: "Operations Tools",
    items: ["Chatwoot", "Intercom", "HubSpot", "SuperChat", "Slack automations"],
  },
  {
    category: "Observability & Monitoring",
    items: ["Sentry", "PostHog", "Intercom"],
  },
  {
    category: "Other",
    items: [
      "Serverless architectures",
      "Native iOS/Android modules",
      "AI-assisted development",
      "Blender automation",
    ],
  },
];
