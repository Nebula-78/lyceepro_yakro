"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  GraduationCap,
} from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  {
    name: "Filières",
    href: "/filieres",
  },
  { name: "Diplômes", href: "/diplomes" },
  {
    name: "Infrastructures",
    href: "#",
    dropdown: [
      { name: "Laboratoires", href: "/infrastructures/laboratoires" },
      { name: "Internat", href: "/infrastructures/internat" },
      { name: "Réfectoire", href: "/infrastructures/refectoire" },
      { name: "Foyer", href: "/infrastructures/foyer" },
      { name: "Infirmerie", href: "/infrastructures/infirmerie" },
      { name: "Salles de classe", href: "/infrastructures/salles" },
      { name: "Administration", href: "/infrastructures/administration" },
      { name: "Terrain de sport", href: "/infrastructures/sport" },
    ],
  },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                scrolled
                  ? "bg-primary text-white"
                  : "bg-white/20 backdrop-blur-sm text-white"
              }`}
            >
              <GraduationCap className="w-7 h-7" />
            </motion.div>
            <div className="hidden sm:block">
              <p
                className={`font-heading font-bold text-lg leading-tight transition-colors ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                LP Yamoussoukro
              </p>
              <p
                className={`text-xs transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                Excellence technique
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                    scrolled
                      ? "text-dark hover:bg-primary/10 hover:text-primary"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && dropdownOpen === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={`hidden lg:inline-flex px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              scrolled
                ? "bg-secondary text-white hover:bg-secondary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Nous contacter
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-dark hover:bg-gray-100"
                : "text-white hover:bg-white/20"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 rounded-lg text-dark hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 space-y-1 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg bg-secondary text-white text-center font-semibold mt-4"
                onClick={() => setIsOpen(false)}
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
