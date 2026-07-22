"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        delay: 2.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
      fixed
      inset-0
      z-999
      bg-black
      flex
      flex-col
      items-center
      justify-center
      "
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="
text-white/40
text-[10px]
sm:text-xs
tracking-[0.35em]
uppercase
text-center
px-6
"
      >
        Initializing Digital Experience
      </motion.p>

      <motion.h1
        initial={{
          opacity: 0,
          y: 50,
          scale: 1.2,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
        className="
    text-white
    font-serif
    uppercase
    tracking-tight
    text-center
    px-8
    text-[clamp(2.8rem,14vw,9rem)]
  "
      >
        ZURRI LABS
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "300px" }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="
h-px
bg-white/40
mt-8
w-32
sm:w-72
"
      />
    </motion.div>
  );
}
