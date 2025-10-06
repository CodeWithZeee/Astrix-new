import Image from "next/image";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Industries from "./components/Industries";



export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl"></div>
      <Hero />
      <Services />
      <Industries />
    </>
  );
}
