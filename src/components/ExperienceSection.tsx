import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Brain, Eye, Users, Cpu, Layers } from "lucide-react";

const experienceDetails = [
  {
    icon: Brain,
    title: "AI Modules Development",
    description: "Supported AI modules including chatbots, automated floorplan generation, and rendering pipelines.",
  },
  {
    icon: Eye,
    title: "Immersive Visualization",
    description: "Worked on an AI-powered immersive visualization platform using Generative AI and VR/AR workflows.",
  },
  {
    icon: Layers,
    title: "Cloud-Based Systems",
    description: "Contributed to cloud-based systems for scalable and efficient platform delivery.",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description: "Collaborated with engineering and product teams to deliver impactful features.",
  },
];

export function ExperienceSection() {
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
    <section id="experience" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on experience in AI, product development, and immersive technologies
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Main Experience Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            {/* Company Header */}
            <div className="relative flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground w-fit">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Spatium Realty XR
                </h3>
                <p className="text-lg text-primary font-medium">Product Intern</p>
                <p className="text-muted-foreground text-sm mt-1">June 2025 – Present</p>
              </div>
            </div>

            {/* Timeline Line for Visual Effect */}
            <div className="absolute left-[2.25rem] md:left-[3.25rem] top-32 bottom-8 w-px bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />

            {/* Role Overview */}
            <p className="text-muted-foreground text-lg mb-8 relative">
              Working on an AI-powered immersive visualization platform, combining Generative AI, 
              VR/AR workflows, and cloud-based systems to revolutionize real estate experiences.
            </p>

            {/* Responsibilities Grid */}
            <div className="grid md:grid-cols-2 gap-6 relative">
              {experienceDetails.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Technologies */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Key Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {["Generative AI", "VR/AR", "Cloud Systems", "Product Research", "User Analytics", "Chatbots"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
