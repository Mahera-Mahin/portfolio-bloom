import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Brain, Palette, Database, 
  Globe, Smartphone, Cloud, Terminal 
} from "lucide-react";

const skills = [
  {
    icon: Brain,
    name: "Machine Learning",
    description: "PyTorch, TensorFlow, Scikit-learn",
    level: 90,
    color: "from-primary to-primary/60",
  },
  {
    icon: Code2,
    name: "Frontend Development",
    description: "React, TypeScript, Next.js",
    level: 95,
    color: "from-accent to-accent/60",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Figma, Framer, Tailwind CSS",
    level: 85,
    color: "from-primary to-accent",
  },
  {
    icon: Database,
    name: "Backend & APIs",
    description: "Node.js, Python, PostgreSQL",
    level: 80,
    color: "from-primary/80 to-primary/40",
  },
  {
    icon: Globe,
    name: "Web Technologies",
    description: "HTML, CSS, JavaScript, REST",
    level: 95,
    color: "from-accent/80 to-accent/40",
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    description: "AWS, Docker, CI/CD",
    level: 75,
    color: "from-primary to-primary/50",
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Skills</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and skills I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-primary-foreground`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">Proficiency</span>
                <span className="text-xs font-medium text-foreground">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
