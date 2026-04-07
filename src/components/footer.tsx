import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Share2,
  Play,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Filières", href: "/filieres" },
    { name: "Diplômes", href: "/diplomes" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
  ],
  infrastructures: [
    { name: "Laboratoires", href: "/infrastructures/laboratoires" },
    { name: "Internat", href: "/infrastructures/internat" },
    { name: "Réfectoire", href: "/infrastructures/refectoire" },
    { name: "Foyer", href: "/infrastructures/foyer" },
    { name: "Infirmerie", href: "/infrastructures/infirmerie" },
    { name: "Salles de classe", href: "/infrastructures/salles" },
  ],
  contact: [
    {
      icon: MapPin,
      text: "Yamoussoukro, Côte d'Ivoire",
      href: "#",
    },
    {
      icon: Phone,
      text: "+225 27 30 64 00 00",
      href: "tel:+22527306400",
    },
    {
      icon: Mail,
      text: "contact@lp-yamoussoukro.ci",
      href: "mailto:contact@lp-yamoussoukro.ci",
    },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Site web" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Share2, href: "#", label: "Partager" },
  { icon: Play, href: "#", label: "Vidéo" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-heading font-bold text-lg leading-tight">
                  LP Yamoussoukro
                </p>
                <p className="text-xs text-white/60">Excellence technique</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Centre d'excellence technique inauguré en 2025. Nous formons les
              professionnels de demain.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructures */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Infrastructures
            </h3>
            <ul className="space-y-3">
              {footerLinks.infrastructures.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-xs text-white/60 mb-1">Horaires d'ouverture</p>
              <p className="text-sm font-medium">Lundi - Vendredi</p>
              <p className="text-sm">7h30 - 16h30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Lycée Professionnel de Yamoussoukro.
              Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
