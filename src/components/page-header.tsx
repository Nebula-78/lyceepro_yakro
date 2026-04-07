"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

// African-inspired pattern
function AfricanPatternOverlay({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="50" y="50" width="60" height="60" fill="currentColor" opacity="0.06" />
      <rect x="130" y="50" width="60" height="60" fill="currentColor" opacity="0.04" />
      <rect x="210" y="50" width="60" height="60" fill="currentColor" opacity="0.06" />
      <rect x="290" y="50" width="60" height="60" fill="currentColor" opacity="0.04" />
      <rect x="90" y="110" width="60" height="60" fill="currentColor" opacity="0.05" />
      <rect x="170" y="110" width="60" height="60" fill="currentColor" opacity="0.08" />
      <rect x="250" y="110" width="60" height="60" fill="currentColor" opacity="0.05" />
      <rect x="50" y="170" width="60" height="60" fill="currentColor" opacity="0.08" />
      <rect x="130" y="170" width="60" height="60" fill="currentColor" opacity="0.05" />
      <rect x="210" y="170" width="60" height="60" fill="currentColor" opacity="0.08" />
      <rect x="290" y="170" width="60" height="60" fill="currentColor" opacity="0.05" />
      <path d="M100 100L120 80L140 100L120 120Z" fill="currentColor" opacity="0.1" />
      <path d="M200 200L220 180L240 200L220 220Z" fill="currentColor" opacity="0.12" />
      <path d="M300 300L320 280L340 300L320 320Z" fill="currentColor" opacity="0.1" />
    </svg>
  );
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-dark to-dark" />

      {/* Radial depth */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 70% 60% at 25% 40%, rgba(26, 95, 42, 0.35) 0%, transparent 65%),
          radial-gradient(ellipse 50% 70% at 75% 55%, rgba(232, 93, 38, 0.18) 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at 50% 25%, rgba(240, 160, 48, 0.12) 0%, transparent 50%)
        `
      }} />

      {/* African pattern */}
      <AfricanPatternOverlay className="absolute inset-0 w-full h-full text-white opacity-50" />

      {/* Floating decorations */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.15, rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-16 w-40 h-40 border-2 border-white/20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 right-20 w-28 h-28 border border-accent/30 rotate-45"
      />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent/30 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-secondary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 40C672 48 768 64 864 68C960 72 1056 64 1152 56C1248 48 1344 40 1392 36L1440 32V80H0Z" fill="var(--background)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Lycée Professionnel de Yamoussoukro
          </motion.div>

          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="w-20 h-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-full mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {children}
      </div>
    </section>
  );
}
