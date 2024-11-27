import React from "react";
import { Section } from "../layout/Section";
import SectionTitle from "../layout/SectionTitle";
import ProjectItem from "./ProjectItem";

const PROJECTS = [
  {
    title: "Portfolio",
    image: "portfolio.png",
    description:
      "Mon portfolio personnel, réalisé avec Next.js et Tailwind CSS.",
    github: "https://github.com/john-ld/portfolio-john-ld.git",
  },
  {
    title: "Nina Carducci",
    image: "ninacarducci.webp",
    description:
      "Site vitrine pour une photographe, dont j'ai revu l'optimisation et le SEO.",
    github: "https://github.com/john-ld/Nina-Carducci.git",
  },
  {
    title: "Kasa",
    image: "kasa.webp",
    description:
      "Site de réservation de logements, réalisé dans le cadre d'un projet d'étude, en React.",
    github: "https://github.com/john-ld/Kasa-p7.git",
  },
  {
    title: "Argent Bank",
    image: "argentbank.webp",
    description:
      "Site de gestion de compte bancaire, réalisé dans le cadre d'un projet d'étude, avec React et Redux.",
    github: "https://github.com/john-ld/ArgentBank.git",
  },
  {
    title: "Sophie Bluel",
    image: "sophiebluel.webp",
    description:
      "Site vitrine pour une décoratrice d'intérieur, réalisé avec JavaScript",
    github: "https://github.com/john-ld/Sophie-Bluel-projet6-.git",
  },
  {
    title: "724events",
    image: "724.webp",
    description:
      "Site d'une agence événementielle, que j'ai débug, optimisé et amélioré le SEO.",
    github: "https://github.com/john-ld/724-Events-projet-9.git",
  },
];

export default function Projects() {
  return (
    <Section>
      <SectionTitle title="Projets" />
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </Section>
  );
}
