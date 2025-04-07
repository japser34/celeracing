import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div className="w-full md:w-1/4 mb-4 md:mb-0">
    <strong className="font-extrabold">{title}</strong>
    <div className="mt-1">{children}</div>
  </div>
);

const Footer: React.FC = () => {
  const contactItems = [
    {
      label: "Email",
      link: "mailto:info@celeracing.com",
      value: "info@celeracing.com",
    },
    {
      label: "Phone",
      link: "tel:+31 06 12345678",
      value: "+31 06 12345678",
    },
    {
      label: "Address",
      link: "https://maps.app.goo.gl/MbBFzaGrDXjZUBsh6",
      value: "Zoom 37, 8032 EM Zwolle",
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/CeleRacing.nl/" },
    { name: "Instagram", href: "https://www.instagram.com/celeracing_/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/celeracing/" },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCQq47LuGEcou1BDqX1c7ywQ",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center">
          <Image
            src="/logo-wide-mono.png"
            alt="Logo"
            width={500}
            height={200}
          />
        </div>

        {/* Contact Information */}
        <FooterSection title="Contact Us">
          {contactItems.map((item, index) => (
            <p key={index}>
              <strong>{item.label}:</strong>{" "}
              <Link href={item.link} className="hover:underline">
                {item.value}
              </Link>
            </p>
          ))}
        </FooterSection>

        {/* Social Media Links */}
        <FooterSection title="Follow Us">
          {socialLinks.map((social, index) => (
            <p key={index}>
              <Link href={social.href} className="hover:underline">
                {social.name}
              </Link>
            </p>
          ))}
        </FooterSection>

        {/* Navigation Links */}
        <FooterSection title="Navigation">
          {navLinks.map((nav, index) => (
            <p key={index}>
              <Link href={nav.href} className="hover:underline">
                {nav.name}
              </Link>
            </p>
          ))}
        </FooterSection>
      </div>
    </footer>
  );
};

export default Footer;
