"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  Building2,
  Quote,
} from "lucide-react";

const metiers = [
  {
    filiere: "Électrotechnique",
    metiers: [
      "Technicien électricien",
      "Installateur industriel",
      "Responsable maintenance",
    ],
    taux: "92%",
  },
  {
    filiere: "Mécanique Automobile",
    metiers: ["Mécanicien automobile", "Diagnosticur", "Chef d'atelier"],
    taux: "88%",
  },
  {
    filiere: "Comptabilité",
    metiers: ["Comptable", "Aide-comptable", "Gestionnaire de paie"],
    taux: "95%",
  },
  {
    filiere: "Gestion des Entreprises",
    metiers: [
      "Assistant de gestion",
      "Commercial",
      "Responsable administratif",
    ],
    taux: "90%",
  },
];

const temoignages = [
  {
    nom: "Koffi N'Dri",
    promo: "2020 - BTS Maintenance",
    citation:
      "Grâce à la formation reçue au LP Yamoussoukro, j'ai pu intégrer directement une entreprise de production industrielle. Les compétences pratiques acquises m'ont donné une longueur d'avance.",
    poste: "Technicien supérieur chez CIE",
  },
  {
    nom: "Awa Koné",
    promo: "2021 - BAC PRO Comptabilité",
    citation:
      "Le lycée m'a donné les bases solides pour réussir dans la comptabilité. Aujourd'hui je gère la comptabilité de 3 PME grâce aux compétences acquises ici.",
    poste: "Comptable indépendante",
  },
  {
    nom: "Ibrahim Traoré",
    promo: "2019 - CAP Électrotechnique",
    citation:
      "Après mon CAP, j'ai créé mon propre atelier de réparation électrique. La formation pratique m'a donné la confiance nécessaire pour entreprendre.",
    poste: "Chef d'entreprise - Electro Service",
  },
];

const partenaires = [
  "CIE",
  "SODECI",
  "BICICI",
  "Total Énergies",
  "Bouygues Construction",
  "Chambre d'Agriculture",
];

export default function OrientationPage() {
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
            Orientation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Des débouchés concrets et des parcours d'avenir pour chaque filière.
          </motion.p>
        </div>
      </section>

      {/* Métiers par filière */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Fiches Métiers par Filière"
            subtitle="Découvrez les carrières qui s'offrent à vous après chaque formation."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {metiers.map((item, i) => (
              <motion.div
                key={item.filiere}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">
                    {item.filiere}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" /> {item.taux}
                  </span>
                </div>
                <div className="space-y-2">
                  {item.metiers.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <Briefcase className="w-4 h-4 text-primary/60" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Poursuite d'études */}
          <SectionTitle
            title="Poursuite d'Études"
            subtitle="Nos diplômes ouvrent aussi la voie à des études supérieures."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: GraduationCap,
                title: "Licence Professionnelle",
                desc: "Accès direct après BTS/BAC PRO",
              },
              {
                icon: Building2,
                title: "Écoles d'Ingénieurs",
                desc: "Sur concours pour les meilleurs",
              },
              {
                icon: TrendingUp,
                title: "Master Pro",
                desc: "Après licence, spécialisation avancée",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Témoignages */}
          <SectionTitle
            title="Témoignages d'Anciens Élèves"
            subtitle="Ils ont réussi grâce à la formation du LP Yamoussoukro."
          />
          <div className="space-y-6 max-w-4xl mx-auto mb-16">
            {temoignages.map((temoignage, i) => (
              <motion.div
                key={temoignage.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{temoignage.citation}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-dark">
                      {temoignage.nom}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {temoignage.poste}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                    {temoignage.promo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partenaires entreprises */}
          <SectionTitle
            title="Nos Partenaires Entreprises"
            subtitle="Des entreprises qui recrutent nos diplômés."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {partenaires.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 font-semibold text-dark"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
