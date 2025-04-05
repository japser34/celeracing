"use client";
import React from "react";
import Image from "next/image";
import { useScrollDirection } from "../app/hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`header ${scrollDirection === "down" ? "header--hidden" : "header--visible"}`}
    >
      <div className="flex items-center gap-2">
        <a href="/" className="cursor-pointer">
          <Image
            src="/logo-wide.png"
            alt="Celeracing Logo"
            width={160}
            height={50}
          />
        </a>
      </div>
      <nav>
        <a href="/" className="mr-4">
          Home
        </a>
        <a href="/about" className="mr-4">
          About
        </a>
        <a href="/contact" className="mr-4">
          Contact
        </a>
        <a href="/blog" className="mr-4">
          Blog
        </a>
        <a href="/sponsors" className="mr-4">
          Sponsors
        </a>
      </nav>
    </header>
  );
};

export default Header;
