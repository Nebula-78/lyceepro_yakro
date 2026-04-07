"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import FaqItem from "@/components/faq-item";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Calendar } from "lucide-react";

const conditions = [
  { niveau: "CAP", requis: "BEPC ou équivalent" },
  { niveau: "BEP", requis: "BEPC ou CAP" },
  { niveau: "BAC PRO", requis: "Entrée en 3ème ou BEP" },
  { niveau: "BTS", requis: "Baccalauréat (toutes séries)" },
];

const etapes = [
  {
    num: "1",
    title: "Retrait du dossier",
    desc: "À la scolarité du lycée ou téléchargement en ligne",
  },
  {
    num: "2",
    title: "Constitution du dossier",
    desc: "Pièces requises : acte de naissance, bulletins, certificat médical",
  },
  {
    num: "3",
    title: "Dépôt du dossier",
    desc: "Avant la date limite fixée par le calendrier scolaire",
  },
  {
    num: "4",
    title: "Commission d'admission",
    desc: "Examen des dossiers et entretien de motivation",
  },
  {
    num: "5",
    title: "Résultats et inscription",
    desc: "Publication des listes et finalisation de l'inscription",
  },
];

const documents = [
  "Acte de naissance (copie)",
  "Certificat de scolarité de l'année précédente",
  "Bulletins de notes (2 derniers trimestres)",
  "Certificat médical d'aptitude",
  "4 photos d'identité",
  "Attestation d'assurance scolaire",
  "Autorisation parentale (pour les mineurs)",
];

const frais = [
  { categorie: "Inscription", montant: "5 000 FCFA" },
  { categorie: "Scolarité CAP/BEP", montant: "25 000 FCFA/an" },
  { categorie: "Scolarité BAC PRO", montant: "35 000 FCFA/an" },
  { categorie: "Scolarité BTS", montant: "50 000 FCFA/an" },
  { categorie: "Internat (facultatif)", montant: "150 000 FCFA/an" },
];

const faq = [
  {
    q: "Quelle est la date limite d'inscription ?",
    a: "Les inscriptions sont ouvertes de juin à septembre chaque année. La date limite est fixée au 30 septembre.",
  },
  {
    q: "Peut-on s'inscrire en cours d'année ?",
    a: "Des inscriptions tardives sont possibles sous réserve de places disponibles et après entretien avec la direction.",
  },
  {
    q: "Y a-t-il des bourses disponibles ?",
    a: "Oui, des bourses d'études sont attribuées par le Ministère de l'Éducation sur critères sociaux et académiques.",
  },
  {
    q: "L'internat est-il obligatoire ?",
    a: "Non, l'internat est facultatif. Il est cependant recommandé pour les élèves venant de l'extérieur.",
  },
];

export default function AdmissionsPage() {
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
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Rejoignez le LP Yamoussoukro et construisez votre avenir
            professionnel.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Conditions d'Admission"
            subtitle="Les prérequis pour chaque niveau de formation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {conditions.map((c, i) => (
              <motion.div
                key={c.niveau}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center"
              >
                <h3 className="font-heading font-bold text-xl text-primary mb-2">
                  {c.niveau}
                </h3>
                <p className="text-muted-foreground text-sm">{c.requis}</p>
              </motion.div>
            ))}
          </div>

          <SectionTitle
            title="Procédure d'Inscription"
            subtitle="5 étapes simples pour rejoindre le lycée."
          />
          <div className="relative max-w-3xl mx-auto mb-16">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
            {etapes.map((etape, i) => (
              <motion.div
                key={etape.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-start gap-6 mb-8 last:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold flex-shrink-0 z-10">
                  {etape.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-dark mb-1">
                    {etape.title}
                  </h3>
                  <p className="text-muted-foreground">{etape.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <SectionTitle
            title="Documents Requis"
            subtitle="La liste des pièces à fournir pour constituer votre dossier."
          />
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-3xl mx-auto mb-16">
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <SectionTitle
            title="Frais de Scolarité"
            subtitle="Un investissement accessible pour une formation de qualité."
          />
          <div className="overflow-x-auto max-w-3xl mx-auto mb-16">
            <table className="w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-primary-light text-white">
                  <th className="px-6 py-4 text-left font-heading font-semibold">
                    Catégorie
                  </th>
                  <th className="px-6 py-4 text-left font-heading font-semibold">
                    Montant
                  </th>
                </tr>
              </thead>
              <tbody>
                {frais.map((f, i) => (
                  <tr
                    key={f.categorie}
                    className={`${i % 2 === 0 ? "bg-muted/20" : "bg-white"} hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4 text-dark font-medium">
                      {f.categorie}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground font-semibold">
                      {f.montant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle
            title="Questions Fréquentes"
            subtitle="Les réponses aux questions les plus posées."
          />
          <div className="space-y-3 max-w-3xl mx-auto mb-16">
            {faq.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-10 text-white text-center max-w-3xl mx-auto"
          >
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="font-heading font-bold text-2xl mb-3">
              Prêt à nous rejoindre ?
            </h3>
            <p className="text-white/80 mb-6">
              Remplissez le formulaire de pré-inscription en ligne pour réserver
              votre place.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors">
              <Calendar className="w-5 h-5" /> Formulaire de Pré-inscription
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
