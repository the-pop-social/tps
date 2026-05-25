"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Eye, Sparkles, TrendingUp, Compass, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden grid-bg-overlay">
      {/* Noise background */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Dynamic Glow Meshes */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-magenta/25 rounded-full blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-navy/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Premium Editorial Copy */}
        <div className="lg:col-span-7 text-left space-y-8">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-magenta/10 border border-magenta/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-magenta font-poppins"
          >
            <Sparkles className="w-3.5 h-3.5 fill-magenta" />
            <span>The All-In-One Platform For Creators</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-font text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Your brand deserves <br className="hidden md:block" />
            more than <span className="bg-gradient-to-r from-magenta via-[#f881a5] to-[#ffb1c7] bg-clip-text text-transparent">just content.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-off-white/80 max-w-xl font-light leading-relaxed"
          >
            We help creators and modern businesses grow through premium design, robust code, cinematic branding, and high-impact content strategy — all in one creative ecosystem.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#contact"
              className="cta-font bg-gradient-to-r from-magenta to-[#f881a5] hover:from-[#f881a5] hover:to-magenta text-white px-8 py-4 rounded-full font-bold tracking-wide shadow-xl shadow-magenta/10 hover:shadow-magenta/20 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 group text-base"
            >
              <span>Start Your Growth</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="#work"
              className="cta-font glass-panel hover:bg-magenta/5 border border-magenta/10 text-off-white hover:text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 text-base hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>View Our Work</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Floating UI Dashboard Mockups */}
        <div className="lg:col-span-5 relative min-h-[450px] flex items-center justify-center">
          {/* Decorative Glowing Sphere */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-magenta/20 rounded-full blur-[70px] pointer-events-none animate-spin-slow" />

          {/* Card 1: Creator viral analytics dashboard (Top Right float) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20, y: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute top-2 right-0 md:-right-8 w-64 glass-panel p-5 rounded-2xl border border-magenta/20 animate-float-slow select-none z-20 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-magenta/20 flex items-center justify-center text-magenta">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-off-white/40 block">ENGAGEMENT</span>
                  <span className="text-xs font-semibold text-white">Viral Surge</span>
                </div>
              </div>
              <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full font-bold">
                +354%
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-white tracking-tight">1.8M views</span>
              <span className="text-[10px] text-off-white/50 block">Generated across channels this week</span>
            </div>
            {/* Visual graph representation */}
            <div className="h-10 w-full mt-4 flex items-end gap-1.5">
              <div className="w-full bg-[#1E3251] rounded-t-sm h-3" />
              <div className="w-full bg-[#1E3251] rounded-t-sm h-5" />
              <div className="w-full bg-[#1E3251] rounded-t-sm h-4" />
              <div className="w-full bg-magenta/40 rounded-t-sm h-6" />
              <div className="w-full bg-magenta rounded-t-sm h-10" />
            </div>
          </motion.div>

          {/* Card 2: Growth Strategy checklist (Middle Left float) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute bottom-10 left-0 md:-left-8 w-60 glass-panel p-5 rounded-2xl border border-magenta/20 animate-float-medium z-10 shadow-2xl"
          >
            <h4 className="text-xs font-semibold text-magenta tracking-wider uppercase mb-3 font-poppins flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Growth Blueprint
            </h4>
            <ul className="space-y-2 text-xs font-medium text-off-white/80">
              <li className="flex items-center space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-magenta flex items-center justify-center text-[10px] text-white font-bold">✓</span>
                <span>Cinematic Hook Scripting</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-magenta flex items-center justify-center text-[10px] text-white font-bold">✓</span>
                <span>Premium Branding & Identity</span>
              </li>
              <li className="flex items-center space-x-2.5 text-off-white/40">
                <span className="w-4 h-4 rounded-full border border-off-white/20 flex items-center justify-center text-[10px] font-bold"></span>
                <span>Web3 Platform Build</span>
              </li>
              <li className="flex items-center space-x-2.5 text-off-white/40">
                <span className="w-4 h-4 rounded-full border border-off-white/20 flex items-center justify-center text-[10px] font-bold"></span>
                <span>Viral Ads Pipeline</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 3: Mini creator avatar thumbnail (Center overlap) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="w-56 h-56 rounded-3xl overflow-hidden border border-magenta/30 relative shadow-2xl glass-panel flex flex-col items-center justify-center p-6 text-center select-none"
          >
            <div className="absolute top-3 right-3 text-magenta/40">
              <Heart className="w-4 h-4 fill-magenta/40" />
            </div>
            {/* Aesthetic creator portrait placeholder */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-magenta via-[#1E3251] to-magenta p-1 mb-3">
              <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center text-magenta text-xl font-bold">
                POP
              </div>
            </div>
            <h3 className="text-sm font-bold text-white font-poppins">Anya Sterling</h3>
            <p className="text-[10px] text-off-white/60 mb-2">Fashion & Startup Innovator</p>
            <div className="flex items-center justify-center space-x-1 text-xs text-magenta font-semibold bg-magenta/10 px-3 py-1 rounded-full border border-magenta/20">
              <Eye className="w-3.5 h-3.5" />
              <span>3.2M Reach</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none">
        <span className="text-[9px] text-off-white/40 uppercase tracking-widest font-semibold font-poppins">Scroll down</span>
        <div className="w-5 h-8 border border-off-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-magenta rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
