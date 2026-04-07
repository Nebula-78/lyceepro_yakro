"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import PageHeader from "@/components/page-header";
import TeamCard from "@/components/team-card";
import { motion } from "framer-motion";
import { GraduationCap, Users, Building2, Handshake } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Construction du Lycée",
    description:
      "Bâtiment construit et équipé avec des installations modernes pour accueillir les premières filières industrielles.",
  },
  {
    year: "2025",
    title: "Inauguration officielle",
    description:
      "Inauguration du Lycée Professionnel de Yamoussoukro en présence des autorités académiques.",
  },
  {
    year: "2025",
    title: "Première promotion",
    description:
      "Formation de la première promotion d'apprenants dans les 4 filières industrielles : ELN, EE, RCA, MVE.",
  },
];

const team = [
  {
    name: "M. Kouamé N'Guessan",
    role: "Proviseur",
    bio: "30 ans d'expérience dans l'enseignement technique. Passionné par la formation des jeunes talents.",
  },
  {
    name: "Mme. Aminata Diallo",
    role: "Proviseur Adjoint",
    bio: "Spécialiste en gestion éducative, elle veille au bon fonctionnement pédagogique de l'établissement.",
  },
  {
    name: "M. Jean-Baptiste Koné",
    role: "Directeur des Études",
    bio: "En charge de l'organisation pédagogique et du suivi des programmes de formation.",
  },
  {
    name: "Mme. Mariam Touré",
    role: "Responsable Filières Industrielles",
    bio: "Ingénieure de formation, elle coordonne l'ensemble des filières industrielles.",
  },
];

const partners = [
  { name: "MINED", fullName: "Ministère de l'Éducation Nationale" },
  { name: "ONEF", fullName: "Office National d'Entretien et Fournitures" },
  { name: "CETEM", fullName: "Centre d'Études Techniques et de Management" },
  { name: "CCI", fullName: "Chambre de Commerce et d'Industrie" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="À Propos"
        subtitle="Découvrez l'histoire, les valeurs et l'équipe du Lycée Professionnel de Yamoussoukro."
      />

      {/* Timeline */}
      <section className="section-padding bg-african-pattern relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionTitle
            title="Notre Histoire"
            subtitle="Presque 40 ans d'excellence au service de la formation professionnelle."
          />
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionTitle
            title="Notre Équipe Dirigeante"
            subtitle="Des professionnels dévoués au service de l'excellence éducative."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Nos Partenaires"
            subtitle="Des institutions qui soutiennent notre mission de formation."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-1">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {partner.fullName}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
