"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/smooth-scroll";
import { RevealText } from "@/components/text-effects";

const socialLinks = [
  { name: "Behance", href: "https://www.behance.net/muhamadehab666" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ehab-009565372/" },
  { name: "Email", href: "mailto:muhamadyt666@gmail.com" },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="px-6 md:px-12 lg:px-24 py-32 md:py-48 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="h-line mb-24" />

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
              Contact
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

        {/* Content */}
        <div className="lg:col-span-10">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
              <RevealText delay={0.3}>Let&apos;s create</RevealText>
              <br />
              <span className="font-serif italic text-muted-foreground">
                <RevealText delay={0.5}>something great</RevealText>
              </span>
            </h2>
            <motion.p 
              className="text-muted-foreground max-w-xl text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Available for freelance projects and remote opportunities. 
              Currently based in Cairo, Egypt.
            </motion.p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { icon: Mail, label: "Email", value: "muhamadyt666@gmail.com", href: "mailto:muhamadyt666@gmail.com" },
              { icon: Phone, label: "Phone", value: "+20 128 739 9028", href: "tel:+201287399028" },
              { icon: MapPin, label: "Location", value: "Cairo, Egypt", href: null },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a 
                    href={item.href}
                    className="block p-6 border border-border hover:border-foreground/30 transition-all duration-300 hover:bg-secondary/30"
                  >
                    <item.icon className="w-5 h-5 text-muted-foreground mb-4 group-hover:text-foreground transition-colors" />
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                      {item.label}
                    </span>
                    <span className="text-foreground group-hover:translate-x-1 inline-block transition-transform">
                      {item.value}
                    </span>
                  </a>
                ) : (
                  <div className="p-6 border border-border">
                    <item.icon className="w-5 h-5 text-muted-foreground mb-4" />
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                      {item.label}
                    </span>
                    <span className="text-foreground">{item.value}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {socialLinks.map((link, index) => (
              <MagneticButton key={link.name}>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group flex items-center gap-3 px-6 py-4 border border-border hover:bg-foreground hover:text-background transition-all duration-300"
                  data-cursor="Visit"
                >
                  <span className="text-sm font-medium">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-border p-8 md:p-12 relative overflow-hidden"
          >
            {/* Animated corner */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20"
              style={{
                background: "linear-gradient(135deg, transparent 50%, var(--border) 50%)",
              }}
            />

            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Name field */}
                <div className="relative">
                  <motion.label 
                    htmlFor="name" 
                    className="text-xs tracking-[0.2em] uppercase block mb-3 transition-colors duration-300"
                    animate={{ color: focusedField === "name" ? "var(--foreground)" : "var(--muted-foreground)" }}
                  >
                    Name
                  </motion.label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-foreground"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>

                {/* Email field */}
                <div className="relative">
                  <motion.label 
                    htmlFor="email" 
                    className="text-xs tracking-[0.2em] uppercase block mb-3 transition-colors duration-300"
                    animate={{ color: focusedField === "email" ? "var(--foreground)" : "var(--muted-foreground)" }}
                  >
                    Email
                  </motion.label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-foreground"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="mb-10 relative">
                <motion.label 
                  htmlFor="message" 
                  className="text-xs tracking-[0.2em] uppercase block mb-3 transition-colors duration-300"
                  animate={{ color: focusedField === "message" ? "var(--foreground)" : "var(--muted-foreground)" }}
                >
                  Message
                </motion.label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-foreground"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              {/* Submit button */}
              <MagneticButton>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="group relative flex items-center gap-4 px-10 py-5 bg-foreground text-background overflow-hidden disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button background animation */}
                  <motion.div
                    className="absolute inset-0 bg-muted-foreground"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10 font-medium">
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="sending"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Send className="w-4 h-4" />
                          </motion.span>
                          Sending...
                        </motion.span>
                      ) : isSubmitted ? (
                        <motion.span
                          key="sent"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Message Sent!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                  
                  {!isSubmitting && !isSubmitted && (
                    <motion.span
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.span>
                  )}
                </motion.button>
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
