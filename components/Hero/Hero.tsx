import React from "react";
import { Button } from "../ui/button";
import { Section } from "../layout/Section";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="flex justify-between items-center">
      <div className="flex gap-6 flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-semibold text-primary">Johnny</h1>
          <h2 className="text-4xl font-light text-white">
            Développeur Front-End
          </h2>
        </div>
        <Link href="#contact">
          <Button className="max-w-fit">Contactez-moi</Button>
        </Link>
      </div>
      <div className="relative group aspect-square w-80">
        <Image
          src={`/profile.webp`}
          alt={"Profile picture"}
          priority
          fill
          className="rounded-full"
          sizes={"500"}
        />
      </div>
    </Section>
  );
}
