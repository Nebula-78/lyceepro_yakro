"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import BlogCard, { BlogPost } from "@/components/blog-card";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  MessageCircle,
  Heart,
  Tag,
  ChevronRight,
} from "lucide-react";

// Same data as journal page
const posts: BlogPost[] = [
  {
    id: "1",
    slug: "journee-portes-ouvertes-2024",
    title:
      "Journée Portes Ouvertes : Une affluence record pour cette édition 2024",
    excerpt:
      "Plus de 800 visiteurs ont répondu présent à notre invitation lors de la journée portes ouvertes du 15 décembre.",
    content: `C'était un véritable succès que cette édition 2024 de la journée portes ouvertes du Lycée Professionnel de Yamoussoukro. Plus de 800 visiteurs ont franchi les portes de l'établissement tout au long de la journée.

## Un programme riche et varié

Dès 8h du matin, les visiteurs ont été accueillis par les élèves ambassadeurs répartis dans différents points stratégiques du campus. Le programme comprenait :

- **Visites guidées des laboratoires** : Les élèves de filière industrielle ont présenté leurs projets et démonstrations pratiques
- **Ateliers de robotique** : Le club robotique a fait démontrer leur robot 'Kokobo', récemment primé
- **Stands d'information par filière** : Chaque filière avait son espace dédié avec des élèves prêts à répondre aux questions
- **Rencontres avec les enseignants** : Les professeurs étaient disponibles pour discuter des programmes et des débouchés

## Des témoignages inspirants

Plusieurs anciens élèves étaient présents pour partager leur parcours :

> "Grâce à la formation reçue au LPY, j'ai pu intégrer directement une entreprise de production industrielle." — Koffi N'Dri, Promo 2020

> "Le lycée m'a donné les bases solides pour réussir. Aujourd'hui je gère la comptabilité de 3 PME." — Awa Koné, Promo 2021

## Des inscriptions en hausse

La scolarité a enregistré une hausse significative de 25% des demandes de pré-inscription par rapport à l'année précédente, signe de l'attractivité croissante de l'établissement.

Le Proviseur, M. Kouamé N'Guessan, s'est félicité de ce résultat et a remercié toute la communauté éducative pour son implication dans la réussite de cet événement.`,
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
      "L'équipe robotique du LPY a remporté le 1er prix du concours régional avec leur robot 'Kokobo'.",
    content: `Quelle fierté pour notre établissement ! L'équipe robotique du LPY a brillé lors du concours régional de robotique qui s'est tenu à Abidjan le week-end dernier.

## Le robot 'Kokobo', un chef-d'œuvre technique

Le robot 'Kokobo' (qui signifie 'force' en baoulé) est un bras manipulateur autonome capable de trier des déchets en fonction de leur matière. Conçu entièrement par les élèves de la filière Maintenance des Systèmes de Production, il a impressionné le jury par :

- Sa précision de tri (95% de réussite)
- Son autonomie énergétique (panneaux solaires intégrés)
- Son design inspiré de l'artisanat africain

## Une préparation de plusieurs mois

Le projet a débuté en septembre 2024 sous la supervision de M. Jean-Baptiste Koné. Les élèves ont travaillé chaque semaine, parfois tard dans la soirée, pour parfaire leur création.`,
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
      "Danses traditionnelles, expos de peinture, concerts de djembé et dégustation de plats locaux.",
    content: `Pendant 3 jours, le LPY s'est transformé en un véritable village culturel africain. Le Festival Afrik a été l'occasion pour les élèves de célébrer la richesse et la diversité du continent.

## Au programme

- **Défilé de mode traditionnelle** : Les élèves ont présenté des créations inspirées de leurs cultures respectives
- **Exposition de peinture et sculpture** : Les artistes du lycée ont exposé leurs œuvres
- **Concerts de djembé** : Le club musique a assuré des performances rythmées
- **Dégustation de plats locaux** : Attiéké poisson, foutou, kedjenou et autres délices ivoiriens`,
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
      "La Chambre de Commerce et d'Industrie signe un accord avec le LPY.",
    content: `Un accord historique qui ouvre de nouvelles perspectives pour nos diplômés. La CCI s'engage à faciliter l'insertion professionnelle des élèves du LPY dans les entreprises partenaires de la région.`,
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
      "Les élèves ont visité l'usine SOPRI-IVO pour observer les chaînes de production.",
    content: `Les élèves de BAC Pro Agroalimentaire ont eu l'opportunité de découvrir le fonctionnement d'une usine de transformation à grande échelle lors de cette sortie pédagogique.`,
    date: "20 Jan 2025",
    readTime: "4 min",
    author: "Mme. Touré",
    category: "Pédagogie",
    categoryColor: "bg-primary/10 text-primary",
    tags: ["sortie", "industrie", "agroalimentaire"],
  },
];

