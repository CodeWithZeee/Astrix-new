'use client';
import React from "react";
import Starfall from "./Starfall";
import SuperButton from "./SuperButton";
import AnimatedButton from "./AnimatedButton";
// import AnimatedButton from "./calender_button";
// import Button from "../components/ui/moving-border";

const Hero = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          //  backgroundImage: 'url("bgimg.jpg")',
          backgroundSize: "100%",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          // width: "50%",
          textAlign: "center",
          // fontFamily: "Glock Grotesk", 
          fontWeight: "500",
        }}
        className="px-4 sm:px-6 lg:px-8"
      >
        {/* <Starfall /> */}
        {/* Top-right orangish gradient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-[18rem] sm:h-56 sm:w-[24rem] lg:h-144 lg:w-xl rounded-full bg-linear-to-bl from-orange-400/40 via-orange-500/30 to-transparent blur-3xl"></div>
        {/* Your content here */}
        <h1 className="gradienttxt comfortaa text-xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center items-center max-w-4xl leading-tight">
          We elevate your business using Artificial Intelligence.
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl flex justify-center items-center px-4">
          We elevate and grow organizations using top-tier Artificial
          Intelligence solutions.
        </h2>
        {/* <SuperButton /> */}
        <AnimatedButton />
        
      </div>
    </>
  );
};

export default Hero;
