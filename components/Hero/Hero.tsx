import React from "react";
import { Button } from "../ui/button";
import { Section } from "../layout/Section";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="flex justify-between items-center max-md:flex-col max-md:gap-6">
      <div className="flex gap-6 flex-col max-md:items-center">
        <div className="flex flex-col gap-2 max-md:items-center">
          <h1 className="text-7xl font-semibold text-primary max-md:text-6xl">
            Johnny
          </h1>
          <h2 className="text-4xl font-light text-white max-md:text-2xl">
            Développeur Front-End
          </h2>
        </div>
        <Link href="#contact">
          <Button className="max-w-fit">Contactez-moi</Button>
        </Link>
      </div>
      <div className="relative group aspect-square w-80 max-md:w-60">
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
