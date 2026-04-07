"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import {
  Users,
  Music,
  Drama,
  Bot,
  Heart,
  Download,
  FileText,
} from "lucide-react";

const clubs = [
  {
    icon: Music,
    name: "Club Musique",
    desc: "Apprentissage instrument, chorale et spectacles",
  },
  {
    icon: Drama,
    name: "Club Théâtre",
    desc: "Ateliers de comédie et représentations",
  },
  {
    icon: Bot,
    name: "Club Robotique",
    desc: "Conception et programmation de robots",
  },
  {
    icon: Heart,
    name: "Club Solidarité",
    desc: "Actions caritatives et entraide scolaire",
  },
];

export default function VieScolairePage() {
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
            Vie Scolaire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Une vie lycéenne riche en activités et en engagements.
          </motion.p>
        </div>
      </section>

      {/* APE & CVL */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Instances de Vie Lycéenne"
            subtitle="Des structures pour participer à la vie de l'établissement."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Association des Parents d'Élèves (APE)",
                desc: "L'APE représente les parents dans les instances décisionnelles du lycée. Elle organise des événements, collecte des fonds et soutient les projets pédagogiques.",
                members: "12 membres élus",
              },
              {
                icon: Users,
                title: "Conseil de Vie Lycéenne (CVL)",
                desc: "Le CVL permet aux élèves de s'exprimer sur leur cadre de vie, les activités et les propositions d'amélioration. Un espace de dialogue et de projets.",
                members: "10 élèves élus",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {item.members}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Clubs */}
          <SectionTitle
            title="Clubs & Associations"
            subtitle="Des activités parascolaires pour s'épanouir et développer ses talents."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clubs.map((club, i) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <club.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">
                  {club.name}
                </h3>
                <p className="text-muted-foreground text-sm">{club.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Projets pédagogiques */}
          <SectionTitle
            title="Projets Pédagogiques"
            subtitle="Des projets innovants qui donnent du sens aux apprentissages."
          />
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-4xl mx-auto mb-12">
            <ul className="space-y-4">
              {[
                "Projet Robotique : conception d'un robot autonome pour le concours national",
                "Projet Environnement : jardin pédagogique et compostage des déchets verts",
                "Projet Entrepreneuriat : création mini-entreprises par les élèves de BTS",
                "Projet Culturel : spectacle de fin d'année et exposition artistique",
                "Projet Sportif : tournoi inter-lycées et journée athlétisme",
              ].map((projet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{projet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Règlement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white max-w-4xl mx-auto text-center"
          >
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="font-heading font-bold text-2xl mb-3">
              Règlement Intérieur
            </h3>
            <p className="text-white/80 mb-6">
              Consultez le règlement intérieur du lycée pour connaître les
              règles de vie commune.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors">
              <Download className="w-5 h-5" /> Télécharger le PDF
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
