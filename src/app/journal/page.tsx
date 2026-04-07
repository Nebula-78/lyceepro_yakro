"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import SectionTitle from "@/components/section-title";
import BlogCard, { BlogPost } from "@/components/blog-card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Filter,
  PenLine,
  Users,
  Camera,
  Trophy,
  GraduationCap,
  Sparkles,
  Clock,
  Share2,
} from "lucide-react";

const posts: BlogPost[] = [
  {
    id: "1",
    slug: "journee-portes-ouvertes-2024",
    title:
      "Journée Portes Ouvertes : Une affluence record pour cette édition 2024",
    excerpt:
      "Plus de 800 visiteurs ont répondu présent à notre invitation lors de la journée portes ouvertes du 15 décembre. Entre démonstrations pratiques, rencontres avec les enseignants et visites des laboratoires, cet événement a été un véritable succès.",
    content: "",
    date: "18 Déc 2024",
    readTime: "5 min",
    author: "Rédaction LPY",
    category: "Événement",
    categoryColor: "bg-primary/10 text-primary",
    tags: ["portes-ouvertes", "événement", "visiteurs"],
    featured: true,
  },
  {
    id: "2",
    slug: "victoire-concours-robotique",
    title: "Nos élèves champions au concours régional de robotique !",
    excerpt:
      "L'équipe robotique du LPY a remporté le 1er prix du concours régional avec leur robot 'Kokobo', un bras manipulateur autonome capable de trier des déchets. Un exploit salué par le jury.",
    content: "",
    date: "12 Jan 2025",
    readTime: "4 min",
    author: "M. Koné",
    category: "Sport",
    categoryColor: "bg-secondary/10 text-secondary",
    tags: ["robotique", "concours", "innovation"],
  },
  {
    id: "3",
    slug: "festival-culturel-afrik",
    title:
      "Festival Culturel Afrik : Quand nos élèves célèbrent la diversité africaine",
    excerpt:
      "Danses traditionnelles, expos de peinture, concerts de djembé et dégustation de plats locaux : le festival culturel a transformé le lycée en un véritable village africain pendant 3 jours.",
    content: "",
    date: "5 Fév 2025",
    readTime: "6 min",
    author: "Aminata D.",
    category: "Culture",
    categoryColor: "bg-accent/10 text-accent",
    tags: ["culture", "festival", "diversité"],
  },
  {
    id: "4",
    slug: "partenariat-entreprise-locale",
    title: "Nouveau partenariat avec la CCI pour l'insertion professionnelle",
    excerpt:
      "La Chambre de Commerce et d'Industrie signe un accord avec le LPY pour faciliter l'insertion de nos diplômés dans les entreprises de la région.",
    content: "",
    date: "28 Jan 2025",
    readTime: "3 min",
    author: "Direction",
    category: "Social",
    categoryColor: "bg-dark/10 text-dark",
    tags: ["partenariat", "emploi", "CCI"],
  },
  {
    id: "5",
    slug: "sortie-pedagogique-usine",
    title: "Sortie pédagogique à l'usine de transformation agroalimentaire",
    excerpt:
      "Les élèves de BAC Pro Agroalimentaire ont visité l'usine SOPRI-IVO pour observer les chaînes de production et comprendre les processus industriels.",
    content: "",
    date: "20 Jan 2025",
    readTime: "4 min",
    author: "Mme. Touré",
    category: "Pédagogie",
    categoryColor: "bg-primary/10 text-primary",
    tags: ["sortie", "industrie", "agroalimentaire"],
  },
  {
    id: "6",
    slug: "club-theatre-spectacle",
    title: "Le Club Théâtre présente 'Les Racines du Savoir'",
    excerpt:
      "Une pièce originale écrite et jouée par les élèves du club théâtre, mêlant tradition orale et modernité dans une mise en scène captivante.",
    content: "",
    date: "14 Fév 2025",
    readTime: "3 min",
    author: "Club Théâtre",
    category: "Culture",
    categoryColor: "bg-accent/10 text-accent",
    tags: ["théâtre", "club", "spectacle"],
  },
  {
    id: "7",
    slug: "rencontre-sportive-lycees",
    title: "Tournoi inter-lycées : Le LPY domine en football et basket",
    excerpt:
      "Nos équipes sportives ont brillé lors du tournoi académique en décrochant la victoire en football masculin et en basket féminin.",
    content: "",
    date: "8 Fév 2025",
    readTime: "3 min",
    author: "Service Sport",
    category: "Sport",
    categoryColor: "bg-secondary/10 text-secondary",
    tags: ["sport", "tournoi", "victoire"],
  },
  {
    id: "8",
    slug: "atelier-entrepreneuriat",
    title: "Atelier Entrepreneuriat : Apprendre à créer son entreprise",
    excerpt:
      "Un workshop de 3 jours animé par des chefs d'entreprise locaux pour initier les élèves de terminale à la création d'entreprise.",
    content: "",
    date: "1 Fév 2025",
    readTime: "4 min",
    author: "Service Orientation",
    category: "Pédagogie",
    categoryColor: "bg-primary/10 text-primary",
    tags: ["entrepreneuriat", "atelier", "formation"],
  },
  {
    id: "9",
    slug: "inauguration-nouveau-labo",
    title: "Inauguration du nouveau laboratoire d'informatique",
    excerpt:
      "50 ordinateurs dernière génération, un espace moderne et climatisé : le nouveau labo informatique offre des conditions optimales d'apprentissage.",
    content: "",
    date: "25 Jan 2025",
    readTime: "3 min",
    author: "Direction",
    category: "Vie scolaire",
    categoryColor: "bg-dark/10 text-dark",
    tags: ["inauguration", "équipement", "informatique"],
  },
  {
    id: "10",
    slug: "action-solidarite",
    title: "Action solidaire : Collecte de fournitures pour les écoles rurales",
    excerpt:
      "Les élèves du Club Solidarité ont organisé une collecte qui a permis de récolter plus de 500 cahiers et 200 kits scolaires pour les écoles de brousse.",
    content: "",
    date: "18 Jan 2025",
    readTime: "3 min",
    author: "Club Solidarité",
    category: "Social",
    categoryColor: "bg-dark/10 text-dark",
    tags: ["solidarité", "collecte", "entraide"],
  },
  {
    id: "11",
    slug: "remise-diplomes-2024",
    title: "Cérémonie de remise des diplômes : La promotion 2024 à l'honneur",
    excerpt:
      "320 élèves ont reçu leur diplôme lors d'une cérémonie émouvante en présence des familles et des autorités académiques.",
    content: "",
    date: "23 Déc 2024",
    readTime: "5 min",
    author: "Rédaction LPY",
    category: "Événement",
    categoryColor: "bg-primary/10 text-primary",
    tags: ["diplômes", "cérémonie", "réussite"],
  },
  {
    id: "12",
    slug: "club-robotique-drone",
    title: "Le Club Robotique travaille sur un drone agricole innovant",
    excerpt:
      "Les membres du club planchent sur un prototype de drone capable de surveiller les cultures et détecter les maladies des plantes.",
    content: "",
    date: "10 Fév 2025",
    readTime: "4 min",
    author: "Club Robotique",
    category: "Pédagogie",
    categoryColor: "bg-primary/10 text-primary",
    tags: ["robotique", "drone", "innovation", "agriculture"],
  },
];

