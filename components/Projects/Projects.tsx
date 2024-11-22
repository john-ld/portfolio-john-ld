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
    github: "#",
  },
  {
    title: "Nina Carducci",
    image: "ninacarducci.webp",
    description:
      "Site vitrine pour une photographe, dont j'ai revu l'optimisation et le SEO.",
    github: "#",
  },
  {
    title: "Kasa",
    image: "kasa.webp",
    description:
      "Site de réservation de logements, réalisé dans le cadre d'un projet d'étude, en React.",
    github: "#",
  },
  {
    title: "Argent Bank",
    image: "argentbank.webp",
    description:
      "Site de gestion de compte bancaire, réalisé dans le cadre d'un projet d'étude, avec React et Redux.",
    github: "#",
  },
  {
    title: "Sophie Bluel",
    image: "sophiebluel.webp",
    description:
      "Site vitrine pour une décoratrice d'intérieur, réalisé avec JavaScript",
    github: "#",
  },
  {
    title: "724events",
    image: "724.webp",
    description:
      "Site d'une agence événementielle, que j'ai débug, optimisé et amélioré le SEO.",
    github: "#",
  },
];

export default function Projects() {
  return (
    <Section>
      <SectionTitle title="Projets" />
      <div className="grid grid-cols-3 gap-4">
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
