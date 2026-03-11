import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
          >
            Step of Career Success
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6"
          >
            Build Your Career With{" "}
            <span className="gradient-text">HIREINDIA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Professional Software Training, Weekly Workshops, Interview Preparation and Placement Support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#training"
              className="px-8 py-3.5 rounded-lg font-semibold gradient-accent text-primary shadow-button transition-transform hover:scale-105"
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
