"use client";

import { motion } from "framer-motion";
import { 
  Eye, 
  Compass, 
  Layers, 
  Terminal, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Eye className="w-5 h-5 text-magenta" />,
      title: "Discovery & Blueprinting",
      description: "We deep-dive into your analytics, current brand assets, and audience demographics to discover hidden leverage points and define concrete scaling goals.",
    },
    {
      num: "02",
      icon: <Compass className="w-5 h-5 text-magenta" />,
      title: "Digital Growth Strategy",
      description: "We map out your customized platform layout, short-form viral narrative structures, paid acquisition funnels, and codebase architectural plans.",
    },
    {
      num: "03",
      icon: <Layers className="w-5 h-5 text-magenta" />,
      title: "Luxury Design & Identity",
      description: "We draft premium editorial UI components, high-fidelity landing pages, customized media assets, and complete brand design systems.",
    },
    {
      num: "04",
      icon: <Terminal className="w-5 h-5 text-magenta" />,
      title: "Premium Engineering",
      description: "Our developers translate design drafts into clean, production-grade Next.js App Router structures equipped with custom animations and SEO-friendly code.",
    },
    {
      num: "05",
      icon: <Rocket className="w-5 h-5 text-magenta" />,
      title: "Launch & Optimization",
      description: "We deploy directly to lightning-fast environments (e.g. Vercel), setup comprehensive tracking schemas, run speed audits, and go live.",
    },
    {
      num: "06",
      icon: <TrendingUp className="w-5 h-5 text-magenta" />,
      title: "Scale & Dominate",
      description: "We manage and monitor short-form video releases, paid meta funnels, platform updates, and conversion audits, scaling your reach monthly.",
    },
  ];

  return (
    <section id="process" className="relative py-28 overflow-hidden bg-brand-deep-dark border-t border-magenta/5">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-magenta/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-navy/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-24">
          <span className="text-xs uppercase tracking-widest text-magenta font-semibold font-poppins">
            Our Method
          </span>
          <h2 className="hero-font text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Designed for execution.<br />
            <span className="bg-gradient-to-r from-magenta to-[#f881a5] bg-clip-text text-transparent">
              Built for exponential scale.
            </span>
          </h2>
          <p className="text-off-white/60 font-light max-w-xl mx-auto text-sm md:text-base">
            A meticulous, developer-led framework engineered to take your digital products from conceptual ideas to record-breaking live platforms.
          </p>
        </div>

        {/* Process Timeline Rows */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-magenta/50 via-navy/50 to-transparent pointer-events-none" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Step Info Box (Left or Right based on index) */}
                  <div className="w-full md:w-1/2 md:px-12 pl-16 md:pl-0 text-left">
                    <div className="glass-panel p-8 rounded-3xl border border-magenta/10 hover:border-magenta/25 hover:shadow-xl hover:shadow-magenta/5 transition-all duration-300 relative group">
                      {/* Hover border neon glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      
                      {/* Step Number Tag */}
                      <span className="hero-font text-5xl font-black text-magenta/10 absolute top-4 right-6 select-none group-hover:text-magenta/20 transition-colors">
                        {step.num}
                      </span>
                      
                      <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-magenta transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-sm text-off-white/60 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Bullet */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-brand-deep-dark border-2 border-magenta flex items-center justify-center shadow-lg shadow-magenta/20 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* Empty Column spacer for Desktop layouts */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
