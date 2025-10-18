"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLoading } from "./LoadingContext";

const RevealAnimation = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1,
  direction = "bottom", // "bottom", "top", "center"
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const { isLoadingComplete } = useLoading();

  // Define different initial positions based on direction
  const getInitialState = () => {
    switch (direction) {
      case "top":
        return { y: -60, opacity: 0 };
      case "center":
        return { scale: 0, opacity: 0 };
      case "bottom":
      default:
        return { y: 60, opacity: 0 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case "top":
        return isInView ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 };
      case "center":
        return isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 };
      case "bottom":
      default:
        return isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 };
    }
  };

  useEffect(() => {
    // Only start observing after loading is complete
    if (!isLoadingComplete) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, isLoadingComplete]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={getAnimateState()}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
