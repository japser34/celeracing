import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <Image src="/logo-wide-mono.png" alt="Logo" width={500} height={100} />
      <div> Hoi </div>
    </footer>
  );
};

export default Footer;
