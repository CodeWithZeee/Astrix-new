import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    // <div className="m-10 bg-orange-600 rounded-3xl h-16 flex items-center px-4 overflow-hidden ">
    <div className="m-10  bg-transparent backdrop-blur rounded-3xl h-16 flex items-center px-4 overflow-hidden fixed top-0 left-0 right-0 z-150">
      <Image
        src="/Astrix_logo.png"
        alt="Astrix Digital Media"
        width={70}
        height={50}
        className="h-12 w-auto object-contain"
      />
      <div className="mx-10 ml-auto flex items-center gap-4">
        <ul className="flex gap-14 space-x-4">
          <li className="relative group cursor-pointer">
            <span>Home</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-4/5 bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span>About</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-4/5 bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span>Services</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-4/5 bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span>Contact</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-4/5 bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
