import Services from "./components/OurCoreServices";
import Hero from "./components/Hero";
// import WhoWeWorkWith from "./components/WWWW";
import FAQAccordion from "./components/FAQ";
import Footer05Page from "./components/footer-05/footer-05";
import GoodCompany from "./components/GoodCompany";
import AboutUs from "./components/OurPhilosophy";
import RevealAnimation from "./components/RevealAnimation";
import ProblemsWeSolve from "./components/ProblemsWeSolve";
import HowWeWork from "./components/HowWeWork";
import { WhoWeWorkWith } from "./components/WWWW";
import WhyAstrix from "./components/WhyAstrix";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-144 w-xl rounded-full bg-linear-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl max-w-screen"></div>
      <Hero />

      <RevealAnimation delay={0.1}>
        <AboutUs />
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <ProblemsWeSolve />
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <HowWeWork />
      </RevealAnimation>

      <RevealAnimation delay={0.2}>
        <GoodCompany />
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <Services />
      </RevealAnimation>

      <RevealAnimation delay={0.2}>
        <WhoWeWorkWith />
      </RevealAnimation>

      {/* <RevealAnimation delay={0.1}>
         <div className="pointer-events-none absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-bl from-orange-400/40 via-orange-500/30 to-transparent blur-3xl max-w-screen"></div>
      </RevealAnimation> */}

      <WhyAstrix />

      <FAQAccordion />

      <Footer05Page />
    </>
  );
}
