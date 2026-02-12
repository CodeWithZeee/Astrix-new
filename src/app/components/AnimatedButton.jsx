"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/moving-border";
import Image from "next/image";

export default function MovingBorderDemo() {
  const router = useRouter();

 const handleClick = () => {
  window.location.href =
    "https://ai.automationastrix.com/widget/booking/ldUWZEMuCZLT7aJQx4xB";
};

  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="inline-flex items-center gap-2 px-4 bg-[bg-[#0a0a0a]] dark:bg-slate-900 text-white dark:text-white  dark:border-slate-800  hover:text-white hover:shadow-lg hover:scale-110  hover:shadow-slate-900/20 transition-all duration-300"
        onClick={handleClick}
      >
        <span className="max-w-fit">TALK TO</span>{" "}
        <Image
          src="/Astrix_logo.png"
          alt="ASTRIX"
          width={25}
          height={25}
          className="block -translate-y-px"
        />
      </Button>
    </div>
  );
}
