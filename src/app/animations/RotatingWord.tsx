"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Audiowide } from "next/font/google";
import { useEffect, useState } from "react";

const words = ["AI", "AUTOMATION", "SMARTER SYSTEMS"];

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

type RotatingWordProps = {
  className?: string;
};

export default function RotatingWord({ className }: RotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200); // timing similar to Shadcn Studio

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-gray-500 relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`${audiowide.className}${className ? ` ${className}` : ""}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
