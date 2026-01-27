import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Star, Rocket, Code, Users } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "HackMIT Grand Prize Winner",
    description: "Built an AI-powered accessibility tool that won first place among 500+ teams.",
    icon: Trophy,
    highlight: true,
  },
  {
    year: "2024",
    title: "Google Summer of Code",
    description: "Selected contributor for TensorFlow, implementing new ML visualization features.",
    icon: Code,
  },
  {
    year: "2023",
    title: "Dean's List",
    description: "Recognized for academic excellence with a 3.9+ GPA in Computer Science.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Open Source Contributor",
    description: "Contributed to React and Next.js with 50+ merged pull requests.",
    icon: Star,
  },
  {
    year: "2022",
    title: "Startup Incubator",
    description: "Co-founded EdTech startup selected for Y Combinator's startup school.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Tech Community Lead",
    description: "Founded university's AI club with 200+ active members.",
    icon: Users,
  },
];

export function AchievementsSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Key moments and accomplishments from my journey
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-start gap-6 mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div
                  className={`glass-card p-6 hover-lift ${
                    achievement.highlight ? "ring-2 ring-primary/50" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-xl ${
                      achievement.highlight 
                        ? "bg-gradient-to-br from-primary to-accent text-primary-foreground" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      <achievement.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-primary">{achievement.year}</span>
                      <h3 className="text-lg font-display font-semibold text-foreground mt-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
