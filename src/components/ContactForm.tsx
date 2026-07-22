"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("success");

      setFormState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  const inputClass = `
  w-full
  bg-transparent
  border-b
  border-white/15
  py-4
  text-white
  text-sm
  placeholder:text-white/25
  focus:outline-none
  focus:border-white/60
  transition-colors
  duration-300
  `;

  return (
    <section
      id="contact"
      className="
w-full
bg-black
py-16
sm:py-20
px-6
sm:px-8
lg:px-16
overflow-hidden
"
    >
      <div
        className="
grid
grid-cols-1
lg:grid-cols-2
gap-16
lg:gap-24
"
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
flex
flex-col
gap-8
"
        >
          <h2
            className="
text-5xl
sm:text-6xl
lg:text-8xl
font-black
text-white
leading-[0.85]
tracking-tighter
uppercase
"
          >
            CONTACT
          </h2>

          <p
            className="
text-xs
sm:text-sm
text-white/40
leading-relaxed
max-w-sm
"
          >
            Write to us telling us your idea or type of business and we will
            respond within 24 hours with a commitment-free proposal.
          </p>

          <div
            className="
flex
flex-col
gap-6
mt-4
"
          >
            <div>
              <p
                className="
text-[9px]
tracking-[0.3em]
uppercase
text-white/30
mb-1
"
              >
                LOCATION
              </p>

              <p className="text-sm text-white/70">Buenos Aires, Argentina</p>
            </div>

            <div>
              <p
                className="
text-[9px]
tracking-[0.3em]
uppercase
text-white/30
mb-1
"
              >
                EMAIL
              </p>

              <p className="text-sm text-white/70">hola@zurrilabs.com</p>
            </div>

            <div>
              <p
                className="
text-[9px]
tracking-[0.3em]
uppercase
text-white/30
mb-1
"
              >
                WHATSAPP
              </p>

              <p className="text-sm text-white/70">+54 11 1234-5678</p>
            </div>
          </div>

          <div
            className="
flex
flex-row
sm:flex-col
gap-5
mt-4
"
          >
            {["Instagram", "LinkedIn", "X"].map((s) => (
              <a
                key={s}
                href="#"
                className="
text-[10px]
font-bold
tracking-[0.25em]
uppercase
text-white/30
hover:text-white
transition
"
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>

        {/* FORM */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          <h3
            className="
text-4xl
sm:text-5xl
lg:text-8xl
font-black
text-white
leading-[0.85]
tracking-tighter
uppercase
mb-10
"
          >
            START
            <br className="sm:hidden" /> A PROJECT
          </h3>

          <form
            onSubmit={handleSubmit}
            className="
flex
flex-col
gap-7
"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  name: e.target.value,
                })
              }
              className={inputClass}
            />

            <input
              type="text"
              placeholder="Your phone"
              value={formState.phone}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  phone: e.target.value,
                })
              }
              className={inputClass}
            />

            <input
              type="email"
              placeholder="Your email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
              className={inputClass}
            />

            <textarea
              placeholder="Message"
              rows={5}
              required
              value={formState.message}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  message: e.target.value,
                })
              }
              className={`${inputClass} resize-none`}
            />

            <button
              disabled={status === "sending"}
              className={`
mt-4
py-4
text-[10px]
font-black
tracking-[0.3em]
uppercase
transition-all

${
  status === "success"
    ? "bg-white text-black"
    : "border border-white/20 text-white hover:bg-white hover:text-black"
}

`}
            >
              {status === "idle" && "SEND MESSAGE"}

              {status === "sending" && "SENDING..."}

              {status === "success" && "MESSAGE SENT"}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="section-line mt-20 mb-8" />

      <footer
        className="
flex
flex-col
sm:flex-row
justify-between
gap-4
text-[9px]
font-bold
tracking-[0.25em]
uppercase
text-white/20
"
      >
        <span>© {new Date().getFullYear()} ZurriLabs</span>

        <span>All rights reserved</span>
      </footer>
    </section>
  );
}
