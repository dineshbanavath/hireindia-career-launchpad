import { Bell } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const updates = [
  { tag: "New Batch", title: "Python Full Stack – March 2026 Batch", desc: "Enrollments open for the new Python Full Stack batch starting March 20, 2026.", date: "Mar 10, 2026" },
  { tag: "Workshop", title: "React & Next.js Workshop", desc: "Free weekend workshop on building production-ready apps with React and Next.js.", date: "Mar 15, 2026" },
  { tag: "Placement Drive", title: "Mega Placement Drive – April 2026", desc: "Top companies hiring — register now for our upcoming mega placement drive.", date: "Apr 5, 2026" },
  { tag: "Seminar", title: "Career Guidance Seminar", desc: "Expert panel discussion on career paths in technology and how to navigate the industry.", date: "Mar 22, 2026" },
];

const UpdatesSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Updates" title="Latest News" subtitle="Stay informed with our latest announcements, batch schedules, and events." />

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {updates.map((u, i) => (
          <AnimatedSection key={u.title} delay={i * 0.08}>
            <div className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="w-4 h-4 text-secondary" />
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{u.tag}</span>
                <span className="text-xs text-muted-foreground ml-auto">{u.date}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{u.title}</h3>
              <p className="text-sm text-muted-foreground">{u.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default UpdatesSection;
