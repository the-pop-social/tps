"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  Palette, 
  Globe, 
  Smartphone, 
  Megaphone, 
  Layers 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Video className="w-6 h-6 text-magenta" />,
      title: "Social Media Management",
      description: "Full-scale growth, short-form editing, daily scheduling, and viral copywriting built specifically to establish brand authority and audience loyalty.",
    },
    {
      icon: <Palette className="w-6 h-6 text-magenta" />,
      title: "Branding & Identity",
      description: "Crafting modern design systems, custom typography, cinematic logos, and complete style guides that stand out in a cluttered digital world.",
    },
    {
      icon: <Globe className="w-6 h-6 text-magenta" />,
      title: "Website Development",
      description: "Premium, responsive Webflow & Next.js sites built with editorial-level layouts, smooth parallax animations, and custom interactions.",
    },
    {
      icon: <Megaphone className="w-6 h-6 text-magenta" />,
      title: "Paid Ads & Growth",
      description: "High-converting meta funnel development, native-style TikTok ads, and robust analytics reporting designed for real, scalable ROI.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-magenta" />,
      title: "App Development",
      description: "Tailored native iOS & Android applications built with intuitive UI/UX design, lightning-fast rendering, and highly immersive feature-sets.",
    },
    {
      icon: <Layers className="w-6 h-6 text-magenta" />,
      title: "Content Strategy",
      description: "Comprehensive blueprint development covering hook ideas, creative direction, lighting setups, scripting templates, and distribution systems.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-brand-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-magenta/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-navy/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs uppercase tracking-widest text-magenta font-semibold font-poppins"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-font text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            What we do. <br />
            Done <span className="bg-gradient-to-r from-magenta to-[#f881a5] bg-clip-text text-transparent">exceptionally well.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-off-white/60 font-light leading-relaxed text-base md:text-lg"
          >
            We merge premium, visual-first storytelling with rock-solid technology to build channels and products that people genuinely talk about.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl border border-magenta/10 hover:border-magenta/30 hover:shadow-2xl hover:shadow-magenta/5 transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden"
            >
              {/* Inner glowing hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-navy/40 border border-magenta/10 flex items-center justify-center mb-6 group-hover:bg-magenta/10 group-hover:border-magenta/30 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-magenta transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-sm text-off-white/60 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
