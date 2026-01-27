import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ExternalLink, Github, Brain, Globe, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Resume Analyzer",
    category: "AI Project",
    icon: Brain,
    description: "AI-powered resume parsing and analysis system with skill extraction and job matching capabilities.",
    longDescription: "Built an intelligent resume parsing system that uses NLP and machine learning to extract skills, experience, and qualifications from resumes. The system provides insights and matches candidates with relevant job opportunities based on skill compatibility.",
    techStack: ["Python", "NLP", "Machine Learning", "Flask", "React"],
    features: [
      "AI-powered resume parsing",
      "Skill extraction and matching",
      "Clean UI with insights dashboard",
      "NLP + data processing pipeline"
    ],
    color: "from-primary to-primary/60",
  },
  {
    id: 2,
    title: "Wanderlust",
    category: "Full-Stack Project",
    icon: Globe,
    description: "Travel-based web application with React frontend, backend APIs, and database integration.",
    longDescription: "A comprehensive travel planning platform that helps users discover destinations, plan trips, and share experiences. Built with a focus on clean UI/UX and seamless user flow across all devices.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "Full-stack travel application",
      "React frontend with modern UI",
      "Backend APIs with Express",
      "Database integration with MongoDB"
    ],
    color: "from-accent to-accent/60",
  },
  {
    id: 3,
    title: "Simon Says Game",
    category: "Interactive Project",
    icon: Gamepad2,
    description: "Interactive browser-based memory game with smooth animations and responsive design.",
    longDescription: "A classic Simon Says memory game reimagined with modern web technologies. Features engaging UI feedback animations, progressive difficulty levels, and responsive design that works across all devices.",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    features: [
      "Interactive browser-based game",
      "JavaScript game logic",
      "UI feedback animations",
      "Responsive user interaction"
    ],
    color: "from-primary to-accent",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Projects</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of projects showcasing AI, full-stack development, and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header with Icon */}
              <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                <project.icon className="w-16 h-16 text-primary-foreground opacity-90" />
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full glass-card rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 hover:bg-card transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className={`h-48 bg-gradient-to-br ${selectedProject.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                <selectedProject.icon className="w-20 h-20 text-primary-foreground opacity-90" />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10" />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
