import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Brain, Server, Wrench,
  FileCode, Database, Cpu, GitBranch
} from "lucide-react";

// Organized skill categories
const skillCategories = [
  {
    title: "Frontend & Web Development",
    icon: Code2,
    color: "from-primary to-primary/60",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive UI", "REST APIs"],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    color: "from-accent to-accent/60",
    skills: ["Node.js", "Express.js", "Flask", "API Development", "System Design Basics", "MongoDB", "SQL"],
  },
  {
    title: "AI / ML Skills",
    icon: Brain,
    color: "from-primary to-accent",
    skills: ["Python", "NumPy", "Pandas", "Machine Learning Fundamentals", "Generative AI Concepts", "Chatbot Systems", "Resume Analysis Systems"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-accent/80 to-primary/60",
    skills: ["Git", "GitHub", "VS Code", "Docker (Basics)", "Agile Development"],
  },
];

export function SkillsSection() {
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
            My <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and skills I use to bring AI-powered ideas to life
          </p>
        </motion.div>

        {/* Skills Grid - 2x2 Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 hover-lift group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-primary-foreground`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
