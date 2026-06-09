"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name:    z.string().min(2, "At least 2 characters"),
  email:   z.string().email("Valid email required"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  budget:  z.string().min(1, "Select a budget"),
  message: z.string().min(20, "At least 20 characters"),
});
type F = z.infer<typeof schema>;

const services = ["Website Design","Landing Page","Web Development","UI/UX Design","AI Integration","Automation","Full Package"];
const budgets  = ["$1,500 – $3,000","$3,000 – $7,500","$7,500 – $15,000","$15,000+","Not sure"];

const inputClass =
  "w-full px-4 py-3 bg-transparent border border-[rgba(235,206,181,0.1)] hover:border-[rgba(235,206,181,0.2)] focus:border-[rgba(235,206,181,0.4)] focus:outline-none rounded-xl text-[#ebceb5] text-sm placeholder-[rgba(235,206,181,0.2)] transition-colors";

export default function ContactSection() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<F>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: F) => {
    await new Promise(r => setTimeout(r, 1400));
    console.log(data);
    setDone(true);
    reset();
  };

  return (
    <section id="contact" className="py-28 border-t border-[rgba(235,206,181,0.06)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] text-[rgba(235,206,181,0.35)] tracking-[0.22em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#ebceb5] leading-[0.95] tracking-tight mb-6">
              Let&apos;s Start<br />Your Project
            </h2>
            <p className="text-[rgba(235,206,181,0.4)] text-sm leading-relaxed mb-10">
              Fill out the form and we&apos;ll respond within 24 hours with a tailored proposal.
            </p>

            {[
              { k: "Email",         v: "hello@skilledcuts.com" },
              { k: "Response",      v: "Within 24 hours"       },
              { k: "Working hours", v: "Mon–Fri, 9AM–6PM EST"  },
            ].map(row => (
              <div key={row.k} className="flex gap-6 mb-4">
                <span className="text-[rgba(235,206,181,0.25)] text-xs w-28 flex-shrink-0 pt-0.5">{row.k}</span>
                <span className="text-[rgba(235,206,181,0.6)] text-sm">{row.v}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-[rgba(235,206,181,0.08)] bg-[#131109] min-h-[400px]"
              >
                <CheckCircle2 size={36} className="text-[#ebceb5] mb-4 opacity-70" />
                <h3 className="text-xl font-bold text-[#ebceb5] mb-2">Message Sent</h3>
                <p className="text-[rgba(235,206,181,0.4)] text-sm mb-6">We&apos;ll be in touch within 24 hours.</p>
                <button onClick={() => setDone(false)} className="text-xs text-[rgba(235,206,181,0.35)] hover:text-[#ebceb5] transition-colors underline underline-offset-4">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register("name")} placeholder="Full Name *" className={inputClass} />
                    {errors.name && <p className="mt-1 text-xs text-[rgba(235,206,181,0.5)]">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("email")} type="email" placeholder="Email *" className={inputClass} />
                    {errors.email && <p className="mt-1 text-xs text-[rgba(235,206,181,0.5)]">{errors.email.message}</p>}
                  </div>
                </div>

                <input {...register("company")} placeholder="Company (optional)" className={inputClass} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select {...register("service")} className={inputClass + " bg-[#0e0c0a] appearance-none"}>
                      <option value="">Service *</option>
                      {services.map(s => <option key={s} value={s} className="bg-[#131109]">{s}</option>)}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-[rgba(235,206,181,0.5)]">{errors.service.message}</p>}
                  </div>
                  <div>
                    <select {...register("budget")} className={inputClass + " bg-[#0e0c0a] appearance-none"}>
                      <option value="">Budget *</option>
                      {budgets.map(b => <option key={b} value={b} className="bg-[#131109]">{b}</option>)}
                    </select>
                    {errors.budget && <p className="mt-1 text-xs text-[rgba(235,206,181,0.5)]">{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <textarea {...register("message")} rows={4} placeholder="Project details *" className={inputClass + " resize-none"} />
                  {errors.message && <p className="mt-1 text-xs text-[rgba(235,206,181,0.5)]">{errors.message.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#ebceb5] hover:bg-[#e2c4a8] disabled:opacity-50 text-[#0e0c0a] font-semibold rounded-xl text-sm transition-colors"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-[#0e0c0a]/30 border-t-[#0e0c0a] rounded-full animate-spin" />
                  ) : (
                    <><Send size={14} /> Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
