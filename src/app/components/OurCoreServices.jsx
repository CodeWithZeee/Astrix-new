import { Righteous } from "next/font/google";
const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function OurCoreServices() {
  const services = [
    {
      title: "Smart Websites",
      description:
        "Conversion-focused websites designed as active systems — not static pages. Built to capture leads, route conversations, ability to send text and emails and connect directly to your sales and operations workflows.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "AI Voice Agents",
      description:
        "Used for call handling, after-hours response, appointment scheduling, and intelligent call routing — ensuring no inquiry goes unhandled.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
    },
    {
      title: "Workflow & Process Automation",
      description:
        "Designing and implementing automations across CRM, marketing, sales, and internal operations to reduce manual work and friction.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Performance Marketing",
      description:
        "When demand generation or scale is required, we support paid acquisition and funnel optimization — tied to real conversion systems, not vanity metrics.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "System Integration & Optimization",
      description:
        "Connecting tools, platforms and teams so marketing, sales and operations function as one cohesive system.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={" py-20 px-6 sm:px-8 lg:px-12"}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <p className= "text-white/70 border border-white/20 text-xs sm:text-sm px-4 sm:px-8 py-1 rounded-full mb-4 sm:mb-6 md:mb-8">
            OUR CORE SERVICES
          </p>
          <h1 className={`${righteous.className} text-white text-3xl max-w-2xl mx-auto leading-loose`}>
            BUILDING <span className="text-purple-500 underline">SYSTEMS</span> THAT WORK FOR YOU, NOT THE OTHER WAY AROUND
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl relative bg-zinc-900 border border-zinc-800  p-8 transition-all duration-300 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1"
            >
              {/* Subtle gradient accent */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-purple-400/5 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative mb-5 inline-flex items-center justify-center w-12 h-12 rounded-3xl bg-zinc-800 text-zinc-300 group-hover:text-white group-hover:bg-purple-600/40 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-purple-400 to-purple-300 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
