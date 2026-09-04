import React from "react";
import { motion } from "motion/react";

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up",
  viewportMargin = "-10%"
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  direction?: "up" | "down" | "left" | "right" | "none",
  viewportMargin?: string
}) {
  
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 };
      case "down": return { opacity: 0, y: -40 };
      case "left": return { opacity: 0, x: 40 };
      case "right": return { opacity: 0, x: -40 };
      case "none": return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "up":
      case "down": return { opacity: 1, y: 0 };
      case "left":
      case "right": return { opacity: 1, x: 0 };
      case "none": return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: viewportMargin as any }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
