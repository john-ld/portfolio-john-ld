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
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

interface ProjectItemProps {
  title: string;
  image: string;
  description: string;
  github: string;
}

export default function ProjectItem({
  title,
  image,
  description,
  github,
}: ProjectItemProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="relative group flex-1 min-h-40">
        <Image
          src={`/${image}`}
          alt="Project Image"
          fill
          priority
          sizes="400"
          className="h-full object-cover w-full"
        />
      </CardHeader>
      <CardContent className="p-4 flex-1">
        <CardTitle className="mb-4 text-2xl text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={github} target="_blank">
          <Button variant={"outline"}>
            Voir sur GitHub <MoveUpRight size={14} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
