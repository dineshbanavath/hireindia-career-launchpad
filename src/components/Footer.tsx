import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/hireindia-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  { label: "Workshops", href: "#workshops" },
  { label: "Placements", href: "#placements" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="HIREINDIA" className="h-14 w-auto mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            HIREINDIA – Step of Career Success. Building the bridge between talent and opportunity through world-class training and placement support.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p>info@hireindia.com</p>
            <p>support@hireindia.com</p>
            <p>+91 9876 543 210</p>
          </div>
          <div className="flex gap-3 mt-5">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-5 text-center text-sm text-primary-foreground/50">
      © 2026 HIREINDIA – Step of Career Success. All rights reserved.
    </div>
  </footer>
);

export default Footer;
