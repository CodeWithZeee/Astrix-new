"use client";
import React, { useState, useRef } from "react";
import { Montserrat_Alternates } from "next/font/google";
const montserratAlternates = Montserrat_Alternates({ subsets: ["latin"], weight: "400" });

const FAQAccordion = () => {
  const [activeTab, setActiveTab] = useState(0);

  const faqItems = [
    {
      id: 1,
      question: "Are you a software company or an agency?",
      answer:
        "We're neither in the traditional sense. We work as a systems and implementation partner, combining web development, consulting, automation, and execution.",
    },
    {
      id: 2,
      question: "Do you only work with AI?",
      answer:
        "AI is one of the tools we use — not the starting point. If automation or marketing solves the problem better, we use that instead.",
    },
    {
      id: 3,
      question: "Do you guarantee results?",
      answer:
        "We don't guarantee revenue. We focus on designing and implementing systems that support growth and reduce inefficiency.",
    },
    {
      id: 4,
      question: "Can you work with our existing tools?",
      answer:
        "In most cases, yes. We prefer improving what already exists rather than forcing unnecessary replacements.",
    },
    {
      id: 5,
      question: "What's the best way to start?",
      answer: "Start with a conversation. Talk to Astrix (our AI receptionist) or reach out directly — we'll help you decide next steps.",
    },
    // {
    //   id: 6,
    //   question: "Can I purchase items again?",
    //   answer:
    //     "Absolutely! We're more than happy to update your previous order to include new items.",
    // },
  ];

  const AccordionItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <li className="bg-[#0d0d0d] my-2 shadow-lg hover:border-purple-700/40  rounded-2xl border border-purple-500 p-4">
        <h2
          onClick={toggleAccordion}
          className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
        >
          <span>{item.question}</span>
          <svg
            className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
          </svg>
        </h2>
        <div
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div className="border-l-2 border-purple-600 border-solid">
            <p className="p-3 text-white-900">{item.answer}</p>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div  className="leading-relaxed p-4">
      <div id="FAQ" className="flex justify-center items-start my-16">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className={`${montserratAlternates.className} text-5xl text-center text-purple-600`}>
            FAQ
          </h2>
          <p className="text-gray-500 mb-8 text-center">We've gone ahead and answered the questions we're asked most often.</p>
          <ul className="flex flex-col text-white">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;