"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "2020 — Present",
    role: "Freelance Designer",
    company: "Self-employed",
    location: "Remote",
    description:
      "Leading end-to-end design projects for clients across Saudi Arabia, Qatar, and Egypt. Specializing in brand identity, UI/UX design, and social media campaigns that drive engagement and conversion.",
    achievements: [
      "Delivered 50+ projects across diverse industries",
      "Built lasting relationships with Middle East clients",
      "Developed expertise in regional design preferences",
    ],
    skills: ["UI/UX", "Brand Identity", "Social Media", "Web Design"],
  },
  {
    id: 2,
    period: "2023",
    role: "UI/UX & Graphic Designer",
    company: "Saudi Company",
    location: "Saudi Arabia",
    description:
      "Spearheaded the complete redesign of a mobile application and company website, resulting in improved user engagement and a cohesive brand experience.",
    achievements: [
      "Redesigned mobile app from ground up",
      "Created comprehensive design system",
      "Improved user engagement metrics",
    ],
    skills: ["Mobile UI", "Web Design", "Branding", "Design Systems"],
  },
  {
    id: 3,
    period: "2022",
    role: "Graphic Designer",
    company: "Qatari Company",
    location: "Qatar",
    description:
      "Created compelling visual content and led the website redesign initiative, establishing a stronger digital presence aligned with brand values.",
    achievements: [
      "Led complete website UI/UX overhaul",
      "Produced 100+ social media assets",
      "Established brand visual guidelines",
    ],
    skills: ["Marketing", "Web UI/UX", "Social Media", "Brand Guidelines"],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" ref={ref} className="px-6 md:px-12 lg:px-24 py-32 md:py-48">
      <div className="h-line mb-24" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Label */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Experience
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

        {/* Timeline */}
        <div className="lg:col-span-10">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                {/* Header - Always visible */}
                <motion.button
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="w-full py-8 border-t border-border grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 text-left hover:bg-secondary/20 -mx-4 px-4 transition-colors duration-300"
                >
                  <div className="md:col-span-3 text-sm text-muted-foreground num flex items-center gap-2">
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-foreground"
                      animate={{ 
                        scale: expandedId === exp.id ? [1, 1.5, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    {exp.period}
                  </div>

                  <div className="md:col-span-6">
                    <h3 className="text-xl md:text-2xl font-serif flex items-center gap-3">
                      {exp.role}
                      <span className="text-muted-foreground font-sans text-base">@ {exp.company}</span>
                    </h3>
                  </div>

                  <div className="md:col-span-3 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Expandable content */}
                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 -mx-4 px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-3" />
                        
                        <div className="md:col-span-5">
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {exp.description}
                          </p>
                          
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="flex items-start gap-3 text-sm"
                              >
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:col-span-4">
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                                className="px-3 py-1.5 text-xs border border-border hover:bg-foreground hover:text-background transition-colors duration-300"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>

          {/* Achievement highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 p-8 border border-border relative overflow-hidden group hover:border-foreground/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent" />
            
            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-amber-400 text-2xl">*</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Achievement
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif mb-3">
                  Central Bank of Egypt Competition
                </h3>
                <p className="text-muted-foreground max-w-2xl">
                  Designed a Cyber Security logo for the Central Bank of Egypt, showcasing the ability to deliver high-stakes creative work for prestigious national institutions.
                </p>
              </div>

              <div className="shrink-0 w-40 h-40 bg-white flex items-center justify-center p-4 rounded-sm">
                <img
                  src="/cbe-logo.png"
                  alt="Central Bank of Egypt logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
