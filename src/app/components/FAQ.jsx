"use client";
import React, { useState, useRef } from "react";

const FAQAccordion = () => {
  const [activeTab, setActiveTab] = useState(0);

  const faqItems = [
    {
      id: 1,
      question: "What makes Astrix unique?",
      answer:
        "Our unmatched expertise and our tailored approach is what sets us apart. We prefer working with you, instead of for you. We dive into your business and cooperate with you to create actually impactful AI solutions that drive real results.",
    },
    {
      id: 2,
      question: "Is my company a good fit for Astrix?",
      answer:
        "We work with companies of all sizes across a wide variety of industries. Whether you're just beginning your AI journey or need advanced custom solutions, we're the ideal partner to help you succeed.",
    },
    {
      id: 3,
      question: "How does your subscription model work?",
      answer:
        "We understand that your business needs can vary from month to month. That's why we offer a flexible subscription model. Subscribe whenever you need AI-driven solutions, and cancel anytime you want. It's that simple!",
    },
    {
      id: 4,
      question: "How long does the development phase take?",
      answer:
        "The development timeline depends on the complexity of the solution. Simple workflow automations can be completed in 1-3 days, while chatbot and voice assistant development typically take 1-2 months.",
    },
    {
      id: 5,
      question: "Do you provide support after implementation?",
      answer: "Yes, we do! Our commitment doesn't end with implementation. We provide continuous monitoring and improvements to ensure your solutions perform optimally, and our support team is available 24/7 whenever you need assistance.",
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
          <h2 className="text-5xl text-center text-indigo-600">
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