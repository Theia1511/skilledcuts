"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const links = [
  { label: "Services",    href: "#services"  },
  { label: "Work",        href: "#work"      },
  { label: "Process",     href: "#process"   },
  { label: "Testimonials",href: "#testimonials"},
  { label: "FAQ",         href: "#faq"       },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0e0c0a]/90 backdrop-blur-md border-b border-[rgba(235,206,181,0.06)]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-[#ebceb5] tracking-tight text-lg select-none"
          >
            Skilled<span className="opacity-50">Cuts</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-[rgba(235,206,181,0.45)] hover:text-[#ebceb5] transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(235,206,181,0.2)] text-[#ebceb5] text-sm hover:bg-[rgba(235,206,181,0.06)] transition-all"
          >
            Book a Call
          </motion.button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#ebceb5] opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0e0c0a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-9 md:hidden"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => { scrollTo(l.href); setOpen(false); }}
                className="text-2xl font-medium text-[#ebceb5] opacity-70 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              onClick={() => { scrollTo("#contact"); setOpen(false); }}
              className="mt-4 px-8 py-3 rounded-full border border-[rgba(235,206,181,0.25)] text-[#ebceb5] text-sm"
            >
              Book a Call
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
