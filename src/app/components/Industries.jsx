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
    }
  ]

  return (
      <div className="montserrat flex flex-col items-center justify-center ">
        <div className="section-with-light"></div>
      <h2 className="text-7xl  mt-4">Industries we work with</h2>
      <p className="text-gray-500  mt-4 max-w-xl text-center">
        Hear the success stories of the businesses we’ve helped thrive with AI.
        We work with a variety of different industries.
      </p>
      <GlassSocialIcons />
      <div className="flex">
        <LuminousCard {...cardInfo[0]} />
        <LuminousCard {...cardInfo[1]} />
        <LuminousCard {...cardInfo[2]} />
      </div>
    </div>
  );
};

export default Industries;
