import React from "react";
import { Scale , PiggyBank ,Cross } from 'lucide-react';

const GlassSocialIcons = () => {
  return (
    <div className="w-full relative">
      {/* Background overlay */}
      <div className="absolute top-1/2 right-0 bottom-0 left-0 -z-10" />

      {/* Social Icons Container */}
      <div className="flex flex-wrap items-center justify-center gap-5 p-5">
        <GlassIcon href="#" icon="facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-2h14v-2H7l-1.1-6h16.2v-2H5.42l-.94-5H1v2h2l3.6 18h12v-2H7.24l-.24-2z" />
          </svg>
          <p>E-commerce</p>
        </GlassIcon>

        <GlassIcon href="#" icon="instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M200-120v-440l280-210 280 210v440H560v-240H400v240H200Z" />
          </svg>
          <p>Real-estate</p>
        </GlassIcon>

        <GlassIcon href="#" icon="gavel">
          <Scale />
      </GlassIcon>

        <GlassIcon href="#" icon="whatsapp">
          <PiggyBank />
        </GlassIcon>
        <GlassIcon href="#" icon="whatsapp">
          <Cross />
        </GlassIcon>
      </div>
    </div>
  );
};

const GlassIcon = ({ href, icon, children }) => {
  return (
    <a
      href={href}
      className="group relative w-[100px] h-[150px] flex items-center justify-center text-white rounded-md bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10 shadow-[0_20px_30px_rgba(0,0,0,0.1)] no-underline overflow-hidden transition-all duration-200 hover:-translate-y-5"
    >
      {/* Shine effect */}
      <div className="absolute w-1/2 h-full bg-white/50 blur-0 transition-all duration-400 translate-x-[150%] skew-x-45 group-hover:-translate-x-[150%]" />

      {/* Icon */}
      <div className="opacity-80 relative z-10">{children}</div>
    </a>
  );
};

export default GlassSocialIcons;
