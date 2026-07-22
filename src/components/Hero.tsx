"use client";

import { motion } from "framer-motion";
import Silk from "./Silk";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        w-full
        min-h-screen
        bg-black
        flex
        flex-col
        justify-end
        px-6
        sm:px-8
        lg:px-16
        pb-12
        sm:pb-16
        overflow-hidden
      "
    >
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <Silk
          speed={5}
          scale={1.1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Studio Label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="
    absolute
    top-20
    left-6
    sm:left-8
    lg:left-16
    z-20
    flex
    flex-col
    items-start
    gap-2
    pointer-events-none
  "
      >
        <span
          className="
      text-[9px]
      uppercase
      tracking-[0.4em]
      text-white/40
      font-light
    "
        >
          DIGITAL DESIGN STUDIO
        </span>

        <div className="w-10 h-px bg-white/20" />

        <span
          className="
      text-[8px]
      uppercase
      tracking-[0.35em]
      text-white/25
    "
        >
          BUENOS AIRES · ARGENTINA
        </span>
      </motion.div>

      <div className="relative z-10 flex flex-col justify-end w-full h-full">
        {/* Optional: Spinning Badge for the right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-24 md:top-1/4 right-8 lg:right-24 hidden md:flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center opacity-40"
          >
            {/* Simple circular text using SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full overflow-visible"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
              <text
                fontSize="9.5"
                fill="currentColor"
                className="uppercase tracking-widest font-bold"
              >
                <textPath href="#circlePath" startOffset="0%">
                  PREMIUM DIGITAL EXPERIENCES • ZURRI LABS •
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>

        {/* Main Brand */}
        <div className="w-full relative">
          <motion.h1
            translate="no"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 1 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                },
              },
            }}
            className="
  font-black
  uppercase
  text-white
  leading-[0.82]
  tracking-tighter
"
            style={{
              fontSize: "clamp(4rem, 15vw, 13rem)",
            }}
          >
            <span className="hidden sm:block overflow-hidden py-2">
              {["Z", "U", "R", "R", "I", "\u00A0", "L", "A", "B", "S"].map(
                (char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      initial: { y: "100%", opacity: 0 },
                      animate: { y: "0%", opacity: 1 },
                    }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ),
              )}
            </span>

            <span className="sm:hidden block overflow-hidden py-2">
              {["Z", "U", "R", "R", "I"].map((char, index) => (
                <motion.span
                  key={`m1-${index}`}
                  variants={{
                    initial: { y: "100%", opacity: 0 },
                    animate: { y: "0%", opacity: 1 },
                  }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {["L", "A", "B", "S"].map((char, index) => (
                <motion.span
                  key={`m2-${index}`}
                  variants={{
                    initial: { y: "100%", opacity: 0 },
                    animate: { y: "0%", opacity: 1 },
                  }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Divider + Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="
            border-t
            border-white/10
            mt-6
            pt-5
            w-full
          "
          >
            <h2
              className="
              text-sm
              sm:text-base
              md:text-xl
              lg:text-2xl
              uppercase
              font-light
              tracking-[0.18em]
              text-white/50
              leading-relaxed
            "
            >
              Digital Experiences
              <span className="hidden sm:inline"> & Web Development</span>
              <span className="sm:hidden block">& Web Development</span>
            </h2>
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="
          hidden
          md:flex
          absolute
          right-8
          lg:right-16
          bottom-16
          flex-col
          items-center
          gap-4
        "
        >
          <span
            style={{
              writingMode: "vertical-rl",
            }}
            className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
          >
            Scroll
          </span>

          <div className="w-px h-12 bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