const categories = [
  { name: "Tout", icon: Newspaper, color: "bg-primary/10 text-primary" },
  { name: "Événement", icon: Sparkles, color: "bg-primary/10 text-primary" },
  { name: "Sport", icon: Trophy, color: "bg-secondary/10 text-secondary" },
  { name: "Culture", icon: PenLine, color: "bg-accent/10 text-accent" },
  { name: "Social", icon: Users, color: "bg-dark/10 text-dark" },
  {
    name: "Pédagogie",
    icon: GraduationCap,
    color: "bg-primary/10 text-primary",
  },
  { name: "Vie scolaire", icon: Camera, color: "bg-dark/10 text-dark" },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredPosts =
    activeCategory === "Tout"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter(
    (p) => p.id !== featuredPost?.id || activeCategory !== "Tout",
  );
  const recentPosts = filteredPosts.slice(0, 4);
  const sidebarPosts = filteredPosts.slice(4, 8);

  return (
    <>
      <Navbar />

      <PageHeader
        title="Le Journal du LPY"
        subtitle="Toute l'actualité du Lycée Professionnel : événements, compétitions, vie des clubs et projets de nos élèves."
      />

      {/* Category Filter */}
      <section className="relative py-8 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.name
                    ? `${cat.color} shadow-md ring-2 ring-current/10`
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-dark"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && activeCategory === "Tout" && (
        <section className="section-padding pb-8 bg-african-pattern relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Article à la une
            </motion.div>
            <BlogCard post={featuredPost} variant="featured" />
          </div>
        </section>
      )}

      {/* Main Content Grid */}
      <section className="section-padding bg-african-pattern relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionTitle
            title="Derniers Articles"
            subtitle="Découvrez les dernières actualités de la vie scolaire et parascolaire."
            align="left"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main articles */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-6"
                >
                  {regularPosts.length > 0 ? (
                    regularPosts.map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-16">
                      <Newspaper className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                      <p className="text-muted-foreground text-lg">
                        Aucun article dans cette catégorie pour le moment.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent posts */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100/80 p-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Les plus récents
                </h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 4).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <Link href={`/journal/${post.slug}`} className="block">
                        <div className="flex gap-4 items-start">
                          {/* Mini illustration */}
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <ArticleIllustrationMini category={post.category} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-1 ${post.categoryColor}`}
                            >
                              {post.category}
                            </span>
                            <h4 className="font-heading font-semibold text-sm text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                              {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {post.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats card */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Le Journal en chiffres
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Articles publiés</span>
                    <span className="font-heading font-bold text-2xl">
                      {posts.length}
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/20" />
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Catégories</span>
                    <span className="font-heading font-bold text-2xl">
                      {categories.length - 1}
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/20" />
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Ce mois-ci</span>
                    <span className="font-heading font-bold text-2xl">5</span>
                  </div>
                </div>
              </div>

              {/* Tags cloud */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100/80 p-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">
                  Tags populaires
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(posts.flatMap((p) => p.tags)))
                    .slice(0, 12)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-medium hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-primary-dark to-dark" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M20 20L30 10L40 20L30 30Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
            >
              <Share2 className="w-8 h-8 text-accent" />
            </motion.div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">
              Ne ratez aucune actualité !
            </h2>
            <p className="text-white/65 mb-8">
              Abonnez-vous pour recevoir les dernières nouvelles du Lycée
              directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email..."
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-accent transition-colors"
              />
              <button className="px-6 py-3.5 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold transition-colors shadow-lg shadow-accent/25">
                S'abonner
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Mini illustration component for sidebar
function ArticleIllustrationMini({ category }: { category: string }) {
  const colors: Record<string, string> = {
    Événement: "#1a5f2a",
    Sport: "#e85d26",
    Culture: "#f0a030",
    Social: "#264653",
    Pédagogie: "#1a5f2a",
    "Vie scolaire": "#e85d26",
  };

  const color = colors[category] || "#1a5f2a";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="64" height="64" fill={color} opacity="0.1" />
      <circle cx="32" cy="32" r="16" fill={color} opacity="0.2" />
      <circle cx="32" cy="32" r="8" fill={color} opacity="0.3" />
    </svg>
  );
}
