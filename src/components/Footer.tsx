"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Link2, MessageCircle, Code2, ArrowUpRight } from "lucide-react";

const services = [
  "Website Design",
  "Landing Pages",
  "Web Development",
  "UI/UX Design",
  "AI Integrations",
  "Automation",
];

const company = [
  { label: "About", href: "#why-us" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const socials = [
  { icon: MessageCircle, label: "Twitter / X", href: "https://twitter.com" },
  { icon: Link2, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Globe, label: "Instagram", href: "https://instagram.com" },
  { icon: Code2, label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-sm">SC</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>
              <span className="font-bold text-lg text-white">
                Skilled<span className="text-violet-400">Cuts</span>
              </span>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Premium digital agency building experiences that drive real business growth.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 rounded-full glass border border-white/8 hover:border-white/20 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                    aria-label={s.label}
                  >
                    <Icon size={14} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-1 group cursor-pointer">
                    {s}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@skilledcuts.com"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  hello@skilledcuts.com
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm">Mon–Fri, 9AM–6PM EST</span>
              </li>
            </ul>

            {/* Newsletter hint */}
            <div className="mt-8">
              <p className="text-white/30 text-xs mb-3">Get weekly insights</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-3 py-2 bg-white/5 border border-white/8 rounded-lg text-white text-xs placeholder-white/20 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
                <button className="px-3 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs rounded-lg transition-colors flex-shrink-0">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} SkilledCuts. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <button
                key={item}
                className="text-white/25 hover:text-white/60 text-xs transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
