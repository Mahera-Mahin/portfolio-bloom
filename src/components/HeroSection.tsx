import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text reveal animation for the name
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const name = "Mahera";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="floating-blob w-[500px] h-[500px] -top-48 -right-48"
          style={{ background: "var(--gradient-blob-1)" }}
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="floating-blob animate-blob-delay-2 w-[400px] h-[400px] top-1/3 -left-32"
          style={{ background: "var(--gradient-blob-2)" }}
          animate={{ 
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="floating-blob animate-blob-delay-4 w-[350px] h-[350px] bottom-20 right-1/4"
          style={{ background: "var(--gradient-blob-1)" }}
          animate={{ 
            x: [0, 20, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Additional floating shape for AI theme */}
        <motion.div 
          className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent)" }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            Open to Opportunities
          </motion.div>

          {/* Main Heading with Letter-by-Letter Text Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight"
            >
              Hi, I'm{" "}
              <motion.span
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="gradient-text inline-block"
              >
                {name.split("").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
          </div>

          {/* Role/Title - AI Engineer | Frontend Developer | Product Intern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {["AI Engineer", "Frontend Developer", "Product Intern"].map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building intelligent, scalable, and human-centered digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              <ExternalLink className="w-5 h-5" />
              View Projects
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
