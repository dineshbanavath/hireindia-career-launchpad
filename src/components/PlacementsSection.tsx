import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const stats = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 200, suffix: "+", label: "Successful Placements" },
  { value: 50, suffix: "+", label: "Hiring Partners" },
];

const testimonials = [
  { name: "Rahul Sharma", company: "TCS", feedback: "HIREINDIA transformed my career. The structured training and mock interviews gave me confidence to crack TCS." },
  { name: "Priya Patel", company: "Infosys", feedback: "The weekly workshops and placement support were exceptional. I got placed in Infosys within 3 months of completing training." },
  { name: "Amit Kumar", company: "Wipro", feedback: "Best investment in my career. The mentors are highly knowledgeable and the curriculum is industry-relevant." },
];

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const PlacementsSection = () => (
  <section id="placements" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Placements" title="Our Success Story" subtitle="Proven track record of transforming careers and building industry-ready professionals." />

      {/* Stats */}
      <AnimatedSection className="mb-16">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto p-8 rounded-2xl bg-card shadow-card">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 italic">"{t.feedback}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Placed at {t.company}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PlacementsSection;
