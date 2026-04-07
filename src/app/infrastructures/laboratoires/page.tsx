"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { Monitor, Microscope, Cpu, Wrench, Clock } from "lucide-react";

const labs = [
  {
    name: "Laboratoire de Physique",
    icon: Monitor,
    equipements: "Tableaux électriques, oscilloscopes, multimètres",
  },
  {
    name: "Laboratoire de Chimie",
    icon: Microscope,
    equipements: "Hotte aspirante, balances, réactifs",
  },
  {
    name: "Salle Informatique",
    icon: Cpu,
    equipements: "50 ordinateurs, connexion internet, vidéoprojecteurs",
  },
  {
    name: "Atelier Électrotechnique",
    icon: Wrench,
    equipements: "Établis, appareillage industriel, simulateurs",
  },
];

const equipment = [
  "50 ordinateurs de dernière génération",
  "Tableaux électriques pédagogiques",
  "Microscopes haute résolution",
  "Établis de montage industriel",
  "Oscilloscopes numériques",
  "Appareillage de mesure professionnel",
  "Simulateurs de processus industriels",
  "Vidéoprojecteurs interactifs",
];

export default function LaboratoiresPage() {
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
            Laboratoires
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Des équipements modernes pour l'expérimentation et la pratique.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Nos Laboratoires"
            subtitle="4 laboratoires spécialisés pour la formation pratique."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {labs.map((lab, i) => (
              <motion.div
                key={lab.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <lab.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">
                  {lab.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {lab.equipements}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-dark mb-6">
              Équipements
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {equipment.map((eq, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{eq}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>
                <strong>Horaires :</strong> Lundi - Vendredi, 7h30 - 17h30
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
