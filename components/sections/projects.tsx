"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Lock, Eye, ExternalLink } from "lucide-react";
import { MagneticButton } from "@/components/smooth-scroll";
import { TextScramble } from "@/components/text-effects";

const projects = [
  {
    id: 1,
    title: "Lilly Trading",
    category: "Web Design",
    description: "Complete company website for a Qatari trading enterprise. Modern UX architecture with brand-aligned visual identity and seamless user journeys.",
    link: "https://lilly-trading.odoo.com/",
    year: "2023",
    featured: true,
    color: "#6366f1",
  },
];

const workPhotos = [
  "/photos/work-01.jpeg",
  "/photos/work-02.png",
  "/photos/work-03.png",
  "/photos/work-04.jpeg",
  "/photos/work-05.jpeg",
  "/photos/work-06.png",
  "/photos/work-07.jpeg",
  "/photos/work-08.png",
  "/photos/work-09.png",
  "/photos/work-10.png",
  "/photos/work-11.jpeg",
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHoveringSecret, setIsHoveringSecret] = useState(false);

  return (
    <section id="work" ref={ref} className="px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-card relative overflow-hidden">
      {/* ── Work Showcase Slider ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            15 Happy Clients
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">Work Showcase</span>
        </div>

        {/* Slider container */}
        <div className="work-slider-wrap">
          {/* Edge fade overlays */}
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 60, background: "linear-gradient(to right, var(--card), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 60, background: "linear-gradient(to left, var(--card), transparent)", zIndex: 2, pointerEvents: "none" }} />

          <div className="work-photo-track">
            {[...workPhotos, ...workPhotos].map((src, i) => (
              <div key={i} className="work-photo-slide">
                <img
                  src={src}
                  alt={`Work sample ${(i % workPhotos.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-border to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 0.5 } : {}}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
          />
        ))}
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
              Selected Work
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

        {/* Projects */}
        <div className="lg:col-span-10">
          {/* Featured Project with 3D tilt */}
          {projects.filter((p) => p.featured).map((project) => (
            <FeaturedProject key={project.id} project={project} isInView={isInView} />
          ))}

          {/* Secret Project - Creative treatment */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onMouseEnter={() => setIsHoveringSecret(true)}
            onMouseLeave={() => setIsHoveringSecret(false)}
            className="relative mb-16 group"
          >
            <div className="border border-border p-8 md:p-12 relative overflow-hidden bg-background">
              {/* Animated scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Glitch effect on hover */}
              <motion.div
                className="absolute inset-0 bg-foreground/5"
                animate={isHoveringSecret ? {
                  opacity: [0, 0.1, 0, 0.05, 0],
                  x: [0, -2, 2, -1, 0],
                } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-12">
                  <motion.span
                    className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
                    animate={isHoveringSecret ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isHoveringSecret ? Infinity : 0 }}
                  >
                    {isHoveringSecret ? <TextScramble>Classified</TextScramble> : "Classified"}
                  </motion.span>
                  <motion.div
                    animate={{ rotate: isHoveringSecret ? [0, -10, 10, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>

                <div className="py-8 md:py-16 text-center">
                  <motion.h3
                    className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6"
                    animate={isHoveringSecret ? { letterSpacing: "0.1em" } : { letterSpacing: "0em" }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-muted-foreground/30">Secret</span>{" "}
                    <span className="relative">
                      Project
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground"
                        initial={{ scaleX: 0 }}
                        animate={isHoveringSecret ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </span>
                  </motion.h3>

                  <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                    Something transformative is being built. A project that merges design,
                    technology, and vision into something the region hasn&apos;t experienced before.
                  </p>

                  <MagneticButton>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 px-8 py-4 border border-border text-sm hover:bg-foreground hover:text-background transition-all duration-300 group/btn"
                      data-cursor="Notify"
                    >
                      <span>Get Early Access</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.span>
                    </a>
                  </MagneticButton>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-foreground/20" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-foreground/20" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-foreground/20" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-foreground/20" />
              </div>
            </div>

            {/* Pulsing border effect */}
            <motion.div
              className="absolute inset-0 border border-foreground/20 pointer-events-none"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.005, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Coming Soon Projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { title: "Brand Identity System", category: "Branding", desc: "Complete visual language for an emerging tech startup" },
              { title: "Mobile App UI", category: "UI/UX", desc: "E-commerce experience reimagined for Gen-Z users" },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="border border-border p-6 hover:border-foreground/30 transition-all duration-500 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {project.category}
                    </span>
                    <Eye className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-serif mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Coming Soon</span>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-amber-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Featured project with 3D tilt effect
function FeaturedProject({ project, isInView }: { project: typeof projects[0]; isInView: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group block mb-16 perspective-1000"
      data-cursor="View"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="border border-border p-8 md:p-12 hover:border-foreground/30 transition-colors duration-500 relative overflow-hidden">
        {/* Hover gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.color}10 0%, transparent 50%)`,
          }}
        />

        <div className="relative" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {project.category}
              </span>
              <span className="w-8 h-px bg-border" />
              <span className="text-xs num text-muted-foreground">{project.year}</span>
            </div>
            <MagneticButton>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-colors duration-300">
                <ExternalLink className="w-4 h-4 group-hover:text-background transition-colors" />
              </div>
            </MagneticButton>
          </div>

          <div className="aspect-[16/9] bg-secondary mb-8 overflow-hidden relative">
            <img
              src="/lilly-trading-preview.png"
              alt="Lilly Trading website preview"
              className="w-full h-full object-cover object-top"
            />

            {/* Animated overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
            >
              <span className="text-sm">View Live Project</span>
            </motion.div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <motion.h3
                className="text-3xl md:text-5xl font-serif mb-3"
                style={{ transform: "translateZ(30px)" }}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground max-w-lg">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
