import { CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const workshops = [
  { title: "Python Programming Workshop", date: "Every Saturday", desc: "Deep dive into Python fundamentals, data structures, and real-world projects." },
  { title: "Web Development Bootcamp", date: "Every Sunday", desc: "Build responsive websites with HTML, CSS, JavaScript, and modern frameworks." },
  { title: "React Development Workshop", date: "Bi-Weekly", desc: "Master React.js including hooks, state management, and production deployment." },
  { title: "Database & SQL Workshop", date: "Monthly", desc: "Learn SQL, database design, optimization, and NoSQL database fundamentals." },
];

const WorkshopsSection = () => (
  <section id="workshops" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Workshops" title="Weekly Technical Workshops" subtitle="Stay ahead with our regular hands-on workshops covering the latest technologies." />

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {workshops.map((w, i) => (
          <AnimatedSection key={w.title} delay={i * 0.1}>
            <div className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full border-l-4 border-secondary">
              <div className="flex items-center gap-2 text-sm font-medium text-secondary mb-3">
                <CalendarDays className="w-4 h-4" /> {w.date}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{w.desc}</p>
              <a href="#contact" className="text-sm font-semibold text-secondary hover:underline">Register →</a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopsSection;
