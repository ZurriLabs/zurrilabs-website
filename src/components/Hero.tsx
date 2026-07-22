"use client";

import { motion } from "framer-motion";

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

      {/* Top Label */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="
          absolute
          top-24
          sm:top-16
          left-6
          sm:left-8
          lg:left-16
          text-[8px]
          sm:text-[9px]
          tracking-[0.45em]
          uppercase
          text-white/30
        "
      >
        Digital Studio / 2026
      </motion.p>



      {/* Main Brand */}
      <div className="w-full">

        <motion.h1
          translate="no"
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
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

          <span className="hidden sm:inline">
            ZURRI LABS
          </span>

          <span className="sm:hidden">
            ZURRI
            <br />
            LABS
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
            <span className="hidden sm:inline">
              {" "} & Web Development
            </span>

            <span className="sm:hidden block">
              & Web Development
            </span>

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


    </section>
  );
}