import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";

export default function Nav() {
  return (
    <nav className="flex gap-2">
      <Link href={"#home"}>
        <Button variant={"ghost"} className="hover:bg-primary/40">
          Accueil
        </Button>
      </Link>
      <Link href={"#about"}>
        <Button variant={"ghost"} className="hover:bg-primary/40">
          À Propos
        </Button>
      </Link>
      <Link href={"#projects"}>
        <Button variant={"ghost"} className="hover:bg-primary/40">
          Projets
        </Button>
      </Link>
      <Link href={"#contact"}>
        <Button variant={"ghost"} className="hover:bg-primary/40">
          Contact
        </Button>
      </Link>
      <ModeToggle />
    </nav>
  );
}
