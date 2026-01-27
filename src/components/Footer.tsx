import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="text-xl font-display font-bold"
              whileHover={{ scale: 1.02 }}
            >
              <span className="gradient-text">Alex Chen</span>
            </motion.a>
            <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-3 h-3 text-accent" /> in San Francisco
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Right - Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
