"use client";

import Reveal from "../reveal";
import Title from "../title";
import Project from "./project";
import { useTranslations } from "next-intl";

const ProjectsSection = () => {
  const t = useTranslations("Projects");

  const projects = [
    "Techquity",
    "Skolon",
    "Kubicom",
    "FurhoffsStala",
    "GalioOfSweden",
    "Dugga",
  ].map((key) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    role: t(`${key}.role`),
    length: t(`${key}.length`),
    workplace: t(`${key}.workplace`),
    url: t(`${key}.url`),
  }));

  return (
    <section className="w-full mb-16">
      <Reveal>
        <Title title={t("sectionTitle")} />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.07}>
            <Project
              title={project.title}
              description={project.description}
              role={project.role && `${t("rolePrefix")}: ${project.role}`}
              workplace={
                project.workplace &&
                `${t("workplacePrefix")}: ${project.workplace}`
              }
              length={
                project.length && `${t("lengthPrefix")}: ${project.length}`
              }
              url={project.url}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
