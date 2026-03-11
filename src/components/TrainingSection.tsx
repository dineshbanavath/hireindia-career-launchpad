import { Clock, Monitor } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import coursePython from "@/assets/course-python.jpg";
import courseJava from "@/assets/course-java.jpg";
import courseMern from "@/assets/course-mern.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";
import courseWebdev from "@/assets/course-webdev.jpg";

const courses = [
  { title: "Python Full Stack Development", duration: "6 Months", level: "Beginner to Advanced", image: coursePython, highlights: ["Django & Flask", "React Frontend", "REST APIs", "Cloud Deployment"], desc: "Master Python, Django, REST APIs, and frontend technologies to become a full stack developer." },
  { title: "Java Full Stack Development", duration: "6 Months", level: "Intermediate", image: courseJava, highlights: ["Spring Boot", "Angular/React", "Microservices", "Cloud Deployment"], desc: "Learn Java, Spring Boot, Microservices, and React to build enterprise-grade applications." },
  { title: "MERN Stack Development", duration: "5 Months", level: "Beginner to Advanced", image: courseMern, highlights: ["MongoDB", "Express.js", "React.js", "Node.js"], desc: "Build modern web apps with MongoDB, Express.js, React.js, and Node.js from scratch." },
  { title: "Data Science & Analytics", duration: "6 Months", level: "Advanced", image: courseDatascience, highlights: ["Python & R", "Machine Learning", "Data Visualization", "AI Fundamentals"], desc: "Explore Python, Machine Learning, Deep Learning, and data visualization techniques." },
  { title: "Web Development Bootcamp", duration: "3 Months", level: "Beginner", image: courseWebdev, highlights: ["HTML & CSS", "JavaScript", "Responsive Design", "Git & GitHub"], desc: "Learn HTML, CSS, JavaScript, and responsive design fundamentals for the modern web." },
];

const TrainingSection = () => (
  <section id="training" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Training Programs" title="Our Courses" subtitle="Industry-aligned programs designed to make you job-ready from day one." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.08}>
            <div className="rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-card text-foreground shadow-md">
                  {c.level}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {c.duration}</span>
                  <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4" /> Live Projects</span>
                </div>
                <ul className="space-y-1.5 flex-1 mb-5">
                  {c.highlights.map(h => (
                    <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex justify-center px-5 py-2.5 rounded-lg text-sm font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
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
