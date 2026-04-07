"use client";

import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";

interface EventCardProps {
  date: string;
  day: string;
  month: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  index?: number;
}

export default function EventCard({
  day,
  month,
  title,
  description,
  category,
  categoryColor,
  index = 0,
}: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative bg-white rounded-2xl shadow-md border border-gray-100/80 overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col sm:flex-row">
        {/* Date Box with depth */}
        <div className="sm:w-32 flex-shrink-0 bg-gradient-to-br from-primary to-primary-dark text-white p-5 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative">
            <Calendar className="w-5 h-5 mb-2 opacity-60 mx-auto" />
            <span className="text-4xl font-heading font-extrabold block">
              {day}
            </span>
            <span className="text-sm uppercase opacity-70 font-medium">
              {month}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <h3 className="font-heading font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${categoryColor}`}
            >
              <Tag className="w-3 h-3" />
              {category}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
