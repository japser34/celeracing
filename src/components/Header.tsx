import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="flex items-center gap-2">
        <Image
          src="/logo-wide.png"
          alt="Celeracing Logo"
          width={160}
          height={80}
        />
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
