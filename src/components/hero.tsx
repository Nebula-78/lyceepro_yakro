"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  showScrollIndicator?: boolean;
}

// African-inspired decorative SVG pattern (optimized: ~10 elements)
function AfricanPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="50"
        y="50"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.08"
      />
      <rect
        x="210"
        y="50"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.08"
      />
      <rect
        x="170"
        y="110"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="50"
        y="170"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="210"
        y="170"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="170"
        y="230"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.06"
      />
      <rect
        x="130"
        y="290"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.08"
      />
      <rect
        x="290"
        y="290"
        width="60"
        height="60"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M100 100L120 80L140 100L120 120Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M200 200L220 180L240 200L220 220Z"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}

// Graduation cap illustration (optimized: ~10 elements)
function EducationIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Building base */}
      <rect
        x="100"
        y="250"
        width="300"
        height="120"
        rx="8"
        fill="white"
        opacity="0.1"
      />
      <rect
        x="120"
        y="270"
        width="40"
        height="50"
        rx="4"
        fill="white"
        opacity="0.15"
      />
      <rect
        x="240"
        y="270"
        width="40"
        height="50"
        rx="4"
        fill="white"
        opacity="0.15"
      />
      <rect
        x="340"
        y="270"
        width="40"
        height="50"
        rx="4"
        fill="white"
        opacity="0.15"
      />
      {/* Door */}
      <rect
        x="210"
        y="320"
        width="80"
        height="50"
        rx="4"
        fill="white"
        opacity="0.2"
      />
      {/* Roof */}
      <path d="M80 250L250 180L420 250Z" fill="white" opacity="0.15" />
      {/* Graduation cap */}
      <path d="M250 100L180 130L250 160L320 130Z" fill="white" opacity="0.9" />
      <path
        d="M180 130V180C180 190 210 210 250 210C290 210 320 190 320 180V130"
        fill="white"
        opacity="0.6"
      />
      <circle cx="313" cy="180" r="8" fill="white" opacity="0.8" />
      {/* Stars */}
      <circle cx="100" cy="80" r="3" fill="white" opacity="0.5" />
      <circle cx="400" cy="60" r="2" fill="white" opacity="0.4" />
      <circle cx="350" cy="120" r="2.5" fill="white" opacity="0.6" />
    </svg>
  );
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  showScrollIndicator = true,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep layered background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {/* Primary gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-dark to-dark" />

        {/* Radial depth layers */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(26, 95, 42, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 60%, rgba(232, 93, 38, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 30%, rgba(240, 160, 48, 0.15) 0%, transparent 50%)
          `,
          }}
        />

        {/* African pattern overlay */}
        <AfricanPattern className="absolute inset-0 w-full h-full text-white opacity-60" />

        {/* Geometric decorations */}
        <div className="absolute top-32 left-16 w-32 h-32 border-2 border-white/10 rotate-45 animate-float" />
        <div className="absolute bottom-48 right-24 w-24 h-24 border border-accent/20 rounded-full animate-float-slow" />
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/10 rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "1s" }}
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Lycée Professionnel — Ouvert en 2023
              </motion.div>

              {/* Title with word-by-word animation */}
              <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[1.05]">
                {title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.4 + i * 0.08,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="w-24 h-1.5 bg-gradient-to-r from-accent to-secondary rounded-full mb-6 origin-left"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-lg sm:text-xl text-white/75 max-w-lg mb-10 leading-relaxed"
              >
                {subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-bold text-lg overflow-hidden shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300"
                  >
                    <span className="relative z-10">{ctaPrimary.text}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="px-8 py-4 border-2 border-white/25 text-white hover:bg-white/10 hover:border-white/40 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300"
                  >
                    {ctaSecondary.text}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glow behind illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl scale-75 animate-pulse-glow" />

              {/* Main illustration */}
              <EducationIllustration className="relative w-full h-auto drop-shadow-2xl" />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute top-12 -left-8 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl"
              >
                <p className="text-2xl font-heading font-extrabold text-primary">
                  85%
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Taux de réussite
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-32 -right-4 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl"
              >
                <p className="text-2xl font-heading font-extrabold text-secondary">
                  1500+
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Élèves formés
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          onClick={scrollToContent}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors z-20"
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase">Défiler</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
}
