"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Web Development",
      desc: "High-performance websites and landing pages designed to convert visitors into clients.",
    },
    {
      num: "02",
      title: "Custom E-commerce",
      desc: "Fast, scalable online stores built around your business goals.",
    },
    {
      num: "03",
      title: "SEO Optimization",
      desc: "Improve your visibility on Google and attract more organic traffic.",
    },
    {
      num: "04",
      title: "UI/UX Design",
      desc: "Modern interfaces focused on usability, experience and visual impact.",
    },
    {
      num: "05",
      title: "Custom Software",
      desc: "Tailored digital solutions, dashboards and applications built for your needs.",
    },
  ];

  return (
    <section
      id="services"
      className="
w-full
bg-black

py-20
sm:py-24

px-6
sm:px-8
lg:px-16

scroll-mt-24
"
    >
      <div className="section-line mb-16" />

      {/* HEADER */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
text-5xl
sm:text-7xl
lg:text-8xl

font-black

text-white

leading-[0.85]

tracking-tighter

uppercase

max-w-5xl

mb-16
"
      >
        WHAT CAN WE
        <br />
        BUILD TOGETHER?
      </motion.h2>

      {/* SERVICES LIST */}

      <div
        className="
flex
flex-col
"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.num}
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
group

grid

grid-cols-1

md:grid-cols-[60px_1fr]

gap-5

md:gap-10

py-8

border-b

border-white/10

hover:border-white/30

transition-all

duration-300

"
          >
            {/* NUMBER */}

            <span
              className="
text-[10px]

font-bold

tracking-[0.3em]

text-white/30

"
            >
              {service.num}
            </span>

            {/* CONTENT */}

            <div
              className="
flex

flex-col

lg:flex-row

lg:items-center

justify-between

gap-6

"
            >
              <h3
                className="
text-2xl

sm:text-3xl

lg:text-4xl

font-black

uppercase

tracking-tight

text-white

group-hover:translate-x-2

transition-transform

duration-300

"
              >
                {service.title}
              </h3>

              <p
                className="
text-xs

sm:text-sm

text-white/40

leading-relaxed

uppercase

tracking-widest

max-w-md

lg:text-right

"
              >
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="
mt-14
"
      >
        <a
          href="#contact"
          className="
inline-block

border

border-white/20

text-white

px-8

py-4

text-[10px]

font-bold

tracking-[0.3em]

uppercase

hover:bg-white

hover:text-black

transition-all

duration-300

"
        >
          START A PROJECT
        </a>
      </motion.div>

      <div className="section-line mt-16" />
    </section>
  );
}
