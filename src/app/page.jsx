import Image from "next/image";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import PricingPlans from "./components/PricingPlans";
import FAQAccordion from "./components/FAQ";
import Footer05Page from "../components/footer-05/footer-05";
import StackedCardsFAQ from "../app/components/StackedCardsFAQ";
import GoodCompany from "./components/GoodCompany";
import AboutUs from "./components/AboutUs";
import RevealAnimation from "./components/RevealAnimation";
import Calendly from "./components/Calendly";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl max-w-screen"></div>
      <Hero />

      <RevealAnimation delay={0.1}>
        <AboutUs />
      </RevealAnimation>

       <RevealAnimation delay={0.2}>
        <GoodCompany />
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <Services />
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <Industries />
      </RevealAnimation>

      <Calendly />

      <RevealAnimation delay={0.2}>
        <PricingPlans />
      </RevealAnimation>

      <Calendly />

      {/* <RevealAnimation delay={0.1}>
         <div className="pointer-events-none absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-bl from-orange-400/40 via-orange-500/30 to-transparent blur-3xl max-w-screen"></div>
      </RevealAnimation> */}

      <FAQAccordion />
      {/* <StackedCardsFAQ /> */}
      
      <Footer05Page />
    </>
  );
}
