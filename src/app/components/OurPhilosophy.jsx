"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

function HoverHighlightText({
  children,
  radius = 56,
  baseClass = "text-white/80",
  highlightClass = "text-white",
  className = "",
}) {
  const wrapperRef = useRef(null);
  const rafRef = useRef(0);
  const pos = useRef({ x: -1000, y: -1000 });
  const target = useRef({ x: -1000, y: -1000 });

  const update = () => {
    const dx = target.current.x - pos.current.x;
    const dy = target.current.y - pos.current.y;
    pos.current.x += dx * 0.2;
    pos.current.y += dy * 0.2;
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty("--x", `${pos.current.x}px`);
      wrapperRef.current.style.setProperty("--y", `${pos.current.y}px`);
    }
    if (Math.abs(dx) + Math.abs(dy) > 0.5) {
      rafRef.current = requestAnimationFrame(update);
    } else {
      rafRef.current = 0;
    }
  };

  const onMove = (e) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    target.current.x = e.clientX - rect.left;
    target.current.y = e.clientY - rect.top;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
  };

  const onLeave = () => {
    target.current.x = -1000;
    target.current.y = -1000;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
  };

  useEffect(
    () => () => rafRef.current && cancelAnimationFrame(rafRef.current),
    [],
  );

  const mask = `radial-gradient(${radius}px at var(--x, -1000px) var(--y, -1000px), #000 0%, #000 60%, transparent 80%)`;

  return (
    <span
      ref={wrapperRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative inline-block ${className}`}
      style={{
        // Hint browser this element updates frequently
        willChange: "transform",
      }}
    >
      <span className={`${baseClass} transition-colors duration-200`}>
        {children}
      </span>
      <span
        className={`absolute inset-0 pointer-events-none ${highlightClass}`}
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
          transition: "opacity 150ms ease-out",
        }}
        aria-hidden
      >
        {children}
      </span>
    </span>
  );
}

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-white py-6 sm:py-8 mx-2 sm:mx-4 bg-transparent ">
        <p className="text-white/70 border border-white/20 text-xs sm:text-sm px-4 sm:px-8 py-1 rounded-full mb-4 sm:mb-6 md:mb-8">
          OUR PHILOSOPHY
        </p>

        {/* Main Text */}
        <div className="max-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold p-2 sm:p-3 md:p-4 leading-snug text-justify">
          {/* <span className="">
          Hi, we're{" "}
          <span className="inline-flex items-center">
            Astrix
            <Image
              src="/Astrix_logo.png"
              alt="Astrix Logo"
              width={42}
              height={32}
              className="mx-1 sm:mx-2 inline-block w-6 h-auto sm:w-8 md:w-10 lg:w-10.5"
            />
          </span>
        </span> */}
          <HoverHighlightText
            baseClass="text-white/80"
            highlightClass="text-indigo-700"
            className="text-center"
          >
            <p> Most businesses don't need “more AI.”</p>
            <p>
              {" "}
              They need clarity on what's actually broken — and what systems
              will move the needle.
            </p>
           <p>  We start with a clear focus on the problems you are facing.</p>
          </HoverHighlightText>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
