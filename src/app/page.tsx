"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import SectionTitle from "@/components/section-title";
import FiliereCard from "@/components/filiere-card";
import InfrastructureCard from "@/components/infrastructure-card";
import EventCard from "@/components/event-card";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Trophy,
  Award,
  Target,
  Eye,
  Heart,
  Cpu,
  Wrench,
  Snowflake,
  Factory,
  Building2,
  Calculator,
  Keyboard,
  Wheat,
  FlaskConical,
  Bed,
  Utensils,
  Armchair,
  Stethoscope,
  Presentation,
  LandPlot,
  Dumbbell,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    icon: Users,
    value: "1500+",
    label: "Élèves formés",
    color: "from-primary to-primary-light",
  },
  {
    icon: BookOpen,
    value: "12",
    label: "Filières",
    color: "from-secondary to-accent",
  },
  {
    icon: Trophy,
    value: "85%",
    label: "Taux de réussite",
    color: "from-accent to-light",
  },
  {
    icon: Award,
    value: "45",
    label: "Enseignants",
    color: "from-primary-dark to-primary",
  },
];

const missions = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Former des professionnels compétents, prêts à intégrer le monde de l'entreprise avec des compétences techniques et humaines solides.",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Devenir le centre d'excellence technique de référence en Côte d'Ivoire et en Afrique de l'Ouest.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Heart,
    title: "Valeurs",
    description:
      "Excellence, Professionalisme, Innovation, Solidarité et Intégrité guident chacune de nos actions au quotidien.",
    gradient: "from-accent to-light",
  },
];

const filieres = [
  {
    title: "Électrotechnique",
    description:
      "Formation complète aux systèmes électriques industriels et domestiques.",
    icon: Cpu,
    diplomes: ["CAP", "BEP", "BAC PRO", "BT"],
    duree: "2-4 ans",
    href: "/filieres",
  },
  {
    title: "Mécanique Automobile",
    description:
      "Diagnostic, réparation et maintenance des véhicules automobiles.",
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
    title: "Productions Agricoles",
    description:
      "Techniques de production végétale et animale, gestion d'exploitations.",
    icon: Wheat,
    diplomes: ["CAPA", "BEPA", "BAC PRO"],
    duree: "2-3 ans",
    href: "/filieres",
  },
];

const infrastructures = [
  {
    title: "Laboratoires",
    description:
      "Équipements modernes pour la physique, chimie et l'informatique.",
    icon: FlaskConical,
    href: "/infrastructures/laboratoires",
  },
  {
    title: "Internat",
    description: "Hébergement confortable avec suivi éducatif personnalisé.",
    icon: Bed,
    href: "/infrastructures/internat",
  },
  {
    title: "Réfectoire",
    description: "Repas équilibrés préparés sur place avec des produits frais.",
    icon: Utensils,
    href: "/infrastructures/refectoire",
  },
  {
    title: "Foyer",
    description: "Espace détente, bibliothèque et activités parascolaires.",
    icon: Armchair,
    href: "/infrastructures/foyer",
  },
  {
    title: "Infirmerie",
    description: "Soins médicaux de qualité avec personnel qualifié.",
    icon: Stethoscope,
    href: "/infrastructures/infirmerie",
  },
  {
    title: "Salles de classe",
    description: "Salles équipées de tableaux interactifs et climatisation.",
    icon: Presentation,
    href: "/infrastructures/salles",
  },
  {
    title: "Administration",
    description: "Services complets : scolarité, orientation, direction.",
    icon: LandPlot,
    href: "/infrastructures/administration",
  },
  {
    title: "Terrain de sport",
    description: "Installations sportives pour football, basket et athlétisme.",
    icon: Dumbbell,
    href: "/infrastructures/sport",
  },
];

const events = [
  {
    day: "15",
    month: "Déc",
    date: "15 Décembre 2024",
    title: "Journée Portes Ouvertes",
    description:
      "Venez découvrir nos installations et rencontrer nos enseignants. Ateliers pratiques et visites guidées.",
    category: "Événement",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    day: "22",
    month: "Déc",
    date: "22 Décembre 2024",
    title: "Cérémonie de Remise des Diplômes",
    description:
      "Célébration de la promotion 2024. Remise des diplômes aux lauréats CAP, BEP, BAC PRO et BTS.",
    category: "Cérémonie",
    categoryColor: "bg-secondary/10 text-secondary",
  },
  {
    day: "10",
    month: "Jan",
    date: "10 Janvier 2025",
    title: "Concours de Robotique",
    description:
      "Compétition inter-lycées de robotique. Nos élèves présentent leurs projets innovants.",
    category: "Compétition",
    categoryColor: "bg-accent/10 text-accent",
  },
];

