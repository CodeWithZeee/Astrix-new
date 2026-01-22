import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center text-white py-6 sm:py-8 mx-2 sm:mx-4 bg-transparent ">
      <p className="border border-white/20 text-xs sm:text-sm px-4 sm:px-8 py-1 rounded-full mb-4 sm:mb-6 md:mb-8">
        About us
      </p>


      {/* Main Text */}
      <div className="max-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold p-2 sm:p-3 md:p-4 leading-snug text-justify">
        <span className="">
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
        </span>
        <span className="">
          We craft cutting-edge AI solutions to make organizations more
          effective and competitive. 
        </span>
        <div className="pt-4">
          At Astrix, we bridge innovation and
          intelligence -{""} designing AI systems that help businesses operate
          smarter, faster, and at scale
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
