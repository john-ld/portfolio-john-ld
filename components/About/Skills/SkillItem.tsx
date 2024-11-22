import Image from "next/image";
import React from "react";

interface SkillItemProps {
  language: string;
  logo: string;
}

export default function SkillItem(props: SkillItemProps) {
  return (
    <div className="flex items-center flex-col gap-2">
      <Image
        src={`/icons/${props.logo}`}
        alt={props.language}
        className="h-20 w-20"
        width={24}
        height={24}
        priority
      />
      <span>{props.language}</span>
    </div>
  );
}