// Decorative SVG component
function DecorativeDots({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      {Array.from({ length: 25 }).map((_, i) => (
        <circle
          key={i}
          cx={(i % 5) * 25 + 10}
          cy={Math.floor(i / 5) * 25 + 10}
          r="2"
          fill="currentColor"
          opacity="0.2"
        />
      ))}
    </svg>
  );
}

function StatsSection() {
  return (
    <section className="relative -mt-20 z-10 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${stat.color}`} />

              <div className="p-6 lg:p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-heading font-extrabold text-4xl lg:text-5xl text-dark mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 decoration-grid opacity-40" />
      <DecorativeDots className="absolute top-20 right-10 w-32 h-32 text-primary" />
      <DecorativeDots className="absolute bottom-20 left-10 w-24 h-24 text-secondary" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Notre Mission, Notre Vision"
          subtitle="Des valeurs fortes qui guident notre action au quotidien pour la réussite de chaque élève."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100/80 p-8 lg:p-10 h-full overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${mission.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon with depth */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <mission.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Shadow circle */}
                  <div
                    className={`absolute -bottom-2 -right-2 w-20 h-20 rounded-2xl bg-gradient-to-br ${mission.gradient} opacity-20 blur-sm`}
                  />
                </div>

                <h3 className="font-heading font-bold text-2xl text-dark mb-4">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {mission.description}
                </p>

                {/* Bottom decoration */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-6 h-6 text-primary/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilieresSection() {
  return (
    <section className="relative section-padding bg-african-pattern overflow-hidden">
      {/* Large decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
            >
              <GraduationCap className="w-4 h-4" />
              Nos Filières
            </motion.div>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-dark mb-4">
              12 Filières de <span className="text-gradient">Formation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Des parcours adaptés à vos ambitions, de l'industrie au tertiaire
              en passant par l'agriculture.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-0"
          >
            <Link
              href="/filieres"
              className="group inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Voir toutes les filières
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filieres.map((filiere, index) => (
            <FiliereCard key={filiere.title} {...filiere} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfrastructuresSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-dark to-dark" />
      <div
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(ellipse 60% 50% at 30% 40%, rgba(232, 93, 38, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 70% 60%, rgba(240, 160, 48, 0.1) 0%, transparent 50%)
        `,
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          Nos Infrastructures
        </motion.div>
        <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4">
          Des Équipements <span className="text-accent">Modernes</span>
        </h2>
        <p className="text-lg text-white/60 max-w-xl mb-16">
          Un cadre d'apprentissage exceptionnel avec des installations de
          pointe.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {infrastructures.map((infra, index) => (
            <InfrastructureCard key={infra.title} {...infra} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="relative section-padding bg-african-pattern overflow-hidden">
      <DecorativeDots className="absolute top-10 right-20 w-40 h-40 text-accent opacity-50" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4"
            >
              <Trophy className="w-4 h-4" />
              Actualités
            </motion.div>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-dark mb-4">
              Derniers <span className="text-gradient">Événements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Restez informé de la vie du lycée.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-0"
          >
            <Link
              href="/journal"
              className="group inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
            >
              Voir tout le journal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="space-y-4 max-w-4xl">
          {events.map((event, index) => (
            <EventCard key={event.title} {...event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Banner
function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20L30 10L40 20L30 30Z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
          >
            <GraduationCap className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6">
            Prêt à Construire Votre Avenir ?
          </h2>
          <p className="text-xl text-white/75 mb-10 leading-relaxed">
            Rejoignez le Lycée Professionnel de Yamoussoukro et accédez à des
            formations qui ouvrent les portes de l'emploi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="group relative px-10 py-4 bg-white text-primary rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10">Demander une admission</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cream to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-white/40 text-white hover:bg-white/10 rounded-xl font-semibold text-lg transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero
        title="Lycée Professionnel de Yamoussoukro"
        subtitle="Excellence technique et formation professionnelle de qualité"
        ctaPrimary={{ text: "Découvrir nos filières", href: "/filieres" }}
        ctaSecondary={{ text: "Nous contacter", href: "/contact" }}
      />
      <StatsSection />
      <MissionSection />
      <FilieresSection />
      <InfrastructuresSection />
      <EventsSection />
      <CTABanner />
      <Footer />
    </>
  );
}
