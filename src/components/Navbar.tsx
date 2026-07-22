"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
  
const words = [
    "Z",
    "ZU",
    "ZUR",
    "ZURR",
    "ZURRI."
  ];
  
function AnimatedLogo() {


  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <motion.a
      href="#hero"
      translate="no"
      className="text-white font-black text-2xl tracking-tighter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        key={words[index]}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {words[index]}
      </motion.span>
    </motion.a>
  );
}
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "ABOUT", href: "#about" },
    { title: "SERVICES", href: "#services" },
    { title: "PROJECTS", href: "#portfolio" },
    { title: "PRICING", href: "#pricing" },
    { title: "CONTACT", href: "#contact" },
  ];

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setOpen(false);

    const element = document.querySelector(href);

    if (!element) return;

    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1700px] mx-auto h-20 px-6 md:px-10 xl:px-16 flex items-center justify-between">
          <AnimatedLogo />
          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-14">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-[11px] uppercase tracking-[0.35em] text-white/40 hover:text-white transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white uppercase tracking-[0.35em] text-[11px]"
          >
            MENU
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-999 bg-black"
          >
            <div className="max-w-[1700px] h-full mx-auto px-6 md:px-10 xl:px-16 py-10 flex flex-col justify-between">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2
                  translate="no"
                  className="text-3xl font-black text-white"
                >
                  ZURRI.
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="uppercase tracking-[0.35em] text-[11px] text-white/50 hover:text-white transition"
                >
                  CLOSE
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4">
                {links.map((item, i) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.45,
                    }}
                    className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white hover:text-white/50 transition-colors"
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-white/10 pt-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">
                    SOCIAL
                  </p>

                  <div className="flex gap-6 text-white/70">
                    <a href="https://www.instagram.com/zurrilabs.ar/">Instagram</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Github</a>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">
                    CONTACT
                  </p>

                  <p className="text-white/70">
                    zurrilabs@gmail.com
                  </p>

                  <p className="text-white/40">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}