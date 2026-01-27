import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Import gallery images
import galleryMountains from "@/assets/gallery-mountains.jpg";
import galleryWorkspace from "@/assets/gallery-workspace.jpg";
import galleryHackathon from "@/assets/gallery-hackathon.jpg";
import galleryArt from "@/assets/gallery-art.jpg";
import galleryConference from "@/assets/gallery-conference.jpg";
import galleryBooks from "@/assets/gallery-books.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Mountain Retreat",
    category: "Travel",
    description: "Exploring the Swiss Alps",
    image: galleryMountains,
  },
  {
    id: 2,
    title: "Code & Coffee",
    category: "Lifestyle",
    description: "My daily development setup",
    image: galleryWorkspace,
  },
  {
    id: 3,
    title: "Team Hackathon",
    category: "Events",
    description: "Winning project at HackMIT",
    image: galleryHackathon,
  },
  {
    id: 4,
    title: "Art Exhibition",
    category: "Hobbies",
    description: "Contemporary art exploration",
    image: galleryArt,
  },
  {
    id: 5,
    title: "Tech Conference",
    category: "Events",
    description: "Speaking at React Summit",
    image: galleryConference,
  },
  {
    id: 6,
    title: "Book Collection",
    category: "Hobbies",
    description: "Favorite reads of 2024",
    image: galleryBooks,
  },
];

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="gallery" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Beyond <span className="gradient-text">The Code</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into my life, hobbies, and adventures
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative group cursor-pointer ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div
                className={`aspect-square ${
                  index === 0 || index === 3 ? "md:aspect-auto md:h-full" : ""
                } rounded-2xl overflow-hidden glass-card`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-background">
                    <span className="text-xs uppercase tracking-widest opacity-70">{item.category}</span>
                    <h3 className="text-lg font-display font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm opacity-80 mt-1">{item.description}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-card/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full glass-card rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 hover:bg-card transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-primary">{selectedItem.category}</span>
                <h3 className="text-2xl font-display font-semibold text-foreground mt-2">{selectedItem.title}</h3>
                <p className="text-muted-foreground mt-2">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
