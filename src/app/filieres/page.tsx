"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import SectionTitle from "@/components/section-title";
import FiliereCard from "@/components/filiere-card";
import { motion } from "framer-motion";
import { Cpu, Wrench, Snowflake, Factory } from "lucide-react";

const categories = [
  {
    name: "Filières Industrielles",
    icon: Factory,
    description:
      "4 filières techniques formant aux métiers de l'industrie, de l'électronique et de la maintenance.",
    filieres: [
      {
        title: "Électronique (ELN)",
        description:
          "Conception, installation et maintenance des systèmes et équipements électroniques industriels et grand public.",
        icon: Cpu,
        diplomes: ["BT"],
        duree: "3 ans",
        href: "/filieres",
      },
      {
        title: "Électricité d'Équipement (EE)",
        description:
          "Installation, câblage et maintenance des équipements électriques industriels et domestiques.",
        icon: Wrench,
        diplomes: ["CAP"],
        duree: "2 ans",
        href: "/filieres",
      },
      {
        title: "Froid et Climatisation (RCA)",
        description:
          "Installation, entretien et dépannage des systèmes de réfrigération, climatisation et traitement de l'air.",
        icon: Snowflake,
        diplomes: ["BT"],
        duree: "3 ans",
        href: "/filieres",
      },
      {
        title: "Maintenance Véhicules et Engins (MVE)",
        description:
          "Diagnostic, réparation et maintenance des véhicules automobiles et engins de travaux publics.",
        icon: Factory,
        diplomes: ["BT"],
        duree: "3 ans",
        href: "/filieres",
      },
    ],
  },
];

export default function FilieresPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Nos Filières"
        subtitle="4 filières industrielles pour des carrières techniques d'avenir."
      />

      {/* Filières */}
      {categories.map((category, catIndex) => (
        <section
          key={category.name}
          className="section-padding bg-african-pattern relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl text-dark">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.filieres.map((filiere, index) => (
                <FiliereCard
                  key={filiere.title}
                  {...filiere}
                  index={catIndex * 4 + index}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}
