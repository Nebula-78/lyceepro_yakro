"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass[align]} mb-12 lg:mb-16`}
    >
      <h2
        className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      <motion.div
        className="flex items-center gap-2 mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div
          className={`w-3 h-3 rounded-full ${light ? "bg-accent" : "bg-secondary"}`}
        />
        <div
          className={`w-16 h-1 rounded-full ${light ? "bg-white/40" : "bg-primary"}`}
        />
        <div
          className={`w-3 h-3 rounded-full ${light ? "bg-secondary" : "bg-accent"}`}
        />
      </motion.div>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            light ? "text-white/65" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
