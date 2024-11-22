import React from "react";
import Bio from "./Bio";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import { Section } from "../layout/Section";
import SectionTitle from "../layout/SectionTitle";
import SubSectionTitle from "../layout/SubSectionTitle";

export default function About() {
  return (
    <Section>
      <SectionTitle title="À Propos" />
      <SubSectionTitle title="Bio" />
      <Bio />
      <SubSectionTitle title="Formations" />
      <Education />
      <SubSectionTitle title="Compétences" />
      <Skills />
    </Section>
  );
}
