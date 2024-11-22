import React from "react";
import { GithubIcon } from "../icons/GithubIcon";
import Link from "next/link";

export default function Links() {
  return (
    <div className="flex gap-6">
      <Link
        href={"https://github.com/john-ld"}
        target="_blank"
        className="hover:text-primary"
      >
        <GithubIcon size={32} />
      </Link>
    </div>
  );
}