function ArticleIllustrationFull({ category }: { category: string }) {
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
      className="w-full h-auto"
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="400" fill={color} opacity="0.08" />
      <g opacity="0.4">
        {/* African patterns large */}
        <path d="M200 100L260 40L320 100L260 160Z" fill={color} opacity="0.3" />
        <path
          d="M400 150L460 90L520 150L460 210Z"
          fill={color}
          opacity="0.25"
        />
        <path
          d="M600 200L660 140L720 200L660 260Z"
          fill={color}
          opacity="0.2"
        />

        {/* Zigzag */}
        <path
          d="M0 300L80 270L160 300L240 270L320 300L400 270L480 300L560 270L640 300L720 270L800 300"
          stroke={color}
          strokeWidth="3"
          opacity="0.15"
        />
        <path
          d="M0 330L80 300L160 330L240 300L320 330L400 300L480 330L560 300L640 330L720 300L800 330"
          stroke={color}
          strokeWidth="2"
          opacity="0.1"
        />

        {/* Circles */}
        <circle cx="150" cy="250" r="50" fill={color} opacity="0.12" />
        <circle cx="650" cy="120" r="70" fill={color} opacity="0.08" />

        {/* Dots */}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={i}
            cx={(i % 6) * 140 + 70}
            cy={Math.floor(i / 6) * 80 + 50}
            r="3"
            fill={color}
            opacity="0.15"
          />
        ))}
      </g>

      {/* Center icon */}
      <g transform="translate(340, 130)">
        <circle cx="60" cy="60" r="50" fill={color} opacity="0.15" />
        <circle cx="60" cy="60" r="35" fill={color} opacity="0.2" />
        <circle cx="60" cy="60" r="20" fill={color} opacity="0.35" />
      </g>
    </svg>
  );
}

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const post = posts.find((p) => p.slug === slug);
  const relatedPosts = posts
    .filter(
      (p) =>
        p.id !== post?.id &&
        (p.category === post?.category ||
          p.tags.some((t) => post?.tags.includes(t))),
    )
    .slice(0, 3);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading font-extrabold text-4xl text-dark mb-4">
              Article non trouvé
            </h1>
            <Link
              href="/journal"
              className="text-primary font-semibold hover:underline"
            >
              ← Retour au Journal
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Simple markdown-like renderer
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-heading font-bold text-2xl text-dark mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("> ")) {
        return (
          <blockquote
            key={i}
            className="border-l-4 border-primary pl-6 py-4 my-6 bg-primary/5 rounded-r-xl italic text-muted-foreground leading-relaxed"
          >
            {block.replace("> ", "")}
          </blockquote>
        );
      }
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .map((line) =>
            line
              .replace("- ", "")
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          );
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed text-base"
          dangerouslySetInnerHTML={{
            __html: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      );
    });
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-white border-b border-gray-100">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/journal"
              className="hover:text-primary transition-colors"
            >
              Journal
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative py-12 overflow-hidden">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold ${post.categoryColor} mb-6`}
            >
              <Tag className="w-4 h-4" />
              {post.category}
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} de lecture</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mt-6">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium">
                <Share2 className="w-4 h-4" />
                Partager
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-red-50 hover:text-red-500 transition-colors text-sm font-medium">
                <Heart className="w-4 h-4" />
                J'aime
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                Commenter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Illustration */}
      <section className="pb-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-100/80"
          >
            <ArticleIllustrationFull category={post.category} />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding pt-12 bg-african-pattern relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100/80 p-8 lg:p-12"
          >
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-heading font-bold text-lg text-dark mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Articles Similaires"
              subtitle="Découvrez d'autres articles qui pourraient vous intéresser."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p, i) => (
                <BlogCard key={p.id} post={p} variant="default" index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
