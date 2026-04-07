"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  BookmarkPlus,
  Heart,
} from "lucide-react";
import Link from "next/link";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  categoryColor: string;
  tags: string[];
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured" | "compact" | "horizontal";
}

// Illustration placeholder SVG avec style africain (optimized: ~15 elements)
function ArticleIllustration({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const colors: Record<string, string> = {
    Événement: "#1a5f2a",
    Sport: "#e85d26",
    Culture: "#f0a030",
    Social: "#264653",
    Pédagogie: "#1a5f2a",
    "Vie scolaire": "#e85d26",
  };

  const color = colors[category] || "#1a5f2a";

  return (
    <svg
      className={className}
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="250" fill={color} opacity="0.1" />

      <g opacity="0.3">
        <path d="M100 60L130 30L160 60L130 90Z" fill={color} opacity="0.4" />
        <path d="M250 100L280 70L310 100L280 130Z" fill={color} opacity="0.3" />
        <path
          d="M0 180L50 160L100 180L150 160L200 180L250 160L300 180L350 160L400 180"
          stroke={color}
          strokeWidth="2"
          opacity="0.2"
        />
        <circle cx="80" cy="150" r="25" fill={color} opacity="0.15" />
        <circle cx="320" cy="80" r="35" fill={color} opacity="0.1" />

        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx={(i % 4) * 100 + 50}
            cy={Math.floor(i / 4) * 80 + 40}
            r="2"
            fill={color}
            opacity="0.2"
          />
        ))}
      </g>

      <g transform="translate(160, 90)">
        <circle cx="40" cy="40" r="35" fill={color} opacity="0.2" />
        <circle cx="40" cy="40" r="15" fill={color} opacity="0.5" />
      </g>

      <line
        x1="30"
        y1="220"
        x2="150"
        y2="220"
        stroke={color}
        strokeWidth="3"
        opacity="0.2"
      />
    </svg>
  );
}

function CategoryBadge({
  category,
  color,
}: {
  category: string;
  color: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${color}`}
    >
      <Tag className="w-3 h-3" />
      {category}
    </span>
  );
}

export default function BlogCard({
  post,
  index = 0,
  variant = "default",
}: BlogCardProps) {
  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="group relative"
      >
        <Link href={`/journal/${post.slug}`} className="block">
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100/80 overflow-hidden hover:shadow-2xl transition-all duration-500">
            {/* Image area */}
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <ArticleIllustration
                category={post.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <CategoryBadge
                  category={post.category}
                  color={post.categoryColor}
                />
              </div>

              {/* Featured badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-bold flex items-center gap-1.5">
                  <Heart className="w-3 h-3 fill-current" />À la une
                </span>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 leading-tight group-hover:text-accent/90 transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/80 text-sm sm:text-base line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === "horizontal") {
    return (
      <motion.article
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group"
      >
        <Link href={`/journal/${post.slug}`} className="block">
          <div className="flex gap-5 bg-white rounded-2xl shadow-md border border-gray-100/80 overflow-hidden hover:shadow-xl transition-all duration-500">
            {/* Image */}
            <div className="w-48 sm:w-56 flex-shrink-0 overflow-hidden">
              <ArticleIllustration
                category={post.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col justify-center">
              <CategoryBadge
                category={post.category}
                color={post.categoryColor}
              />
              <h3 className="font-heading font-bold text-lg text-dark mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group"
      >
        <Link href={`/journal/${post.slug}`} className="block">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100/80 p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <CategoryBadge
              category={post.category}
              color={post.categoryColor}
            />
            <h3 className="font-heading font-bold text-base text-dark mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <Link href={`/journal/${post.slug}`} className="block h-full">
        <div className="relative h-full bg-white rounded-2xl shadow-lg border border-gray-100/80 overflow-hidden hover:shadow-xl transition-all duration-500">
          {/* Image area */}
          <div className="relative h-48 overflow-hidden">
            <ArticleIllustration
              category={post.category}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Category */}
            <div className="absolute top-4 left-4">
              <CategoryBadge
                category={post.category}
                color={post.categoryColor}
              />
            </div>

            {/* Bookmark */}
            <button
              onClick={(e) => e.preventDefault()}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <BookmarkPlus className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    </motion.article>
  );
}
