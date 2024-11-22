import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, School } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EducationItemProps {
  title: string;
  school: string;
  date: string;
  skills: string[];
  logo: string;
}

export default function EducationItem(props: EducationItemProps) {
  return (
    <Card className="mb-8 flex-1 bg-background">
      <CardHeader className="flex gap-6 flex-row items-start">
        <div>
          <Image
            src={`/${props.logo}`}
            alt={"Profile picture"}
            priority
            width={100}
            height={100}
            className="rounded-lg object-cover bg-foreground"
          />
        </div>
        <CardTitle className="text-2xl mb-8 flex flex-col gap-4">
          <span className="leading-none">{props.title}</span>
          <span className="text-sm font-thin leading-none flex gap-1 items-center text-accent-foreground/90">
            <School size={14} /> {props.school}
          </span>
          <span className="text-xs font-thin leading-none flex gap-1 items-center text-accent-foreground/90">
            <Calendar size={14} /> {props.date}
          </span>
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex gap-2 flex-wrap">
        {props.skills?.map((skill, index) => (
          <Badge variant={"outline"} key={index} className="rounded-full">
            {skill}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
