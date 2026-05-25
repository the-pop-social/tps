"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with The Pop Social was a complete game-changer. They built our entire landing page and short-form video framework, generating over 5M views and driving 25k waitlist signups in just 30 days. Unbelievable execution.",
      author: "Marcus Vance",
      role: "Founder, Vapor Energy",
      initials: "MV",
      rating: 5,
    },
    {
      quote: "They took my creative styling ideas and translated them into a luxury, highly professional brand identity. The website dev was absolutely flawless, and my fashion collection launch sold out completely in 48 hours.",
      author: "Anya Sterling",
      role: "Creative Icon & Designer",
      initials: "AS",
      rating: 5,
    },
    {
      quote: "Flawless tech stack development and stellar creative direction. Our user sign-ups doubled overnight after the redesign went live. Their team's UX thinking is lightyears ahead of typical corporate agencies.",
      author: "Liam Chen",
      role: "CEO, Nova AI Labs",
      initials: "LC",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-brand-dark">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-magenta/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs uppercase tracking-widest text-magenta font-semibold font-poppins">
            Client Words
          </span>
          <h2 className="hero-font text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Loved by builders.<br />
            <span className="bg-gradient-to-r from-magenta to-[#f881a5] bg-clip-text text-transparent">
              Backed by real results.
            </span>
          </h2>
          <p className="text-off-white/60 font-light max-w-xl mx-auto text-sm md:text-base">
            Read how our premium creative-tech ecosystem has helped creators and modern startup founders scale their digital businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-3xl border border-magenta/10 hover:border-magenta/25 hover:shadow-xl hover:shadow-magenta/5 transition-all duration-300 hover:scale-[1.03] group relative flex flex-col justify-between"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-magenta/5 group-hover:text-magenta/10 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Stars Rating */}
              <div className="flex items-center space-x-1 mb-6 text-magenta">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-sm md:text-base text-off-white/80 leading-relaxed font-light mb-8 italic relative z-10">
                "{t.quote}"
              </p>

              {/* Author Profile */}
              <div className="flex items-center space-x-4 border-t border-magenta/5 pt-6">
                {/* Custom premium avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-magenta via-[#1E3251] to-magenta p-0.5 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center text-xs font-bold text-magenta select-none">
                    {t.initials}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-poppins">
                    {t.author}
                  </h4>
                  <p className="text-xs text-off-white/50">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
