import React from "react";
import Image from "next/image";
import Link from "next/link";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: 10,
      image: "https://res.cloudinary.com/williamsondesign/abstract-1.jpg",
      features: [
        { text: "Get started with", highlight: "messaging" },
        { text: "Flexible", highlight: "team meetings" },
        { text: "", highlight: "5 TB", suffix: " cloud storage" },
      ],
      order: "order-2 lg:order-1 lg:rounded-r-none",
    },
    {
      name: "Startup",
      price: 24,
      image: "https://res.cloudinary.com/williamsondesign/abstract-2.jpg",
      featured: true,
      features: [
        { text: "All features in", highlight: "Basic" },
        { text: "Flexible", highlight: "call scheduling" },
        { text: "", highlight: "15 TB", suffix: " cloud storage" },
      ],
      order: "order-1 lg:order-2 lg:mt-0",
    },
    {
      name: "Enterprise",
      price: 35,
      image: "https://res.cloudinary.com/williamsondesign/abstract-3.jpg",
      features: [
        { text: "All features in", highlight: "Startup" },
        { text: "Growth", highlight: "oriented" },
        { text: "", highlight: "Unlimited", suffix: " cloud storage" },
      ],
      order: "order-3 lg:order-3 lg:rounded-l-none",
    },
  ];

  return (
    <div
      id="PricingPlans"
      className="min-h-screen bg-[#0a0a0a] font-['Comfortaa',sans-serif]"
    >
      <header className="max-w-6xl mx-auto py-8 px-5 flex justify-between lg:px-8">
        {/* Uncomment if needed */}
        {/* <Link href="/" className="text-2xl text-gray-900 font-semibold">
          price<span className="text-indigo-600">ly</span>
        </Link> */}
      </header>

      <main className="max-w-6xl mx-auto pt-10 pb-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            <span className="text-indigo-600">Flexible</span> Plans
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 font-medium">
            Choose a plan that works best for you and your team.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start gap-6 lg:gap-0">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`w-full border flex-1 ${
                plan.featured ? "p-6 sm:p-8" : "mt-8 p-6 sm:p-8"
              } ${plan.order} ${
                plan.featured ? "text-gray-400" : "text-white"
              } shadow-xl rounded-3xl sm:w-96 lg:w-full`}
            >
              <div
                className={`${
                  plan.featured ? "mb-8 pb-8" : "mb-7 pb-7"
                } flex items-center ${
                  !plan.featured && "border-b border-gray-300"
                }`}
              >
                <img
                  src={plan.image}
                  alt={`${plan.name} plan`}
                  className="rounded-3xl w-16 h-16 sm:w-20 sm:h-20"
                />
                <div className="ml-3 sm:ml-5">
                  <span
                    className={`block ${
                      plan.featured
                        ? "text-2xl sm:text-3xl text-white"
                        : "text-xl sm:text-2xl"
                    } font-semibold`}
                  >
                    {plan.name}
                  </span>
                  <span>
                    <span
                      className={`font-medium ${
                        plan.featured
                          ? "text-lg sm:text-xl"
                          : "text-gray-500 text-lg sm:text-xl"
                      } align-top`}
                    >
                      $&thinsp;
                    </span>
                    <span
                      className={`text-2xl sm:text-3xl font-bold ${
                        plan.featured && "text-white"
                      }`}
                    >
                      {plan.price}{" "}
                    </span>
                  </span>
                  <span
                    className={`${
                      plan.featured ? "" : "text-gray-500"
                    } font-medium text-sm sm:text-base`}
                  >
                    / user
                  </span>
                </div>
              </div>

              <ul
                className={`${
                  plan.featured
                    ? "mb-10 text-lg sm:text-xl"
                    : "mb-7 text-base sm:text-lg"
                } font-medium ${plan.featured ? "" : "text-gray-500"}`}
              >
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex ${
                      plan.featured
                        ? "mb-6"
                        : idx < plan.features.length - 1
                        ? "mb-2"
                        : ""
                    }`}
                  >
                    <img
                      src={
                        plan.featured
                          ? "https://res.cloudinary.com/williamsondesign/check-white.svg"
                          : "https://res.cloudinary.com/williamsondesign/check-grey.svg"
                      }
                      alt="check"
                    />
                    <span className="ml-3">
                      {feature.text}{" "}
                      <span
                        className={plan.featured ? "text-white" : "text-gray"}
                      >
                        {feature.highlight}
                      </span>
                      {feature.suffix}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`flex justify-center items-center bg-indigo-600 rounded-full ${
                  plan.featured
                    ? "py-4 sm:py-6 text-lg sm:text-2xl"
                    : "py-3 sm:py-5 text-base sm:text-xl"
                } px-4 text-center text-white`}
              >
                Choose Plan
                <img
                  className="bg-transparent ml-2"
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  alt="arrow"
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PricingPlans;
