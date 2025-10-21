"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/moving-border";

export default function MovingBorderDemo() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[bg-[#0a0a0a]] dark:bg-slate-900 text-white dark:text-white  dark:border-slate-800  hover:text-white hover:shadow-lg hover:scale-110  hover:shadow-slate-900/20 transition-all duration-300"
        onClick={handleClick}
      >
        Get Started !
      </Button>
    </div>
  );
}
