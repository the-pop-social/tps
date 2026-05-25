"use client";

import { motion } from "framer-motion";
import { Users, Award, ShieldCheck, HeartHandshake } from "lucide-react";

export default function SocialProof() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-magenta" />,
      number: "50M+",
      label: "Views Generated",
      description: "Organic traffic & virality generated across platforms.",
    },
    {
      icon: <Award className="w-6 h-6 text-magenta" />,
      number: "120+",
      label: "Projects Completed",
      description: "Successful branding, web, and strategy campaigns.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-magenta" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Average rating of clients who continue working with us.",
    },
  ];

  // Placeholder SVGs for premium brands
  const brandLogos = [
    { name: "Vapor Design", text: "VAPOR" },
    { name: "Apex Labs", text: "APEX" },
    { name: "Nova Media", text: "NOVA" },
    { name: "Z-Pulse", text: "ZPULSE" },
    { name: "Cortex", text: "CORTEX" },
    { name: "Kinetix", text: "KINETIX" },
  ];

  return (
    <section className="bg-brand-deep-dark py-20 relative overflow-hidden border-t border-magenta/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Minimal logo cloud header */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-widest text-off-white/40 font-semibold font-poppins">
            Powering Next-Gen Brands
          </p>
          <h3 className="text-sm font-light text-off-white/70">
            Trusted by creators, influencers, and modern startup brands worldwide
          </h3>
        </div>

        {/* Marquee-like grid of logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-24 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="text-lg font-bold font-space-grotesk tracking-widest text-off-white/40 hover:text-magenta transition-colors duration-300"
            >
              {logo.text}
            </div>
          ))}
        </div>

        {/* Premium Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-2xl border border-magenta/10 hover:border-magenta/30 hover:shadow-2xl hover:shadow-magenta/5 transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden"
            >
              {/* Card top border glow effect */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-magenta to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-xl bg-navy/40 border border-magenta/10 flex items-center justify-center mb-6 group-hover:bg-magenta/10 group-hover:border-magenta/30 transition-colors">
                {stat.icon}
              </div>

              <div className="space-y-2">
                <span className="hero-font text-4xl md:text-5xl font-black text-white block tracking-tight group-hover:text-magenta transition-colors">
                  {stat.number}
                </span>
                <h4 className="text-base font-semibold text-off-white font-poppins">
                  {stat.label}
                </h4>
                <p className="text-sm text-off-white/60 leading-relaxed font-light">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
