import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const NavbarLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    // <div className="m-10 bg-orange-600 rounded-3xl h-16 flex items-center px-4 overflow-hidden ">
    <div className="mx-10 my-5  bg-transparent backdrop-blur rounded-3xl h-16 flex items-center px-4 overflow-hidden fixed top-0 left-0 right-0 z-150">
      <Image
        src="/Astrix_logo.png"
        alt="Astrix Digital Media"
        width={70}
        height={50}
        className="h-12 w-auto object-contain"
      />
      <div className="mx-10 ml-auto flex items-center gap-4">
        <ul className="flex gap-14 space-x-4">
          {NavbarLinks.map((link) => (
            <li className="relative group cursor-pointer" key={link.name}>
              <Link href={link.href}>
                <span>{link.name}</span>
                <span className="underline-style"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
