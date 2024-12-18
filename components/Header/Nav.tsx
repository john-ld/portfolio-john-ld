"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";
import { MenuIcon, X } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <nav className="flex gap-2 max-sm:hidden">
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
      <div className="flex gap-2 sm:hidden">
        <button onClick={toggleMenu} className="p-0">
          {!menuOpen ? (
            <MenuIcon className="size-8" />
          ) : (
            <X className="size-8" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-18 left-0 right-0 bg-background z-40 sm:hidden flex flex-col p-5 border-t border-b border-accent-foreground/30 items-end">
          <Link href={"#home"}>
            <Button variant={"ghost"} onClick={handleCloseMenu}>
              Accueil
            </Button>
          </Link>
          <Link href={"#about"}>
            <Button variant={"ghost"} onClick={handleCloseMenu}>
              À Propos
            </Button>
          </Link>
          <Link href={"#projects"}>
            <Button variant={"ghost"} onClick={handleCloseMenu}>
              Projets
            </Button>
          </Link>
          <Link href={"#contact"}>
            <Button variant={"ghost"} onClick={handleCloseMenu}>
              Contact
            </Button>
          </Link>
          <div className="w-full justify-end flex mr-4 mt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
