"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className="relative montserrat">
        {/* <div className="relative flex flex-col justify-start items-start  w-full"> */}
        <h2 className="text-6xl montserrat m-20 mt-10">
          Our Services
        </h2>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl"></div>
        <div className="flex justify-center w-full px-6">
          <div className="flex w-full max-w-5xl items-stretch">
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-semibold">Chatbot Development</h3>
              <p className="text-gray-500">
                We develop advanced AI-driven chatbots that handle repetitive
                tasks, manage data, and streamline your internal workflows to
                drive real results for your business.
              </p>
              <DotLottieReact
                src="https://lottie.host/a82cf600-1d23-426b-ad67-1105b231b41c/NTrzr2PKkw.lottie"
                loop
                autoplay
              />
            </div>
            <div className="w-px bg-gray-300" />
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-semibold">Voice Assistants</h3>
              <p className="text-gray-500">
                We develop voice assistants that use advanced natural language
                processing (NLP) to handle inbound and outbound calls for
                support, scheduling, reminders, and promotions.
              </p>
              <DotLottieReact
                src="https://lottie.host/1f9a21ac-6649-4833-ba23-9ff90787cd6d/7c015TjmUX.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="flex justify-center w-full px-6 mt-6">
          <div className="flex w-full max-w-5xl items-stretch">
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-semibold">Workflow Automations</h3>
              <p className="text-gray-500">
                Automate repetitive processes across tools and teams with
                robust, reliable workflows tailored to your operations.
              </p>
              <Image src="/workflow.png" alt="Logo" width={380} height={80} />
            </div>
            <div className="w-px bg-gray-300" />
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-semibold">AI Consulting</h3>
              <p className="text-gray-500">
                Identify high-value AI opportunities, plan roadmaps, and ship
                solutions that deliver measurable impact.
              </p>
              <DotLottieReact
                src="https://lottie.host/27641533-307a-41fb-a495-55e4f65b8cdb/aFEW0sH8wM.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Services;
