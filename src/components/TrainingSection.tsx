import { Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const courses = [
  { title: "Python Full Stack Development", duration: "6 Months", desc: "Master Python, Django, REST APIs, and frontend technologies to become a full stack developer." },
  { title: "Java Full Stack Development", duration: "6 Months", desc: "Learn Java, Spring Boot, Microservices, and React to build enterprise-grade applications." },
  { title: "MERN Stack Development", duration: "5 Months", desc: "Build modern web apps with MongoDB, Express.js, React.js, and Node.js from scratch." },
  { title: "Data Science & Analytics", duration: "4 Months", desc: "Explore Python, Machine Learning, Deep Learning, and data visualization techniques." },
  { title: "Web Development Bootcamp", duration: "3 Months", desc: "Learn HTML, CSS, JavaScript, and responsive design fundamentals for the modern web." },
];

const colors = [
  "from-secondary to-secondary/70",
  "from-primary to-primary/70",
  "from-accent to-accent/70",
  "from-secondary to-accent",
  "from-primary to-secondary",
];

const TrainingSection = () => (
  <section id="training" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Training Programs" title="Our Courses" subtitle="Industry-aligned programs designed to make you job-ready from day one." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.08}>
            <div className="rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col group">
              <div className={`h-40 bg-gradient-to-br ${colors[i]} flex items-center justify-center`}>
                <span className="text-5xl font-extrabold text-primary-foreground/20">0{i + 1}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" /> {c.duration}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <a href="#contact" className="mt-5 inline-flex justify-center px-5 py-2.5 rounded-lg text-sm font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Enroll Now
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
