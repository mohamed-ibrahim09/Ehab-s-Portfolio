"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MagneticButton } from "@/components/smooth-scroll";

const skillCategories = [
  {
    title: "Design",
    description: "Crafting visual narratives",
    items: [
      { name: "Logo Design", level: 95 },
      { name: "Brand Identity", level: 90 },
      { name: "Social Media", level: 95 },
      { name: "Print & Digital", level: 85 },
      { name: "Marketing Materials", level: 90 },
    ],
  },
  {
    title: "UI/UX",
    description: "Building intuitive experiences",
    items: [
      { name: "Web Design", level: 92 },
      { name: "Mobile Apps", level: 88 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 85 },
      { name: "Design Systems", level: 80 },
    ],
  },
  {
    title: "Tools",
    description: "Mastering the craft",
    items: [
      { name: "Adobe Photoshop", level: 92 },
      { name: "Adobe Illustrator", level: 97 },
      { name: "Figma", level: 90 },
    ],
  },
  {
    title: "Technical",
    description: "Bridging design & code",
    items: [
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
      { name: "Networking (CCNA)", level: 65 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-card relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative">
        {/* Label */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Expertise
            </span>
            <motion.div 
              className="w-8 h-px bg-foreground mt-4"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </div>

        {/* Skills grid */}
        <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Category header */}
              <div className="mb-8">
                <motion.div
                  className="flex items-baseline gap-3 mb-2"
                  animate={{ x: hoveredCategory === index ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs text-muted-foreground num">0{index + 1}</span>
                  <h3 className="text-2xl font-serif">{category.title}</h3>
                </motion.div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>

              {/* Skills with animated bars */}
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                  >
                    <MagneticButton className="w-full">
                      <div className="group/skill cursor-default">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm group-hover/skill:text-foreground transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground num opacity-0 group-hover/skill:opacity-100 transition-opacity">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-px bg-border relative overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-foreground"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.6 + index * 0.1 + skillIndex * 0.1,
                              ease: [0.22, 1, 0.36, 1] 
                            }}
                          />
                        </div>
                      </div>
                    </MagneticButton>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-transparent group-hover:border-foreground transition-colors duration-500"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
