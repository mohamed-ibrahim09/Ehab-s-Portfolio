"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/smooth-scroll";
import { TextScramble, TypeWriter } from "@/components/text-effects";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const smoothY = useSpring(y, { damping: 20, stiffness: 100 });
  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ position: "relative" }}
      className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-8 overflow-hidden will-change-transform"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 50%)",
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 50%)",
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Top bar */}
      <motion.header
        style={{ opacity: smoothOpacity }}
        className="relative flex items-center justify-between z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <motion.div
            className="w-2 h-2 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Available for work
          </span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex items-center gap-12 text-sm text-muted-foreground"
        >
          {["Work", "About", "Contact"].map((item, i) => (
            <MagneticButton key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="link-hover hover:text-foreground transition-colors py-2"
                data-cursor="View"
              >
                <TextScramble>{item}</TextScramble>
              </a>
            </MagneticButton>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          Cairo, EG
        </motion.div>
      </motion.header>

      {/* Main content */}
      <motion.div
        style={{ y: smoothY, opacity: smoothOpacity, scale: smoothScale }}
        className="flex-1 flex flex-col justify-center -mt-20 relative z-10"
      >
        <div className="max-w-6xl flex items-center justify-between gap-12 md:gap-20">
          {/* Left: Name and info */}
          <div className="flex-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground text-sm md:text-base tracking-wide">
                <span className="font-serif italic">Creative Designer</span> crafting digital experiences
              </span>
            </motion.div>

            {/* Main title - BOLD and on left */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%", rotateX: -80 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(3rem,15vw,13rem)] font-serif font-bold leading-[0.85] tracking-[-0.04em]"
                style={{ transformOrigin: "bottom" }}
              >
                Mohammed
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%", rotateX: -80 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(3rem,15vw,13rem)] font-serif font-bold leading-[0.85] tracking-[-0.04em]"
                style={{ transformOrigin: "bottom" }}
              >
                Ehab
              </motion.h1>
            </div>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="h-px w-12 bg-border" />
              <span className="text-xl md:text-2xl text-muted-foreground">
                <TypeWriter
                  words={["Graphic Designer", "UI/UX Designer", "Brand Strategist", "Creative Director"]}
                />
              </span>
            </motion.div>
          </div>

          {/* Right: Profile image with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex flex-shrink-0"
          >
            <div className="relative" style={{ width: "320px", height: "420px", overflow: "hidden" }}>
              {/* Inner layer is 140% size offset -20% → person appears 40% bigger inside the same frame */}
              <div style={{ position: "absolute", top: "-20%", left: "-20%", width: "140%", height: "140%" }}>
                <Image
                  src="/profile.png"
                  alt="Mohammed Ehab"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.footer
        style={{ opacity: smoothOpacity }}
        className="relative flex items-end justify-between z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-xs text-sm text-muted-foreground leading-relaxed"
        >
          <span className="text-foreground font-medium">4+ years</span> crafting visual identities and digital experiences for clients across the Middle East.
        </motion.div>

        <MagneticButton>
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            data-cursor="Scroll"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDownRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </MagneticButton>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:block text-right"
        >
          <div className="text-4xl font-serif num">2024</div>
          <div className="text-xs mt-1 tracking-wide text-muted-foreground">Portfolio</div>
        </motion.div>
      </motion.footer>

      {/* Scroll indicator line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      />
    </section>
  );
}
