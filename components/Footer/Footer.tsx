import React from "react";
import Title from "../Header/Title";
import { Section } from "../layout/Section";

export default function Footer() {
  return (
    <footer className="py-16">
      <Section className="flex justify-between max-sm:flex-col max-sm:gap-4 max-sm:items-center max-sm:justify-center">
        <Title />
        <span>Johnny Le Dref &copy; 2025</span>
      </Section>
    </footer>
  );
}
