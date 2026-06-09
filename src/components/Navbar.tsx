"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const links = [
  { label: "Services",     href: "#services"      },
  { label: "Work",         href: "#work"           },
  { label: "Process",      href: "#process"        },
  { label: "Testimonials", href: "#testimonials"   },
  { label: "FAQ",          href: "#faq"            },
];

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_#e4e4e7]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-[#343690] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs tracking-tight">SC</span>
            </div>
            <span className="font-bold text-[17px] text-[#111118] tracking-tight">
              Skilled<span className="text-[#343690]">Cuts</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-[#52525b] hover:text-[#343690] transition-colors duration-200 font-medium"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="text-sm text-[#52525b] hover:text-[#343690] transition-colors font-medium"
            >
              Get Proposal
            </button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#272b72" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2.5 bg-[#343690] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book a Call
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#e4e4e7] text-[#52525b] hover:text-[#343690] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.055 }}
                onClick={() => { scrollTo(l.href); setOpen(false); }}
                className="text-2xl font-semibold text-[#111118] hover:text-[#343690] transition-colors"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.055 }}
              onClick={() => { scrollTo("#contact"); setOpen(false); }}
              className="mt-2 px-8 py-3.5 bg-[#343690] text-white font-semibold rounded-xl"
            >
              Book a Call
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
