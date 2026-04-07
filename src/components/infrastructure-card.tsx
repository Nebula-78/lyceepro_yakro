"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface InfrastructureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
}

export default function InfrastructureCard({
  title,
  description,
  icon: Icon,
  href,
  index = 0,
}: InfrastructureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Icon with depth */}
          <div className="relative mb-5">
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            {/* Subtle shadow */}
            <div className="absolute -bottom-1 -right-1 w-16 h-16 rounded-xl bg-accent/10 blur-lg" />
          </div>

          {/* Content */}
          <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-white/50 text-sm mb-4 leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Link with animation */}
          <div className="flex items-center gap-2 text-accent/70 font-medium text-sm group-hover:gap-3 group-hover:text-accent transition-all">
            <span>Découvrir</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
