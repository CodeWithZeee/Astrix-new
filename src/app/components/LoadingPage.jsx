"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LoadingPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading page after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes logoBlink {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.95);
          }
        }

        .logo-blink {
          animation: logoBlink 1.5s ease-in-out 0s infinite;
          animation-fill-mode: both;
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        .text-fade {
          animation: fadeInOut 2s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="flex flex-col items-center justify-center">
          {/* Logo with custom blinking fade effect */}
          <div className="logo-blink">
            <Image
              src="/Astrix_logo.png"
              alt="Astrix Digital Media Logo"
              width={200}
              height={60}
              className="h-16 w-auto sm:h-20 sm:w-auto"
              priority
            />
          </div>

          {/* Loading text with fade effect */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm text-fade">Loading...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
