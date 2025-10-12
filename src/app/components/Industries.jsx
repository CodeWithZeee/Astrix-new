import React from "react";
import GlassSocialIcons from "./GlassSocialIcons";
import LuminousCard from "./LuminousCard";
const Industries = () => {
  const cardInfo = [
    {
      title: "Chatbots",
      description:
        "We develop AI-powered customer support chatbots that provide instant helpful support, recommend products, and handle returns.",
      imageUrl: "/chatbots.jpg",
    },
    {
      title: "Voice assistants ",
      description:
        "We develop advanced voice-based AI assistants that seamlessly handle inbound customer calls and provide personalised support, 24/7.",
      imageUrl: "/voice_assistants.jpg",
    },
    {
      title: "Automations",
      description:
        "We automate inventory tracking, order management, and customer notifications to improve operational efficiency and reduce human error.",
      imageUrl: "/automations.jpg",
    },
  ];

  return (
    <div
      id="Industries"
      className="montserrat flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="section-with-light"></div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 text-center">
        Industries we work with
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl text-center px-4">
        Hear the success stories of the businesses we've helped thrive with AI.
        We work with a variety of different industries.
      </p>
      <GlassSocialIcons />
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-8">
        <LuminousCard {...cardInfo[0]} />
        <LuminousCard {...cardInfo[1]} />
        <LuminousCard {...cardInfo[2]} />
      </div>
    </div>
  );
};

export default Industries;
