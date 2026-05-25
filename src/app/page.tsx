import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import BentoWhyUs from "@/components/BentoWhyUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating Modern Header */}
      <Navbar />
      
      {/* Page Sections */}
      <main className="flex-1 w-full">
        {/* Cinematic Hero Section */}
        <Hero />
        
        {/* Social Proof / Logo Cloud Section */}
        <SocialProof />
        
        {/* Interactive Services Section */}
        <Services />
        
        {/* Bento Grid Feature Section */}
        <BentoWhyUs />
        
        {/* Mockup Case Study Showcase */}
        <Portfolio />
        
        {/* Sleek Timeline Process Section */}
        <Process />
        
        {/* Staggered Testimonial Cards Section */}
        <Testimonials />
        
        {/* Booking Contact Section */}
        <CTA />
      </main>

      {/* Premium Multi-Column Footer */}
      <Footer />
    </>
  );
}
