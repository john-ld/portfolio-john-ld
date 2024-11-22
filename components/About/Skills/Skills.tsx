import React from "react";
import SkillItem from "./SkillItem";

const SKILLS = [
  {
    language: "HTML",
    logo: "html.svg",
  },
  {
    language: "CSS",
    logo: "css.svg",
  },
  {
    language: "Sass",
    logo: "sass.svg",
  },
  {
    language: "JavaScript",
    logo: "javascript.svg",
  },
  {
    language: "TypeScript",
    logo: "typescript.svg",
  },
  {
    language: "React",
    logo: "react.svg",
  },
  {
    language: "Redux",
    logo: "redux.svg",
  },
  {
    language: "Next.js",
    logo: "next.svg",
  },
  {
    language: "Tailwind CSS",
    logo: "tailwind.svg",
  },
];

export default function Skills() {
  return (
    <div className="flex gap-8 flex-wrap items-center justify-center">
      {SKILLS.map((skill) => (
        <SkillItem key={skill.language} {...skill} />
      ))}
    </div>
  );
}
