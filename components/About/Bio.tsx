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
      <CardContent className="flex gap-6 justify-between">
        <div className="relative group flex flex-col gap-4 flex-2 min-w-96 items-center">
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
        <Separator orientation="vertical" className="h-auto mx-8" />
        <div className="flex-1">
          <CardTitle className="text-2xl mb-8">Qui suis-je ?</CardTitle>
          <p className="leading-relaxed text-accent-foreground/80">
            Passionné par le développement web et les technologies modernes, je
            suis un développeur front-end créatif et rigoureux. Après une
            formation solide en intégration web, j’ai acquis des compétences
            variées en HTML, CSS (SASS),JavaScript, et React. Mon objectif ?
            Transformer des idées en expériences numériques captivantes,
            accessibles et optimisées. Toujours curieux, j’aime relever des
            défis techniques et apprendre de nouvelles pratiques pour rester à
            la pointe des tendances. Mon portfolio reflète mon engagement à
            concevoir des interfaces dynamiques et responsives, adaptées aux
            besoins des utilisateurs. Quand je ne code pas, vous pouvez me
            trouver en train d’explorer des outils innovants ou d’échanger avec
            d’autres passionnés du web. Ensemble, construisons le web de demain
            !
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <CardDescription></CardDescription>
      </CardFooter>
    </Card>
  );
}
