"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "creator",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", type: "creator", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-brand-deep-dark border-t border-magenta/5">
      {/* Noise background */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Extreme Radial Glow Meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-magenta/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-navy/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Bold Copy */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="inline-flex items-center space-x-2 bg-magenta/10 border border-magenta/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-magenta font-poppins">
            <Sparkles className="w-3.5 h-3.5 fill-magenta" />
            <span>Launch Your Leap</span>
          </div>

          <h2 className="hero-font text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Ready to grow <br />
            <span className="bg-gradient-to-r from-magenta via-[#f881a5] to-[#ffb1c7] bg-clip-text text-transparent">differently?</span>
          </h2>
          
          <p className="text-base md:text-xl text-off-white/80 max-w-lg font-light leading-relaxed">
            Let’s build something people remember. Claim your free 30-minute growth blueprint call. No fluff, just a customized strategy for your brand.
          </p>

          {/* Quick value indicators */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-3 text-sm text-off-white/70">
              <span className="w-5 h-5 rounded-full bg-magenta/10 flex items-center justify-center text-magenta text-xs font-bold">✓</span>
              <span>Tailored visual roadmap & identity review</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-off-white/70">
              <span className="w-5 h-5 rounded-full bg-magenta/10 flex items-center justify-center text-magenta text-xs font-bold">✓</span>
              <span>Next.js/Webflow speed & conversion audit</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-off-white/70">
              <span className="w-5 h-5 rounded-full bg-magenta/10 flex items-center justify-center text-magenta text-xs font-bold">✓</span>
              <span>Virality structures & scripting templates</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Glassmorphic Form Card */}
        <div className="lg:col-span-6">
          <div className="glass-panel-heavy p-8 md:p-10 rounded-3xl border border-magenta/20 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-magenta to-transparent" />

            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white font-poppins mb-2">
                    Book Free Strategy Session
                  </h3>
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-off-white/50 tracking-wider uppercase font-poppins block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Anya Sterling"
                      className="w-full bg-[#0b1322]/80 border border-magenta/10 focus:border-magenta rounded-xl py-3 px-4 text-sm text-white placeholder-off-white/30 focus:outline-none focus:ring-1 focus:ring-magenta transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-off-white/50 tracking-wider uppercase font-poppins block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anya@sterlingapparel.in"
                      className="w-full bg-[#0b1322]/80 border border-magenta/10 focus:border-magenta rounded-xl py-3 px-4 text-sm text-white placeholder-off-white/30 focus:outline-none focus:ring-1 focus:ring-magenta transition-all duration-300"
                    />
                  </div>

                  {/* Creator / Startup switch */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-off-white/50 tracking-wider uppercase font-poppins block">
                      I am a...
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "creator" })}
                        className={`py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border ${
                          formData.type === "creator"
                            ? "bg-magenta text-white border-magenta shadow-md shadow-magenta/10"
                            : "bg-navy/20 border-magenta/10 text-off-white/80 hover:text-white"
                        }`}
                      >
                        Creator / Influencer
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "startup" })}
                        className={`py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border ${
                          formData.type === "startup"
                            ? "bg-magenta text-white border-magenta shadow-md shadow-magenta/10"
                            : "bg-navy/20 border-magenta/10 text-off-white/80 hover:text-white"
                        }`}
                      >
                        Startup / Business
                      </button>
                    </div>
                  </div>

                  {/* Project description field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-off-white/50 tracking-wider uppercase font-poppins block">
                      What are you building?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly tell us about your brand goals..."
                      className="w-full bg-[#0b1322]/80 border border-magenta/10 focus:border-magenta rounded-xl py-3 px-4 text-sm text-white placeholder-off-white/30 focus:outline-none focus:ring-1 focus:ring-magenta transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full cta-font bg-gradient-to-r from-magenta to-[#f881a5] hover:from-[#f881a5] hover:to-magenta text-white py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-magenta/10 hover:shadow-magenta/20 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center space-x-2 text-sm select-none"
                  >
                    {status === "loading" ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Book Strategy Call</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-magenta/10 border border-magenta/20 flex items-center justify-center text-magenta">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-poppins">
                      You're Booked!
                    </h3>
                    <p className="text-sm text-off-white/70 max-w-sm">
                      We've received your details. One of our growth directors will review your brand and email you booking options within 4 hours. Let's make it epic!
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold border border-magenta/20 text-magenta hover:bg-magenta/10 transition-colors"
                  >
                    Send another booking
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
