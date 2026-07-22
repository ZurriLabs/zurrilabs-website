"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      number: "01",
      name: "Landing Page",
      price: "Starting at $199",
      description:
        "A high-converting landing page designed to showcase your product or service.",
      features: [
        "Custom responsive design",
        "Modern UI/UX",
        "Contact integration",
        "Basic SEO optimization",
      ],
    },

    {
      number: "02",
      name: "Business Website",
      featured: true,
      price: "Starting at $399",
      description:
        "A complete digital presence for companies looking to grow online.",
      features: [
        "Up to 5 custom sections",
        "Premium UI/UX design",
        "SEO optimization",
        "Performance improvements",
        "Social media integration",
      ],
    },

    {
      number: "03",
      name: "Custom Project",
      price: "Let's talk",
      description:
        "Tailored digital solutions built around your business requirements.",
      features: [
        "Custom applications",
        "Advanced integrations",
        "Dashboards",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <section
      id="pricing"
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

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once:true,
        }}
        transition={{
          duration:0.8,
        }}
        className="max-w-4xl mb-16"
      >

        <h2
          className="
          text-5xl
          sm:text-7xl
          lg:text-8xl
          font-black
          uppercase
          tracking-tighter
          leading-[0.85]
          text-white
          "
        >
          PRICING
        </h2>


        <p
          className="
          mt-6
          text-sm
          text-white/40
          uppercase
          tracking-widest
          max-w-md
          leading-relaxed
          "
        >
          Flexible solutions designed around your business goals.
        </p>

      </motion.div>




      {/* CARDS */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        "
      >

        {plans.map((plan,index)=>(

          <motion.div
            key={plan.name}

            initial={{
              opacity:0,
              y:50,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              duration:0.7,
              delay:index*0.15,
            }}

            className={`
            relative
            flex
            flex-col
            justify-between
            min-h-520px
            p-8
            border
            transition-all
            duration-300

            ${
              plan.featured
              ?
              "border-white bg-white/0.03"
              :
              "border-white/10 hover:border-white/30"
            }

            `}
          >


          {
            plan.featured && (

              <div
                className="
                absolute
                top-0
                right-0
                bg-white
                text-black
                px-4
                py-2
                text-[9px]
                font-bold
                tracking-[0.3em]
                uppercase
                "
              >
                Popular
              </div>

            )
          }




          <div>


            <span
              className="
              text-[10px]
              tracking-[0.3em]
              text-white/30
              uppercase
              "
            >
              {plan.number}
            </span>



            <h3
              className="
              mt-6
              text-2xl
              font-black
              uppercase
              text-white
              "
            >
              {plan.name}
            </h3>



            <h4
              className="
              mt-6
              text-3xl
              sm:text-4xl
              font-black
              text-white
              "
            >
              {plan.price}
            </h4>



            <p
              className="
              mt-5
              text-sm
              text-white/40
              leading-relaxed
              "
            >
              {plan.description}
            </p>



            <ul
              className="
              mt-8
              flex
              flex-col
              gap-4
              "
            >

              {plan.features.map(feature=>(

                <li
                  key={feature}
                  className="
                  flex
                  items-center
                  gap-3
                  text-xs
                  text-white/60
                  "
                >

                  <Check
                    className="
                    w-4
                    h-4
                    text-white
                    "
                  />

                  {feature}

                </li>

              ))}

            </ul>


          </div>




          <a
            href="#contact"

            className={`
            mt-10
            w-full
            py-4
            text-center
            text-[10px]
            font-bold
            tracking-[0.3em]
            uppercase
            transition-all

            ${
              plan.featured
              ?
              "bg-white text-black hover:bg-white/80"
              :
              "border border-white/20 text-white hover:bg-white hover:text-black"
            }

            `}
          >
            START PROJECT
          </a>


          </motion.div>

        ))}

      </div>



      <div className="section-line mt-20" />

    </section>
  );
}