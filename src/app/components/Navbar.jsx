"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Privacy",
      href: "/privacy",
    },
    {
      name: "Terms",
      href: "/terms",
    },
    // {
    //   name: "Pricing",
    //   href: "/#PricingPlans",
    // },
    // {
    //   name: "FAQ",
    //   href: "/#FAQ",
    // },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="mx-4 sm:mx-6 lg:mx-10 my-5 bg-transparent backdrop-blur rounded-3xl h-16 flex items-center px-4 overflow-hidden fixed top-0 left-0 right-0 z-50">
        <Link href="/">
          <Image
            src="/Astrix_logo.png"
            alt="Astrix Digital Media"
            width={70}
            height={50}
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex mx-10 ml-auto items-center gap-4">
          <ul className="flex gap-8 space-x-4">
            {NavbarLinks.map((link) => (
              <li className="relative group cursor-pointer" key={link.name}>
                <Link href={link.href}>
                  <span className="text-sm lg:text-base">{link.name}</span>
                  <span className="underline-style"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden ml-auto p-2 rounded-lg hover:bg-white/10 transition-all duration-300 mobile-menu-button"
          aria-label="Toggle menu"
          type="button"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`h-6 w-6 text-white transition-all duration-300 absolute ${
                isMenuOpen
                  ? "opacity-0 rotate-180 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`h-6 w-6 text-white transition-all duration-300 absolute ${
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-180 scale-0"
              }`}
            />
          </div>
          {/* Fallback text if icons don't load */}
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {NavbarLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
