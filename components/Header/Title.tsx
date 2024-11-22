import Link from "next/link";
import React from "react";

export default function Title() {
  return (
    <Link href={"/"}>
      <span className="text-2xl text-primary font-semibold">Johnny</span>
    </Link>
  );
}
