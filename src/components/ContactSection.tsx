"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Tell us a bit more — at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Website Design",
  "Landing Page",
  "Web Development",
  "UI/UX Design",
  "AI Integration",
  "Automation",
  "Full Digital Package",
];

const budgets = [
  "$1,500 – $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000+",
  "Not sure yet",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs tracking-widest uppercase mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Let&apos;s Start
              <span className="gradient-text"> Your Project</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Fill out the form and we&apos;ll respond within 24 hours with a tailored proposal and next steps.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { label: "Email", value: "hello@skilledcuts.com" },
                { label: "Response Time", value: "Within 24 hours" },
                { label: "Working Hours", value: "Mon–Fri, 9AM–6PM EST" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-20 text-white/30 text-sm pt-0.5 flex-shrink-0">{item.label}</div>
                  <div className="text-white/70 text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-[#111111] border border-green-500/20 h-full min-h-[400px]"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/50">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 p-6 md:p-8 rounded-2xl bg-[#111111] border border-white/5"
                noValidate
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">Full Name *</label>
                    <input
                      {...register("name")}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-white/3 border border-white/8 hover:border-white/15 focus:border-violet-500/50 focus:outline-none rounded-xl text-white text-sm placeholder-white/20 transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-white/3 border border-white/8 hover:border-white/15 focus:border-violet-500/50 focus:outline-none rounded-xl text-white text-sm placeholder-white/20 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Company (optional)</label>
                  <input
                    {...register("company")}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 bg-white/3 border border-white/8 hover:border-white/15 focus:border-violet-500/50 focus:outline-none rounded-xl text-white text-sm placeholder-white/20 transition-colors"
                  />
                </div>

                {/* Service + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">Service *</label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/8 hover:border-white/15 focus:border-violet-500/50 focus:outline-none rounded-xl text-white text-sm transition-colors appearance-none"
                    >
                      <option value="">Select service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#111111]">
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">Budget *</label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/8 hover:border-white/15 focus:border-violet-500/50 focus:outline-none rounded-xl text-white text-sm transition-colors appearance-none"
                    >
                      <option value="">Select budget</option>
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-[#111111]">
                          {b}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Project Details *</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 bg-white/3 border border-white/8 hover:border-white/15 focus:border-violet-500/50 focus:outline-none rounded-xl text-white text-sm placeholder-white/20 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
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
