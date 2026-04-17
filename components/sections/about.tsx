"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WordReveal } from "@/components/text-effects";
import { Parallax } from "@/components/smooth-scroll";

export function AboutSection() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { value: "4+", label: "Years of experience", suffix: "" },
    { value: "50", label: "Projects delivered", suffix: "+" },
    { value: "15", label: "Happy clients", suffix: "+" },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      style={{ position: "relative" }}
      className="px-6 md:px-12 lg:px-24 py-32 md:py-48 overflow-hidden"
    >
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <motion.span 
          className="text-[20vw] font-serif text-foreground/[0.02] whitespace-nowrap"
          style={{ y: textY }}
        >
          DESIGNER
        </motion.span>
      </div>

      <div className="h-line mb-24" />

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative">
        {/* Label */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              About
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

        {/* Main content */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-light mb-8">
              <span className="font-serif italic text-muted-foreground">I believe</span> in the power of design to transform brands and create meaningful connections.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              <WordReveal delay={0.5}>
                Currently studying Artificial Intelligence with a specialization in Cyber Security at Menoufia University. I bring both artistic vision and technical precision to every project.
              </WordReveal>
            </p>
            
            <p className="text-foreground text-lg">
              My work spans from <span className="border-b border-foreground">brand identity systems</span> and <span className="border-b border-foreground">social media campaigns</span> to <span className="border-b border-foreground">web applications</span> and <span className="border-b border-foreground">mobile interfaces</span>.
            </p>
          </motion.div>

          {/* Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 overflow-hidden border-y border-border py-4"
          >
            <div className="animate-marquee flex gap-8 whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 text-sm text-muted-foreground">
                  <span>Graphic Design</span>
                  <span className="text-foreground">*</span>
                  <span>UI/UX</span>
                  <span className="text-foreground">*</span>
                  <span>Brand Identity</span>
                  <span className="text-foreground">*</span>
                  <span>Web Design</span>
                  <span className="text-foreground">*</span>
                  <span>Mobile Apps</span>
                  <span className="text-foreground">*</span>
                  <span>Social Media</span>
                  <span className="text-foreground">*</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats with animated counters */}
        <div className="lg:col-span-4 lg:pl-16">
          <Parallax offset={30}>
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                  className="group border-t border-border pt-6 hover:border-foreground transition-colors duration-500"
                >
                  <motion.div 
                    className="flex items-baseline gap-1"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-6xl md:text-7xl font-serif num">{stat.value}</span>
                    <span className="text-3xl font-serif text-muted-foreground">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
