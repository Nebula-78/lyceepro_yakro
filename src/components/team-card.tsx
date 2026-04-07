"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  index?: number;
}

export default function TeamCard({
  name,
  role,
  bio,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100/80 p-8 text-center hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Avatar with depth */}
        <div className="relative mb-6">
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <div className="w-24 h-24 rounded-full bg-white shadow-inner flex items-center justify-center">
              <User className="w-12 h-12 text-primary/50" />
            </div>
          </div>
          {/* Shadow underneath */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/5 rounded-full blur-md" />
        </div>

        {/* Info */}
        <h3 className="font-heading font-bold text-xl text-dark mb-1">
          {name}
        </h3>
        <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary text-sm font-bold mb-4">
          {role}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {bio}
        </p>
      </div>
    </motion.div>
  );
}
