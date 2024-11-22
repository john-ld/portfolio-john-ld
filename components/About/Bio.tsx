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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis, nisi nec vehicula cursus, metus nulla egestas sem, id
            ultrices tortor purus in enim. Curabitur magna risus, vehicula eu
            risus nec, consequat pharetra ipsum. Donec fermentum sapien id
            congue maximus. Nunc dolor elit, ultrices eget libero id, ultricies
            volutpat velit. Vestibulum euismod condimentum sodales. Etiam mauris
            lacus, dapibus a libero id, accumsan fermentum nulla. Nullam sed
            lorem consequat, pulvinar tortor nec, tempor justo. Phasellus tortor
            augue, molestie non euismod id, vehicula ut tortor. Donec congue
            lobortis iaculis.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <CardDescription></CardDescription>
      </CardFooter>
    </Card>
  );
}
