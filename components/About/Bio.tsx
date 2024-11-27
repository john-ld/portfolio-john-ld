import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Bio() {
  return (
    <Card className="mb-8 bg-background">
      <CardHeader></CardHeader>
      <CardContent className="flex gap-6 justify-between max-md:flex-col">
        <div className="relative group flex flex-col gap-4 flex-2 min-w-96 items-center max-md:min-w-[100%]">
          <Image
            src={`/profile.webp`}
            alt={"Profile picture"}
            priority
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
          <h3 className="text-3xl text-primary font-semibold">
            Johnny Le Dref
          </h3>
          <span className="text-md">Développeur Front-End</span>
        </div>
        <Separator
          orientation="vertical"
          className="h-auto mx-8 max-md:hidden"
        />
        <div className="flex-1">
          <CardTitle className="text-2xl mb-8">Qui suis-je ?</CardTitle>
          <p className="leading-relaxed text-accent-foreground/80">
            Développeur front-end passionné, je conçois des interfaces modernes,
            dynamiques et accessibles. Spécialisé en HTML, CSS (SASS),
            JavaScript et React, je transforme des idées en expériences
            utilisateur optimisées. Curieux et créatif, je suis toujours prêt à
            relever de nouveaux défis techniques pour façonner le web de demain.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <CardDescription></CardDescription>
      </CardFooter>
    </Card>
  );
}
