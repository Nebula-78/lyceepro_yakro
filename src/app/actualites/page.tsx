"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import SectionTitle from "@/components/section-title";
import EventCard from "@/components/event-card";
import { motion } from "framer-motion";

const events = [
  {
    day: "15",
    month: "Déc",
    date: "15 Décembre 2024",
    title: "Journée Portes Ouvertes",
    description:
      "Venez découvrir nos installations et rencontrer nos enseignants. Ateliers pratiques de robotique, démonstrations en électrotechnique et visites guidées des laboratoires au programme. Toute la famille est la bienvenue !",
    category: "Événement",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    day: "22",
    month: "Déc",
    date: "22 Décembre 2024",
    title: "Cérémonie de Remise des Diplômes",
    description:
      "Célébration de la promotion 2024. Remise solennelle des diplômes CAP, BEP, BAC PRO et BTS en présence des autorités académiques et des parents d'élèves.",
    category: "Cérémonie",
    categoryColor: "bg-secondary/10 text-secondary",
  },
  {
    day: "10",
    month: "Jan",
    date: "10 Janvier 2025",
    title: "Concours de Robotique Inter-Lycées",
    description:
      "Compétition régionale de robotique. Nos élèves présentent leurs projets innovants : robot aspirateur, bras manipulateur et drone autonome. Venez encourager nos talents !",
    category: "Compétition",
    categoryColor: "bg-accent/10 text-accent",
  },
  {
    day: "25",
    month: "Jan",
    date: "25 Janvier 2025",
    title: "Forum des Métiers et de l'Orientation",
    description:
      "Rencontre avec des professionnels de l'industrie, du tertiaire et de l'agriculture. Ateliers de découverte et conseils d'orientation pour les élèves de 3ème.",
    category: "Orientation",
    categoryColor: "bg-dark/10 text-dark",
  },
  {
    day: "14",
    month: "Fév",
    date: "14 Février 2025",
    title: "Compétition Sportive Inter-Établissements",
    description:
      "Tournoi de football, basket-ball et athlétisme réunissant 8 lycées de la région. Venez soutenir nos athlètes !",
    category: "Sport",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    day: "08",
    month: "Mars",
    date: "8 Mars 2025",
    title: "Journée de la Femme - Conférences",
    description:
      "Tables rondes et témoignages de femmes leaders dans les secteurs techniques et industriels. Inspiration et motivation pour nos lycéennes.",
    category: "Culture",
    categoryColor: "bg-secondary/10 text-secondary",
  },
];

export default function ActualitesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Actualités & Événements"
        subtitle="Restez informé des dernières nouvelles et événements du Lycée Professionnel de Yamoussoukro."
      />

      {/* Events List */}
      <section className="bg-african-pattern relative overflow-hidden section-padding">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="relative container-custom max-w-4xl">
          <SectionTitle title="Tous les Événements" align="left" />
          <div className="space-y-4">
            {events.map((event, index) => (
              <EventCard key={event.title} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
