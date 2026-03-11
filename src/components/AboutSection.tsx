import { Target, Eye, BookOpen, Building2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import aboutImg from "@/assets/about-training.jpg";

const features = [
  { icon: Target, title: "Our Mission", desc: "Empowering students and professionals with industry-relevant skills to build rewarding careers in technology." },
  { icon: Eye, title: "Our Vision", desc: "To become India's most trusted career success partner through quality training and guaranteed placements." },
  { icon: BookOpen, title: "Training Philosophy", desc: "Hands-on, project-based learning with industry mentors ensuring practical expertise from day one." },
  { icon: Building2, title: "Industries Served", desc: "IT, Banking, Manufacturing, E-commerce, Healthcare, and more — we prepare you for every sector." },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading badge="About Us" title="Who We Are" subtitle="HIREINDIA is dedicated to helping students and professionals build successful careers in the technology industry." />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="relative">
            <img src={aboutImg} alt="Training session" className="rounded-2xl shadow-card w-full" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-accent opacity-20 -z-10" />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
