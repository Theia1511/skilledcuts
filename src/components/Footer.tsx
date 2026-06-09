"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Link2, MessageCircle, Code2, ArrowUpRight } from "lucide-react";

const cols = [
  {
    heading: "Services",
    items: ["Website Design","Landing Pages","Web Development","UI/UX Design","AI Integrations","Automation"],
  },
  {
    heading: "Company",
    items: ["About","Work","Process","Careers","Blog"],
  },
];

const socials = [
  { icon: MessageCircle, label: "X / Twitter",  href: "https://twitter.com"   },
  { icon: Link2,         label: "LinkedIn",      href: "https://linkedin.com"  },
  { icon: Globe,         label: "Instagram",     href: "https://instagram.com" },
  { icon: Code2,         label: "GitHub",        href: "https://github.com"    },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-[rgba(235,206,181,0.06)] bg-[#0e0c0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-bold text-[#ebceb5] text-lg mb-4 block"
            >
              Skilled<span className="opacity-40">Cuts</span>
            </button>
            <p className="text-[rgba(235,206,181,0.35)] text-xs leading-relaxed mb-6 max-w-[200px]">
              Premium digital agency building experiences that drive growth.
            </p>
            <div className="flex gap-3">
              {socials.map(s => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, opacity: 1 }}
                    className="w-8 h-8 rounded-lg border border-[rgba(235,206,181,0.08)] flex items-center justify-center text-[rgba(235,206,181,0.3)] hover:text-[#ebceb5] hover:border-[rgba(235,206,181,0.2)] transition-colors"
                    aria-label={s.label}
                  >
                    <Icon size={13} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <h4 className="text-[10px] text-[rgba(235,206,181,0.25)] tracking-[0.2em] uppercase font-mono mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.items.map(item => (
                  <li key={item}>
                    <button className="text-[rgba(235,206,181,0.4)] hover:text-[#ebceb5] text-sm transition-colors flex items-center gap-1 group">
                      {item}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + newsletter */}
          <div>
            <h4 className="text-[10px] text-[rgba(235,206,181,0.25)] tracking-[0.2em] uppercase font-mono mb-5">Contact</h4>
            <a href="mailto:hello@skilledcuts.com" className="text-[rgba(235,206,181,0.4)] hover:text-[#ebceb5] text-sm transition-colors block mb-2">
              hello@skilledcuts.com
            </a>
            <p className="text-[rgba(235,206,181,0.25)] text-xs mb-8">Mon–Fri, 9AM–6PM EST</p>

            <p className="text-[rgba(235,206,181,0.25)] text-xs mb-3">Weekly insights</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-w-0 px-3 py-2 bg-transparent border border-[rgba(235,206,181,0.08)] rounded-lg text-[#ebceb5] text-xs placeholder-[rgba(235,206,181,0.2)] focus:outline-none focus:border-[rgba(235,206,181,0.25)] transition-colors"
              />
              <button className="px-3 py-2 bg-[rgba(235,206,181,0.08)] hover:bg-[rgba(235,206,181,0.14)] text-[#ebceb5] text-xs rounded-lg transition-colors flex-shrink-0">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-[rgba(235,206,181,0.05)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[rgba(235,206,181,0.2)] text-xs">
            © {new Date().getFullYear()} SkilledCuts. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy","Terms","Cookies"].map(t => (
              <button key={t} className="text-[rgba(235,206,181,0.2)] hover:text-[rgba(235,206,181,0.5)] text-xs transition-colors">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
