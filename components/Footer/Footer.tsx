import React from "react";
import Title from "../Header/Title";
import { Section } from "../layout/Section";

export default function Footer() {
  return (
    <footer className="py-16">
      <Section className="flex justify-between">
        <Title />
        <span>Johnny Le Dref &copy; 2024</span>
      </Section>
    </footer>
  );
}
