"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth out the movement for the outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor hidden lg:block"
        style={{
          translateX: "-50%",
          translateY: "-50%",
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="cursor-ring hidden lg:block"
        style={{
          translateX: "-50%",
          translateY: "-50%",
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
}
