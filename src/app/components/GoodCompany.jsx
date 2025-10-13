"use client";

import Image from "next/image";

const logos = [
  { src: "/Trustee1.png", alt: "" },
  { src: "/Trustee2.png", alt: "" },
  { src: "/Trustee3.png", alt: "" },
  { src: "/Trustee4.png", alt: "" },
  { src: "/Trustee5.png", alt: "" },
  { src: "/Trustee6.png", alt: "" },
  { src: "/Trustee7.png", alt: "" },
];

export default function GoodCompany() {
  // Duplicate logos to make marquee seamless
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="relative w-full bg-[#0a0a0a]  py-16 flex flex-col items-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-indigo-600 text-center">
        Trusted By 
      </h2>

      <div className="relative w-1/2 sm:w-3/4 flex justify-center overflow-hidden group">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee */}
        <div className="flex animate-marquee gap-12 whitespace-nowrap group-hover:pause">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
