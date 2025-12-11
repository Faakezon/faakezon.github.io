import Reveal from "../reveal";
import Title from "../title";
import Project from "./project";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Techquity",
      description: "Generell utveckling av plattformen",
      role: "Frontend / Backend",
      length: "1 år",
      workplace: "Avalon Innovation AB",
      url: "https://techquity.se/",
    },
    {
      title: "Skolon",
      description: "Projekt under en kort period",
      role: "Frontend / Backend Test (Unit)",
      length: "4 månader",
      workplace: "Avalon Innovation AB",
      url: "https://skolon.com/sv/var-plattform/",
    },
    {
      title: "Kubicom",
      description: "Generell utveckling av plattformen",
      role: "Frontend / Backend",
      length: "Av/På under 3 år",
      workplace: "Avalon Innovation AB",
      url: "https://kubicom.com/",
    },
    {
      title: "Furhoffs / Stala",
      description:
        "Uppdaterade befintligt projekt med ny funktionalitet och gav hela sidan en grafisk makeover",
      role: "Fullstack",
      length: "Förvaltning under tiden hos Avalon (5 år)",
      workplace: "Avalon Innovation AB",
      url: "https://konfigurator.furhoffs.se/",
    },
    {
      title: "Galio of Sweden",
      description:
        "Ny funktionalitet, dockeriserade projektet, hantering och uppdatering av backoffice funktioner",
      role: "Fullstack",
      length: "2 år",
      workplace: "Avalon Innovation AB",
      url: "https://galioofsweden.com/",
    },
    {
      title: "Dugga - Digital Assessments",
      description: "Generell utveckling av plattformens alla aspekter",
      role: "Fullstack",
      length: "3 år",
      workplace: "Dugga AB",
      url: "https://dugga.com/",
    },
  ];

  return (
    <section className="w-full mb-16">
      <Reveal>
        <Title title="Projekt" />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <Project {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;