"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Sterling Apparel Launch",
      category: "branding",
      client: "Anya Sterling",
      stats: "12M+ Impressions",
      badge: "E-Commerce & Branding",
      description: "Complete visual identity design, packaging design, and a high-converting shop layout built for a leading Gen Z fashion influencer.",
      glowColor: "from-magenta/10 to-transparent",
    },
    {
      id: 2,
      title: "Nova AI SaaS Redesign",
      category: "development",
      client: "Nova Labs",
      stats: "+142% Signup Conversion",
      badge: "Web Dev & UI/UX",
      description: "Engineered a stunning, fast, and cinematic Next.js site featuring modular layout animations, resulting in a dramatic leap in daily trials.",
      glowColor: "from-navy/30 to-transparent",
    },
    {
      id: 3,
      title: "Z-Pulse Visual Campaign",
      category: "marketing",
      client: "Z-Pulse",
      stats: "500K+ Organic Followers",
      badge: "Social & Short-form Ads",
      description: "A short-form video creation strategy using highly visual storytelling structures that helped a modern energy brand dominate youth feeds.",
      glowColor: "from-magenta/10 to-transparent",
    },
    {
      id: 4,
      title: "Cortex Masterclass Funnel",
      category: "marketing",
      client: "Cortex Academy",
      stats: "$420K Generated",
      badge: "High-Ticket Funnels",
      description: "Designed a tailored membership landing page and automated funnel system that streamlined course registrations and scaling pipelines.",
      glowColor: "from-navy/30 to-transparent",
    },
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "development", label: "Web / App Dev" },
    { id: "marketing", label: "Growth / Social" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="relative py-28 overflow-hidden bg-brand-dark">
      {/* Background Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-magenta/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-magenta font-semibold font-poppins">
              Case Studies
            </span>
            <h2 className="hero-font text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Selected works that<br />
              <span className="bg-gradient-to-r from-magenta to-[#f881a5] bg-clip-text text-transparent">
                changed the game.
              </span>
            </h2>
            <p className="text-off-white/60 font-light text-sm md:text-base">
              A curated look at how we merge high-end visual systems with robust digital development to achieve actual, measurable growth.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-magenta text-white shadow-md shadow-magenta/15"
                    : "glass-panel hover:bg-magenta/5 border border-magenta/10 text-off-white/80 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-panel p-6 rounded-3xl border border-magenta/10 hover:border-magenta/25 hover:shadow-2xl hover:shadow-magenta/5 transition-all duration-500 flex flex-col group relative overflow-hidden h-full min-h-[460px] justify-between"
              >
                {/* Glow Backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.glowColor} opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

                {/* Top content */}
                <div>
                  {/* Badge & Stat */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-magenta bg-magenta/10 px-3 py-1 rounded-full border border-magenta/20">
                      {project.badge}
                    </span>
                    <span className="text-xs font-semibold text-green-400 bg-green-400/5 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {project.stats}
                    </span>
                  </div>

                  {/* Main Mockup representation using beautiful HTML/CSS panel */}
                  <div className="w-full h-44 rounded-2xl bg-brand-deep-dark border border-magenta/10 mb-6 overflow-hidden relative group-hover:border-magenta/30 transition-colors flex items-center justify-center select-none shadow-inner">
                    {/* Glowing effect inside grid */}
                    <div className="absolute inset-0 grid-bg-overlay opacity-30" />
                    <div className="absolute w-36 h-36 bg-magenta/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Fake device bar */}
                    <div className="absolute top-0 left-0 right-0 h-5 bg-navy/40 border-b border-magenta/5 flex items-center px-3 space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                    </div>
                    
                    {/* Logo/Illustration */}
                    <div className="relative font-space-grotesk font-extrabold text-2xl tracking-widest text-off-white/40 group-hover:text-magenta group-hover:scale-105 transition-all duration-300">
                      {project.client.toUpperCase()}
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins group-hover:text-magenta transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-off-white/60 leading-relaxed font-light mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-magenta/5 mt-auto flex justify-between items-center text-sm font-semibold text-white group-hover:text-magenta transition-colors">
                  <span>View Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-navy/40 border border-magenta/10 flex items-center justify-center group-hover:bg-magenta group-hover:border-magenta text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
