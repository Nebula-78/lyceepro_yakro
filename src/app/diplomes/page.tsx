"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { Award, Clock, Briefcase, GraduationCap } from "lucide-react";

const diplomes = [
  {
    nom: "CAP",
    niveau: "Niveau 5",
    duree: "2 ans",
    acces: "BEPC",
    debouches: "Ouvrier qualifié",
    description:
      "Le Certificat d'Aptitude Professionnelle forme des ouvriers qualifiés dans un métier précis.",
    filieres: ["Électricité d'Équipement (EE)"],
  },
  {
    nom: "BT",
    niveau: "Niveau 4",
    duree: "2 ans",
    acces: "BEPC / CAP",
    debouches: "Technicien",
    description:
      "Le Brevet de Technicien forme des techniciens compétents dans les filières industrielles.",
    filieres: [
      "Électronique (ELN)",
      "Froid et Climatisation (RCA)",
      "Maintenance Véhicules et Engins (MVE)",
    ],
  },
];

export default function DiplomesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Diplômes"
        subtitle="De CAP au BTS, des diplômes reconnus pour une insertion professionnelle rapide."
      />

      {/* Diplômes Cards */}
      <section className="bg-african-pattern relative overflow-hidden section-padding">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="relative container-custom">
          <SectionTitle
            title="Nos Diplômes"
            subtitle="5 niveaux de diplômes adaptés à votre parcours et vos ambitions."
          />
          <div className="space-y-6 max-w-4xl mx-auto">
            {diplomes.map((diplome, index) => (
              <motion.div
                key={diplome.nom}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left - Badge */}
                  <div className="md:w-48 bg-gradient-to-br from-primary to-primary-light text-white p-6 flex flex-col items-center justify-center">
                    <GraduationCap className="w-10 h-10 mb-3 opacity-80" />
                    <h3 className="font-heading font-bold text-2xl">
                      {diplome.nom}
                    </h3>
                    <span className="text-sm opacity-80">{diplome.niveau}</span>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1 p-6">
                    <p className="text-muted-foreground mb-4">
                      {diplome.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-muted-foreground text-xs">Durée</p>
                          <p className="font-semibold text-dark">
                            {diplome.duree}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-muted-foreground text-xs">Accès</p>
                          <p className="font-semibold text-dark">
                            {diplome.acces}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-muted-foreground text-xs">
                            Débouchés
                          </p>
                          <p className="font-semibold text-dark">
                            {diplome.debouches}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Filières concernées :
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {diplome.filieres.map((f) => (
                          <span
                            key={f}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionTitle title="Tableau Comparatif" />
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-primary-light text-white">
                  <th className="px-6 py-4 text-left font-heading font-semibold">
                    Diplôme
                  </th>
                  <th className="px-6 py-4 text-left font-heading font-semibold">
                    Niveau
                  </th>
                  <th className="px-6 py-4 text-left font-heading font-semibold">
                    Filières concernées
                  </th>
                </tr>
              </thead>
              <tbody>
                {diplomes.map((diplome, index) => (
                  <tr
                    key={diplome.nom}
                    className={`${index % 2 === 0 ? "bg-muted/20" : "bg-white"} hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold text-dark">
                      {diplome.nom}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {diplome.niveau}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {diplome.filieres.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
