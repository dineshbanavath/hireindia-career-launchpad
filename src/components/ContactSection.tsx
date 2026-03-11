import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Contact" title="Get In Touch" subtitle="Have questions? Reach out to us and we'll get back to you promptly." />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-lg font-semibold gradient-primary text-primary-foreground shadow-button hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+91 9876 543 210" },
                { icon: Mail, label: "Email", value: "info@hireindia.com" },
                { icon: Mail, label: "Support", value: "support@hireindia.com" },
                { icon: Mail, label: "HR", value: "hr@hireindia.com" },
                { icon: MapPin, label: "Office", value: "HIREINDIA, Tech Park, Hyderabad, India" },
              ].map((c) => (
                <div key={c.value} className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-card">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.label}</p>
                    <p className="text-foreground font-medium">{c.value}</p>
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden shadow-card h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698398705!2d78.24323005!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1678900000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HIREINDIA Location"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
