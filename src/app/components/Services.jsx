"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section id="Services" className="relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-4 sm:m-8 lg:m-20 mt-10 text-center">
          Our <span className="text-indigo-600"> Services </span>
        </h2>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-[18rem] sm:h-96 sm:w-[24rem] lg:h-144 lg:w-xl rounded-full bg-linear-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl"></div>

        {/* First row - Responsive grid */}
        <div className="flex flex-col lg:flex-row justify-center w-full px-4 sm:px-6 lg:px-6">
          <div className="flex flex-col lg:flex-row w-full max-w-5xl items-stretch">
            <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                Chatbot Development
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-6">
                We develop advanced AI-driven chatbots that handle repetitive
                tasks, manage data, and streamline your internal workflows to
                drive real results for your business.
              </p>
              <div className="w-full max-w-xs">
                <DotLottieReact
                  src="https://lottie.host/a82cf600-1d23-426b-ad67-1105b231b41c/NTrzr2PKkw.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="hidden lg:block w-px bg-gray-300" />
            <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                Voice Assistants
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-6">
                We develop voice assistants that use advanced natural language
                processing (NLP) to handle inbound and outbound calls for
                support, scheduling, reminders, and promotions.
              </p>
              <div className="w-full max-w-xs">
                <DotLottieReact
                  src="https://lottie.host/1f9a21ac-6649-4833-ba23-9ff90787cd6d/7c015TjmUX.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second row - Responsive grid */}
        <div className="flex flex-col lg:flex-row justify-center w-full px-4 sm:px-6 lg:px-6 mt-6">
          <div className="flex flex-col lg:flex-row w-full max-w-5xl items-stretch">
            <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                Workflow Automations
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                Automate repetitive processes across tools and teams with
                robust, reliable workflows tailored to your operations.
              </p>
              <div className="w-full max-w-xs">
                <Image
                  src="/workflow2.png"
                  alt="Logo"
                  width={380}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="hidden lg:block w-px bg-gray-300" />
            <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center -mt-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                AI Consulting
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                Identify high-value AI opportunities, plan roadmaps, and ship
                solutions that deliver measurable impact.
              </p>
              <div className="w-full max-w-sm">
                <DotLottieReact
                  src="https://lottie.host/27641533-307a-41fb-a495-55e4f65b8cdb/aFEW0sH8wM.lottie"
                  loop
                  autoplay
                  style={{ width: "100%", height: "236px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
