import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/hireindia-logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Training Programs", href: "#training" },
  { label: "Placements", href: "#placements" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  "Python Full Stack",
  "Java Full Stack",
  "MERN Stack",
  "Data Science",
  "Cloud Computing",
  "DevOps",
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="HIREINDIA" className="h-12 w-auto brightness-0 invert" />
            <div>
              <h3 className="font-bold text-lg">HIREINDIA</h3>
              <p className="text-xs text-primary-foreground/60">Step of Career Success</p>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            Empowering careers through quality training and comprehensive placement support.
          </p>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Training Programs */}
        <div>
          <h4 className="font-bold text-lg mb-5">Training Programs</h4>
          <ul className="space-y-3">
            {programs.map((p) => (
              <li key={p} className="text-sm text-primary-foreground/70">{p}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-5">Contact Info</h4>
          <div className="space-y-4 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <div>
                <p>info@hireindia.com</p>
                <p>support@hireindia.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <div>
                <p>+91 9876543210</p>
                <p>+91 9876543211</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <p>Tech Plaza, 4th Floor<br />MG Road, Bangalore – 560001</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <p>© 2026 HIREINDIA – Step of Career Success. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
