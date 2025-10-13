import React from "react";
import { Scale, PiggyBank, Cross, ShoppingCart, House , HandHeart  } from "lucide-react";

const GlassSocialIcons = () => {
  return (
    <div className="w-full relative">
      {/* Background overlay */}
      <div className="absolute top-1/2 right-0 bottom-0 left-0 -z-10" />

      {/* Social Icons Container */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 lg:p-5">
        <GlassIcon href="#" className="">
          <HandHeart />
          <span className="text-xs">Personal Help</span>
        </GlassIcon>

        <GlassIcon href="#" icon="instagram">
          <House />
          <span className="text-xs">Real Estate</span>

        </GlassIcon>

        <GlassIcon href="#" icon="gavel">
          <Scale />
          <span className="text-xs">Legal</span>
        </GlassIcon>

        <GlassIcon href="#" icon="whatsapp">
          <PiggyBank />
          <span className="text-xs">Finance</span>
        </GlassIcon>
        <GlassIcon href="#" icon="whatsapp">
          <Cross />
          <span className="text-xs">Healthcare</span>
        </GlassIcon>
      </div>
    </div>
  );
};

const GlassIcon = ({ href, icon, children }) => {
  return (
    <a
      href={href}
      className="group relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full flex items-center justify-center text-white bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10 shadow-[0_20px_30px_rgba(0,0,0,0.1)] no-underline overflow-hidden transition-all duration-200 hover:-translate-y-5"
    >
      {/* Shine effect */}
      <div className="absolute w-1/2 h-full bg-white/50 blur-0 transition-all duration-400 translate-x-[150%] skew-x-45 group-hover:-translate-x-[150%]" />

      {/* Icon */}
      <div className="opacity-80 relative z-10">{children}</div>
    </a>
  );
};

export default GlassSocialIcons;
