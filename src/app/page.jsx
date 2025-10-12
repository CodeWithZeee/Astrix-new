import Image from "next/image";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import PricingPlans from "./components/PricingPlans";
import FAQAccordion from "./components/FAQ";
import Footer05Page from "../components/footer-05/footer-05";
import StackedCardsFAQ from "../app/components/StackedCardsFAQ";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl max-w-screen"></div>
      <Hero />
      <div className=" flex justify-center items-center text-xl font-bold  mb-10">
       <p className="border-2 p-4 rounded-full">About us</p>
      </div>
      <Services />
      <Industries />
      <PricingPlans />
      <FAQAccordion />
      {/* <StackedCardsFAQ /> */}
      <Footer05Page />
    </>
  );
}
