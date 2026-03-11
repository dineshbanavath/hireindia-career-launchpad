import { Mic, FileText, Users, MessageSquare } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const features = [
  { icon: Mic, title: "Mock Interviews", desc: "Practice with realistic interview scenarios conducted by industry professionals." },
  { icon: FileText, title: "Resume Building", desc: "Get expert guidance on crafting ATS-friendly resumes that stand out." },
  { icon: Users, title: "Group Discussions", desc: "Sharpen communication and critical thinking through structured GD sessions." },
  { icon: MessageSquare, title: "Technical Prep", desc: "Master DSA, system design, and domain-specific technical questions." },
];

const InterviewSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Interview Prep" title="Weekly Interview Preparation" subtitle="Comprehensive interview training conducted every week to get you job-ready." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <div className="text-center p-8 rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full group">
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default InterviewSection;
