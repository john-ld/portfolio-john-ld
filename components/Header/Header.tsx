import React from "react";
import Title from "./Title";
import Nav from "./Nav";
import { Section } from "../layout/Section";

export default function Header() {
  return (
    <header className="sticky top-0 border-b bg-background/80 backdrop-blur z-40">
      <Section className="flex items-center justify-between p-2 max-sm:pt-2 max-sm:pb-2">
        <Title />
        <Nav />
      </Section>
    </header>
  );
}
