import { FocusCards } from "@/components/ui/focus-cards";

export function WhoWeWorkWith() {
  const cards = [
    {
      title: "Service-Based Businesses",
      src: "/Servicebased.png",
    },
    {
      title: "B2B Companies",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product-Based Businesses",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lead Driven Businesses",
      src: "/Lead_Driven_Business.png",
    },
    {
      title: "Automation-ready teams",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Scaling teams using AI",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
