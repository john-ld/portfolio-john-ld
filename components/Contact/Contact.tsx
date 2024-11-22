import React from "react";
import Links from "./Links";
import { Section } from "../layout/Section";
import SectionTitle from "../layout/SectionTitle";
import { Mails, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <Section>
      <SectionTitle title="Contact" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <span className="flex gap-2">
            <Mails />
            <Link
              href={"mailto:jledref@gmail.com"}
              className="text-foreground hover:text-primary"
            >
              jledref@gmail.com
            </Link>
          </span>
          <span className="flex gap-2">
            <Phone />
            +33 7 82 12 84 31
          </span>
        </div>
        <Links />
      </div>
    </Section>
  );
}
