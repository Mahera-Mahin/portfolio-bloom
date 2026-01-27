import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToWork = () => {
    const element = document.querySelector("#gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="floating-blob w-[500px] h-[500px] -top-48 -right-48"
          style={{ background: "var(--gradient-blob-1)" }}
        />
        <div 
          className="floating-blob animate-blob-delay-2 w-[400px] h-[400px] top-1/3 -left-32"
          style={{ background: "var(--gradient-blob-2)" }}
        />
        <div 
          className="floating-blob animate-blob-delay-4 w-[350px] h-[350px] bottom-20 right-1/4"
          style={{ background: "var(--gradient-blob-1)" }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Main Heading with Text Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Alex Chen</span>
            </motion.h1>
          </div>

          {/* Role/Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {["AI Engineer", "Frontend Developer", "Student"].map((role, index) => (
              <span
                key={role}
                className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting intelligent solutions at the intersection of AI and beautiful user experiences. 
            Passionate about turning complex ideas into elegant, functional products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" onClick={scrollToWork}>
              <ExternalLink className="w-5 h-5" />
              View Work
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#" download>
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
