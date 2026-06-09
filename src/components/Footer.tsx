"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Link2, MessageCircle, Code2, ArrowUpRight } from "lucide-react";

const cols = [
  {
    heading: "Services",
    items: ["Website Design", "Landing Pages", "Web Development", "UI/UX Design", "AI Integrations", "Automation"],
  },
  {
    heading: "Company",
    items: ["About", "Our Work", "Process", "Careers", "Blog"],
  },
];

const socials = [
  { icon: MessageCircle, label: "X / Twitter", href: "https://twitter.com"   },
  { icon: Link2,         label: "LinkedIn",     href: "https://linkedin.com"  },
  { icon: Globe,         label: "Instagram",    href: "https://instagram.com" },
  { icon: Code2,         label: "GitHub",       href: "https://github.com"    },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#111118] border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-8">

        {/* Main grid */}
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-8 h-8 bg-[#343690] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">SC</span>
              </div>
              <span className="font-bold text-[17px] text-white">
                Skilled<span className="text-[#EBCEB5]">Cuts</span>
              </span>
            </button>
            <p className="text-white/40 text-[13px] leading-[1.75] mb-7 max-w-[220px]">
              Premium digital agency building experiences that drive real growth.
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
                    whileHover={{ y: -2 }}
                    className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/25 transition-all duration-200"
                    aria-label={s.label}
                  >
                    <Icon size={13} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.heading}>
              <h4 className="text-[11px] text-white/30 tracking-[0.18em] uppercase font-medium mb-6">
                {col.heading}
              </h4>
              <ul className="space-y-3.5">
                {col.items.map(item => (
                  <li key={item}>
                    <button className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
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
            <h4 className="text-[11px] text-white/30 tracking-[0.18em] uppercase font-medium mb-6">
              Contact
            </h4>
            <a
              href="mailto:hello@skilledcuts.com"
              className="text-[13px] text-white/45 hover:text-white transition-colors block mb-2"
            >
              hello@skilledcuts.com
            </a>
            <p className="text-[12px] text-white/25 mb-10">Mon–Fri, 9AM–6PM EST</p>

            <p className="text-[11px] text-white/30 uppercase tracking-[0.14em] mb-3">Weekly insights</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-[13px] placeholder-white/25 focus:outline-none focus:border-[#EBCEB5]/40 transition-colors"
              />
              <button className="px-3.5 py-2.5 bg-[#343690] hover:bg-[#272b72] text-white text-[13px] font-medium rounded-lg transition-colors flex-shrink-0">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} SkilledCuts. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
              <button key={item} className="text-[12px] text-white/25 hover:text-white/55 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
