import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center text-white py-8 mx-4 bg-transparent ">
      {/* Small Label */}
      <p className="border border-white/20 text-sm px-8 py-1 rounded-full mb-8">
        About us
      </p>

      {/* Main Text */}
      <div className="max-w-3xl text-4xl font-semibold leading-snug text-justify">
        <span className="">
          Hi, we're{" "}
          <span className="inline-flex items-center">
            Astrix
            <Image
              src="/Astrix_logo.png"
              alt="Astrix Logo"
              width={42}
              height={32}
              className="mx-2 inline-block"
            />
          </span>
        </span>
        <span className="">
          We craft cutting-edge AI solutions to make organizations more
          effective and competitive. At Astrix, we bridge innovation and
          intelligence -{""} designing AI systems that help businesses operate
          smarter, faster, and at scale.
        </span>
      </div>
    </section>
  );
};

export default AboutUs;
