"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FiliereCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  diplomes: string[];
  duree: string;
  href: string;
  index?: number;
}

export default function FiliereCard({
  title,
  description,
  icon: Icon,
  diplomes,
  duree,
  href,
  index = 0,
}: FiliereCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -12 }}
      className="group relative"
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full bg-white rounded-3xl shadow-lg border border-gray-100/80 overflow-hidden hover:shadow-2xl transition-all duration-500">
          {/* Gradient Header with depth */}
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-primary p-7 text-white overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M15 0L30 15L15 30L0 15Z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Floating decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 leading-tight">
                {title}
              </h3>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold">
                {duree}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-7">
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* Diplômes with style */}
            <div className="flex flex-wrap gap-2">
              {diplomes.map((diplome) => (
                <span
                  key={diplome}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/10 group-hover:from-primary/15 group-hover:to-primary/10 transition-all"
                >
                  {diplome}
                </span>
              ))}
            </div>
          </div>

          {/* Animated bottom indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Shimmer on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
