import { Code, Calendar, Users, Briefcase, Building, Factory } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: Code, title: "Software Training Programs", desc: "Comprehensive training in Python, Java, MERN, Data Science and more with industry-expert instructors." },
  { icon: Calendar, title: "Weekly Technical Workshops", desc: "Hands-on workshops every week covering trending technologies and practical coding challenges." },
  { icon: Users, title: "Interview Preparation Sessions", desc: "Weekly mock interviews, group discussions, and resume building to prepare you for real job interviews." },
  { icon: Briefcase, title: "Placement Assistance", desc: "Dedicated placement support connecting you with top hiring companies across industries." },
  { icon: Building, title: "Banking Sector Consulting", desc: "Technology consulting services for banking institutions to modernize their digital infrastructure." },
  { icon: Factory, title: "Manufacturing Tech Support", desc: "Industry 4.0 technology solutions and training for manufacturing companies." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Our Services" title="What We Offer" subtitle="Comprehensive services designed to launch your career and empower businesses." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="p-8 rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full group cursor-default">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
