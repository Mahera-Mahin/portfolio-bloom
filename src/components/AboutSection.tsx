import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Coffee, Code, Gamepad2, Music } from "lucide-react";
import profileImage from "@/assets/profile-avatar.png";

const facts = [
  { icon: MapPin, label: "Based in", value: "San Francisco, CA" },
  { icon: GraduationCap, label: "Studying", value: "Computer Science @ Stanford" },
  { icon: Code, label: "Languages", value: "Python, TypeScript, Rust" },
];

const interests = [
  { icon: Coffee, label: "Coffee enthusiast" },
  { icon: Gamepad2, label: "Indie games" },
  { icon: Music, label: "Lo-fi beats" },
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
                  alt="Alex Chen - AI Engineer & Frontend Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-primary font-medium text-sm uppercase tracking-widest">About Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                Building the future,{" "}
                <span className="gradient-text">one line at a time</span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a passionate developer and AI enthusiast with a love for creating 
              intuitive digital experiences. Currently pursuing my Computer Science degree 
              while building projects that merge cutting-edge AI with beautiful frontend design.
            </motion.p>

            {/* Quick Facts */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4 mb-8">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="glass-card p-4 hover-lift group cursor-pointer"
                >
                  <fact.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{fact.label}</p>
                  <p className="text-sm font-medium text-foreground">{fact.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-muted-foreground mb-3">When I'm not coding:</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    <interest.icon className="w-4 h-4" />
                    {interest.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
