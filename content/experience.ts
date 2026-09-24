import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    company: "Physiofit Digital GmbH",
    title: "Software Engineer (Full Stack / Mobile)",
    startDate: "2024-02",
    endDate: "present",
    summary:
      "Core engineer in a 2-person team (CTO + self). Co-built, scaled, and managed an entire health-tech product ecosystem from 0 to 70k+ MAU (9k+ DAU) across 600+ practices.",
    highlights: [
      "Fully responsible for the end-to-end architecture and launch of a voice-based AI phone agent (AI Front Desk Assistant) that autonomously handles and resolves real-time patient inquiries.",
      "Devised an automated Python (MoviePy) video-generation pipeline, converting hours of manual editing into a 100% self-service asset creation tool driven by CSV metadata.",
      "Engineered a complete customer support infrastructure migration, replacing Intercom with a self-hosted Chatwoot deployment.",
      "Architected a webhook ecosystem connecting HubSpot, Chatwoot, WhatsApp, and Slack to automate lead confirmations, reminders, and team auto-assignments.",
      "Implemented the full frontend/backend stack for 2 therapist PWAs, a multi-practice owner dashboard, an embeddable patient web check-in widget, and a redesigned patient mobile app.",
      "Designed lazy-loading strategies for high-volume pages, eliminating critical production bottlenecks and significantly cutting load times.",
      "Managed high-pressure hotfixes, native iOS (Swift) / Android (Kotlin) build failures, and cloud architecture scaling under tight deadlines using Sentry and GCP Cloud Functions.",
    ],
  },
  {
    company: "GetFit",
    title: "Software Engineer",
    startDate: "2023-07",
    endDate: "2024-02",
    summary:
      "Contributed to a lean, 6-person startup team developing a core React Native mobile application (Part-Time / Working Student).",
    highlights: [
      "Collaborated directly with the CTO in rapid, iterative product cycles to ship user-facing features.",
      "Laid the structural foundation that carried into the subsequent pivot into Physiofit.",
    ],
  },
  {
    company: "NTT DATA (Client: BMW)",
    title: "Software Engineer (Frontend)",
    startDate: "2022-01",
    endDate: "2023-06",
    summary:
      "Developed internal management cockpit tools using Angular within a structured corporate enterprise environment (Part-Time / Working Student).",
    highlights: [
      "Coordinated across multiple stakeholder groups to deliver internal management cockpit tooling.",
      "Contributed to the UI/UX redesign of a critical internal incident-management system using React.",
    ],
  },
];
