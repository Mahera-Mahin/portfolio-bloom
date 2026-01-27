import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Briefcase, Sparkles, Brain, Palette, Layers } from "lucide-react";
import profileImage from "@/assets/profile-avatar.png";

const facts = [
  { icon: Code, label: "Languages", value: "Java, JavaScript" },
  { icon: Briefcase, label: "Current Role", value: "Product Intern – Spatium Realty XR" },
  { icon: Sparkles, label: "Interests", value: "AI, XR, UI/UX, Product Design" },
];

const interests = [
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Layers, label: "Product Strategy" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Mahera - AI Engineer & Product Intern" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating AI-themed badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 px-4 py-2 glass-card rounded-xl"
              >
                <span className="text-sm font-medium gradient-text">AI + Product</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-primary font-medium text-sm uppercase tracking-widest">About Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                AI-Focused{" "}
                <span className="gradient-text">Product Builder</span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am an AI-focused Product Intern with hands-on experience building AI-powered platforms, 
              frontend interfaces, and scalable systems. I enjoy combining AI, design, and product thinking 
              to build impactful solutions.
            </motion.p>

            {/* Quick Facts */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4 mb-8">
              {facts.map((fact) => (
                <motion.div
                  key={fact.label}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card p-4 hover-lift group cursor-pointer"
                >
                  <fact.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{fact.label}</p>
                  <p className="text-sm font-medium text-foreground">{fact.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-muted-foreground mb-3">Core Focus Areas:</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <motion.span
                    key={interest.label}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    <interest.icon className="w-4 h-4" />
                    {interest.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
