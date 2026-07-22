"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    {
      value: "100%",
      label: "Responsive Design",
    },
    {
      value: "Next.js",
      label: "Modern Stack",
    },
    {
      value: "24H",
      label: "Average Response",
    },
    {
      value: "SEO",
      label: "Performance Focus",
    },
  ];

  return (
    <section
      id="about"
      className="
        w-full
        bg-black

        px-6
        sm:px-8
        lg:px-16

        py-20
        lg:py-28

        overflow-hidden
      "
    >
      <div className="w-full h-px bg-white/10 mb-16" />

      {/* MAIN */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <p className="text-[9px] tracking-[0.5em] uppercase text-white/30 mb-8">
            Who we are
          </p>

          <h2
            className="
        text-white
        font-black
        uppercase
        tracking-tighter
        leading-[0.82]
        text-[clamp(3.5rem,8vw,8rem)]
      "
          >
            BUILDING
            <br />
            DIGITAL
            <br />
            EXPERIENCES
          </h2>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
      lg:col-span-5
      flex
      flex-col
      gap-10
      lg:pt-20
    "
        >
          <p
            className="
      text-sm
      md:text-base
      text-white/50
      leading-relaxed
      max-w-xl
    "
          >
            Zurri Labs is a digital studio specialized in crafting modern
            websites, high-performance e-commerce platforms and digital
            experiences that help brands grow, connect and stand out online.
          </p>

          <p
            className="
      text-sm
      md:text-base
      text-white/40
      leading-relaxed
      max-w-xl
    "
          >
            Every project combines strategy, design and development to deliver
            products that are visually impressive and technically powerful.
          </p>
        </motion.div>
      </div>

      {/* STATS */}

      <div
        className="
          grid 
          grid-cols-2 
          md:grid-cols-4 
          gap-6 
          mt-24   
          "
      >
        {stats.map((item, index) => (
          <motion.div
            key={item.value}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            className="
              border-t
              border-white/10

              pt-6
            "
          >
            <h3
              className="
                text-4xl

                sm:text-5xl

                lg:text-6xl

                font-black

                tracking-tighter

                text-white
              "
            >
              {item.value}
            </h3>

            <p
              className="
                mt-4

                text-[9px]

                tracking-[0.35em]

                uppercase

                text-white/30
              "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="w-full h-px bg-white/10 mt-20" />
    </section>
  );
}
