"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { Armchair, BookOpen, Tv, Music } from "lucide-react";

export default function FoyerPage() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-primary to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-6"
          >
            Foyer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Un espace de détente, de culture et de découverte.
          </motion.p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Foyer des Élèves"
            subtitle="Un lieu de vie pour se divertir, apprendre et se retrouver."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Armchair,
                title: "Espace Détente",
                desc: "Canapés, jeux de société et ambiance conviviale",
              },
              {
                icon: BookOpen,
                title: "Bibliothèque / CDI",
                desc: "2000+ ouvrages et accès internet",
              },
              {
                icon: Tv,
                title: "Salle TV",
                desc: "Écran géant pour événements sportifs et culturels",
              },
              {
                icon: Music,
                title: "Activités",
                desc: "Clubs musique, théâtre et jeux vidéo",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
