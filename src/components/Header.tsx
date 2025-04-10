"use client";
import React from "react";
import Image from "next/image";
import { useScrollDirection } from "../app/hooks/useScrollDirection";
import Link from "next/link";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo-wide.png"
            alt="Celeracing Logo"
            width={160}
            height={50}
          />
        </Link>
      </div>
      <nav>
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/about" className="mr-4">
          About
        </Link>
        <Link href="/contact" className="mr-4">
          Contact
        </Link>
        <Link href="/blog" className="mr-4">
          Blog
        </Link>
        <Link href="/sponsors" className="mr-4">
          Sponsors
        </Link>
      </nav>
    </header>
  );
};

export default Header;
