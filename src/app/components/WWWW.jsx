import { FocusCards } from "@/components/ui/focus-cards";

export function WhoWeWorkWith() {
  const cards = [
    {
      title: "SERVICE-BASED BUSINESSES",
      src: "/Service.jpg",
    },
    {
      title: "B2B COMPANIES",
      src: "B2B.jpg",
    },
    {
      title: "PRODUCT-BASED BUSINESSES",
      src: "/Product.jpg",
    },
    {
      title: "LEAD DRIVEN BUSINESSES",
      src: "/Lead.jpg",
    },
    {
      title: "AUTOMATION-READY TEAMS",
      src: "/AutomationReady.jpg",
    },
    {
      title: "SCALING TEAMS USING AI",
      src: "/ScalingAI2.jpg",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center my-10">
        <h1 className="text-white/70 border border-white/20 text-xs sm:text-sm px-4 sm:px-8 py-1 rounded-full mb-4 sm:mb-6 md:mb-8">
          WHO WE WORK WITH
        </h1>
      </div>
      <FocusCards cards={cards} />
    </>
  );
}
