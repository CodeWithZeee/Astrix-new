import React from "react";

const Services = () => {
  return (
    <>
      <section className="relative">
        {/* <div className="relative flex flex-col justify-start items-start  w-full"> */}
        <h2 className="text-6xl montserrat font-bold z-10 m-20 mt-10">
          Our Services
        </h2>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl"></div>
        <div className="flex justify-center w-full px-6">
          <div className="flex w-full max-w-5xl items-stretch">
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-semibold">Chatbot Development</h3>
              <p className="text-gray-500">We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.</p>
            </div>
            <div className="w-px bg-gray-300" />
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-semibold">Voice Assistants</h3>
              <p className="text-gray-500">We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Services;
