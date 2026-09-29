import type { ComponentType } from "react";
import { ContactEnvironment } from "@/components/roadmap/environments/ContactEnvironment";
import { EducationEnvironment } from "@/components/roadmap/environments/EducationEnvironment";
import { ProjectOneEnvironment } from "@/components/roadmap/environments/ProjectOneEnvironment";
import { ProjectTwoEnvironment } from "@/components/roadmap/environments/ProjectTwoEnvironment";
import { CurrentRoleEnvironment } from "@/components/roadmap/environments/CurrentRoleEnvironment";

export const ENVIRONMENTS: Record<
  string,
  ComponentType<{ position: [number, number, number] }>
> = {
  contact: ContactEnvironment,
  education: EducationEnvironment,
  "project-one": ProjectOneEnvironment,
  "project-two": ProjectTwoEnvironment,
  "current-role": CurrentRoleEnvironment,
};
