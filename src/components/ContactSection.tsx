"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Mail, Clock, Globe } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name:    z.string().min(2, "At least 2 characters"),
  email:   z.string().email("Valid email required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget:  z.string().min(1, "Please select a budget"),
  message: z.string().min(20, "Please add more detail (min 20 chars)"),
});
type F = z.infer<typeof schema>;

const services = ["Website Design", "Landing Page", "Web Development", "UI/UX Design", "AI Integration", "Automation", "Full Package"];
const budgets  = ["$1,500 – $3,000", "$3,000 – $7,500", "$7,500 – $15,000", "$15,000+", "Not sure yet"];

const inputBase =
  "w-full px-4 py-3.5 bg-white border border-[#e4e4e7] hover:border-[#EBCEB5] focus:border-[#343690] focus:outline-none focus:ring-2 focus:ring-[#343690]/10 rounded-xl text-[#111118] text-[14px] placeholder-[#a1a1aa] transition-all duration-200";

const contactInfo = [
  { icon: Mail,  label: "Email",        value: "hello@skilledcuts.com" },
  { icon: Clock, label: "Response",     value: "Within 24 hours"       },
  { icon: Globe, label: "Working Hours",value: "Mon–Fri, 9AM–6PM EST"  },
];

export default function ContactSection() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<F>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: F) => {
    await new Promise(r => setTimeout(r, 1400));
    console.log(data);
    setDone(true);
    reset();
  };

  return (
    <section id="contact" className="bg-white py-[120px]">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 xl:gap-24 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f7f0e8] border border-[#EBCEB5] rounded-full text-[12px] font-medium text-[#343690] mb-6">
              Get In Touch
            </div>
            <h2
              className="font-black text-[#111118] leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
            >
              Let&apos;s Start<br />Your Project
            </h2>
            <p className="text-[16px] text-[#52525b] leading-[1.7] mb-12">
              Fill out the form and we&apos;ll respond within 24 hours with a tailored proposal and next steps.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f7f0e8] flex items-center justify-center text-[#343690] flex-shrink-0">
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="text-[12px] text-[#a1a1aa] mb-0.5">{label}</div>
                    <div className="text-[14px] font-medium text-[#111118]">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-24 px-8 rounded-2xl border border-[#f0f0f0] bg-[#fafafa] min-h-[480px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#f7f0e8] flex items-center justify-center mb-6">
                  <CheckCircle2 size={30} className="text-[#343690]" />
                </div>
                <h3 className="text-[22px] font-bold text-[#111118] mb-3">Message Sent!</h3>
                <p className="text-[15px] text-[#52525b] mb-8 max-w-xs leading-relaxed">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="text-[13px] text-[#343690] font-medium hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 md:p-10 rounded-2xl border border-[#f0f0f0] bg-[#fafafa] space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-medium text-[#52525b] mb-2">Full Name *</label>
                    <input {...register("name")} placeholder="John Smith" className={inputBase} />
                    {errors.name && <p className="mt-1.5 text-[12px] text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#52525b] mb-2">Email *</label>
                    <input {...register("email")} type="email" placeholder="john@company.com" className={inputBase} />
                    {errors.email && <p className="mt-1.5 text-[12px] text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#52525b] mb-2">Company (optional)</label>
                  <input {...register("company")} placeholder="Acme Inc." className={inputBase} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-medium text-[#52525b] mb-2">Service *</label>
                    <select {...register("service")} className={inputBase + " appearance-none bg-white"}>
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="mt-1.5 text-[12px] text-red-500">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#52525b] mb-2">Budget *</label>
                    <select {...register("budget")} className={inputBase + " appearance-none bg-white"}>
                      <option value="">Select a budget</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    {errors.budget && <p className="mt-1.5 text-[12px] text-red-500">{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#52525b] mb-2">Project Details *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className={inputBase + " resize-none"}
                  />
                  {errors.message && <p className="mt-1.5 text-[12px] text-red-500">{errors.message.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#272b72" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#343690] hover:bg-[#272b72] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-[15px] transition-all duration-200 shadow-[0_4px_20px_rgba(52,54,144,0.25)]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={16} /> Send Message</>
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
