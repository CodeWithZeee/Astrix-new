import React from "react";
import Starfall from "./Starfall";
import SuperButton from "./SuperButton";
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
          fontFamily: "'Comfortaa', sans-serif",
          fontWeight: "500",
        }}
        className="px-4 sm:px-6 lg:px-8"
      >
        {/* <Starfall /> */}
        {/* Top-right orangish gradient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem] lg:h-[36rem] lg:w-[36rem] rounded-full bg-gradient-to-bl from-orange-400/40 via-orange-500/30 to-transparent blur-3xl"></div>
        {/* Your content here */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex justify-center items-center max-w-4xl  leading-tight">
          We elevate your business using Artificial Intelligence.
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl flex justify-center items-center  px-4">
          We elevate and grow organizations using top-tier Artificial
          Intelligence solutions.
        </h2>
        {/* Bottom-left blueish gradient glow */}
        <SuperButton />
        {/* <div className="pointer-events-none absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl"></div> */}
      </div>
    </>
  );
};

export default Hero;
