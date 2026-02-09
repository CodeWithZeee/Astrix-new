"use client";

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
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 800); // pause after typing
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span
      className={`relative inline-flex text-gray-400 ${audiowide.className}${
        className ? ` ${className}` : ""
      }`}
    >
      {text}

      {/* Cursor */}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
