"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Zap, 
  Compass, 
  Layers, 
  TrendingUp, 
  Sparkles 
} from "lucide-react";

export default function BentoWhyUs() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-magenta" />,
      title: "One Creative Partner",
      description: "Stop juggling multiple freelancers or fragmented agencies. We handle your strategy, branding, coding, and growth all under one premium roof.",
      size: "md:col-span-2",
      bgGradient: "from-magenta/5 via-navy/5 to-transparent",
    },
    {
      icon: <Compass className="w-5 h-5 text-magenta" />,
      title: "Strategy + Execution",
      description: "We don't just design the blueprint — we build the entire high-performance engine for you.",
      size: "md:col-span-1",
      bgGradient: "from-navy/10 to-transparent",
    },
    {
      icon: <Zap className="w-5 h-5 text-magenta" />,
      title: "Lightning Turnaround",
      description: "Agile, highly responsive workflows that deliver premium-standard results without the bureaucratic delay.",
      size: "md:col-span-1",
      bgGradient: "from-navy/10 to-transparent",
    },
    {
      icon: <Layers className="w-5 h-5 text-magenta" />,
      title: "Premium Design Systems",
      description: "Custom-tailored typography hierarchies, flawless spacing, cinematic aesthetics, and modern glassmorphic UI setups constructed to wow your audience immediately.",
      size: "md:col-span-2",
      bgGradient: "from-magenta/5 via-navy/5 to-transparent",
    },
    {
      icon: <Users className="w-5 h-5 text-magenta" />,
      title: "Creator-First Mentality",
      description: "Born in the creator economy, we understand audience psychology, high-engagement hook styling, and algorithms better than traditional corporate teams.",
      size: "md:col-span-2",
      bgGradient: "from-magenta/5 to-transparent",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-magenta" />,
      title: "Growth-Led Workflow",
      description: "Aesthetics are empty without results. Every line of code and pixel of design is engineered to capture attention and convert visitors into clients.",
      size: "md:col-span-1",
      bgGradient: "from-navy/10 to-transparent",
    },
  ];

  return (
    <section id="why-us" className="relative py-28 overflow-hidden bg-brand-deep-dark border-t border-magenta/5">
      {/* Background gradients */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-navy/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs uppercase tracking-widest text-magenta font-semibold font-poppins">
            Why The Pop Social
          </span>
          <h2 className="hero-font text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Everything your brand needs.<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-magenta to-[#f881a5] bg-clip-text text-transparent">
              Under one creative roof.
            </span>
          </h2>
          <p className="text-off-white/60 font-light max-w-xl mx-auto text-sm md:text-base">
            We operate at the intersection of cinematic storytelling, elegant engineering, and ROI-driven marketing to elevate your digital ecosystem.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`glass-panel p-8 rounded-3xl border border-magenta/10 hover:border-magenta/25 hover:shadow-xl hover:shadow-magenta/5 transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden flex flex-col justify-between ${feature.size}`}
            >
              {/* Radial background mesh */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />
              
              <div>
                <div className="w-10 h-10 rounded-xl bg-navy/40 border border-magenta/10 flex items-center justify-center mb-6 group-hover:bg-magenta/10 group-hover:border-magenta/30 transition-colors">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-magenta transition-colors duration-200">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-sm text-off-white/60 leading-relaxed font-light mt-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
