"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/smooth-scroll";

export function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer ref={ref} style={{ position: "relative" }} className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border overflow-hidden">
      {/* Large background text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ y, opacity }}
      >
        <span className="text-[15vw] font-serif text-foreground/[0.02] whitespace-nowrap">
          LET&apos;S TALK
        </span>
      </motion.div>

      <div className="relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl font-serif">Mohammed Ehab</span>
            <p className="text-sm text-muted-foreground mt-2">
              Graphic & UI/UX Designer
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-4">
              Navigation
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {["Work", "About", "Experience", "Contact"].map((link) => (
                <MagneticButton key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-sm link-hover text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-4">
              Connect
            </span>
            <div className="flex gap-6">
              {[
                { name: "Behance", href: "https://www.behance.net/muhamadehab666" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ehab-009565372/" },
                { name: "Email", href: "mailto:muhamadyt666@gmail.com" },
              ].map((link) => (
                <MagneticButton key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mohammed Ehab. All rights reserved.
          </span>
          
          <MagneticButton>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Back to top</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-3 h-3 rotate-[-45deg]" />
              </motion.span>
            </button>
          </MagneticButton>

          <span className="text-xs text-muted-foreground num">
            {new Date().toLocaleDateString("en-US", { 
              month: "short", 
              day: "numeric",
              year: "numeric"
            })}
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
