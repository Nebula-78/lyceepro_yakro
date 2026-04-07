"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import SectionTitle from "@/components/section-title";
import FiliereCard from "@/components/filiere-card";
import { motion } from "framer-motion";
import {
  Cpu,
  Wrench,
  Snowflake,
  Factory,
  Building2,
  Calculator,
  Keyboard,
  Wheat,
  FlaskConical,
} from "lucide-react";

const categories = [
  {
    name: "Filières Industrielles",
    icon: Factory,
    description:
      "Des formations techniques aux métiers de l'industrie et de la production.",
    filieres: [
      {
        title: "Électrotechnique",
        description:
          "Formation complète aux systèmes électriques industriels et domestiques, installation et maintenance.",
        icon: Cpu,
        diplomes: ["CAP", "BEP", "BAC PRO", "BT"],
        duree: "2-4 ans",
        href: "/filieres",
      },
      {
        title: "Mécanique Automobile",
        description:
          "Diagnostic, réparation et maintenance des véhicules automobiles modernes.",
        icon: Wrench,
        diplomes: ["CAP", "BEP", "BAC PRO"],
        duree: "2-3 ans",
        href: "/filieres",
      },
      {
        title: "Froid et Climatisation",
        description:
          "Installation et maintenance des systèmes de réfrigération et climatisation.",
        icon: Snowflake,
        diplomes: ["CAP", "BEP"],
        duree: "2 ans",
        href: "/filieres",
      },
      {
        title: "Maintenance Systèmes Production",
        description:
          "Maintenance préventive et corrective des équipements de production industrielle.",
        icon: Factory,
        diplomes: ["BAC PRO", "BTS"],
        duree: "2-3 ans",
        href: "/filieres",
      },
    ],
  },
  {
    name: "Filières Tertiaires",
    icon: Building2,
    description:
      "Des formations aux métiers de la gestion, de la comptabilité et du secrétariat.",
    filieres: [
      {
        title: "Gestion des Entreprises",
        description:
          "Management, gestion administrative et commerciale des organisations.",
        icon: Building2,
        diplomes: ["BAC PRO", "BTS"],
        duree: "2-3 ans",
        href: "/filieres",
      },
      {
        title: "Comptabilité et Gestion",
        description:
          "Techniques comptables, gestion financière et fiscale des entreprises.",
        icon: Calculator,
        diplomes: ["CAP", "BEP", "BAC PRO", "BTS"],
        duree: "2-3 ans",
        href: "/filieres",
      },
      {
        title: "Secrétariat Bureautique",
        description:
          "Gestion administrative, traitement de texte et organisation bureautique.",
        icon: Keyboard,
        diplomes: ["CAP", "BEP", "BAC PRO"],
        duree: "2-3 ans",
        href: "/filieres",
      },
    ],
  },
  {
    name: "Filières Agricoles",
    icon: Wheat,
    description:
      "Des formations aux métiers de l'agriculture et de l'agroalimentaire.",
    filieres: [
      {
        title: "Productions Agricoles",
        description:
          "Techniques de production végétale et animale, gestion d'exploitations agricoles.",
        icon: Wheat,
        diplomes: ["CAPA", "BEPA", "BAC PRO"],
        duree: "2-3 ans",
        href: "/filieres",
      },
      {
        title: "Agroalimentaire",
        description:
          "Transformation, conservation et commercialisation des produits alimentaires.",
        icon: FlaskConical,
        diplomes: ["CAP", "BEP", "BAC PRO"],
        duree: "2-3 ans",
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
        subtitle="12 filières de formation réparties en 3 catégories pour des carrières d'avenir."
      />

      {/* Filières */}
      {categories.map((category, catIndex) => (
        <section
          key={category.name}
          className={`bg-african-pattern relative overflow-hidden section-padding ${catIndex % 2 === 0 ? "" : "bg-muted/30"}`}
        >
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
          <div className="relative container-custom">
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
