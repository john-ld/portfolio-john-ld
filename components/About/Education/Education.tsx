import React from "react";
import EducationItem from "./EducationItem";

const EDUCATION = [
  {
    title: "Intégrateur Web",
    school: "OpenClassrooms",
    date: "2024",
    skills: ["HTML", "CSS", "Sass", "JavaScript", "React", "Redux", "Git"],
    logo: "oc.png",
  },
  {
    title: "SSIAP 2",
    school: "Options Sécurité",
    date: "2015",
    skills: ["Chef d'équipe", "Sécurité Incendie", "SST", "Zone Atex"],
    logo: "os.png",
  },
];

export default function Education() {
  return (
    <div className="flex gap-12 flex-wrap">
      {EDUCATION.map((education, index) => (
        <EducationItem key={index} {...education} />
      ))}
    </div>
  );
}
