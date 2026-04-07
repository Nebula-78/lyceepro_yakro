"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { Bed, Users, Clock, ShieldCheck } from "lucide-react";

export default function InternatPage() {
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
            Internat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Un hébergement confortable avec un suivi éducatif personnalisé.
          </motion.p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Internat"
            subtitle="Un cadre de vie propice aux études et à l'épanouissement."
          />
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Bed, title: "Capacité", desc: "200 places disponibles" },
              {
                icon: Users,
                title: "Encadrement",
                desc: "Éducateurs dédiés 24h/24",
              },
              {
                icon: ShieldCheck,
                title: "Sécurité",
                desc: "Accès sécurisé, surveillance nocturne",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-dark mb-4">
              Conditions de vie
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li>• Chambres de 2 à 4 lits avec casiers individuels</li>
              <li>• Douches et sanitaires modernes par étage</li>
              <li>• Espace de travail personnel avec bureau et éclairage</li>
              <li>• WiFi haut débit dans tout le bâtiment</li>
              <li>• Salle de détente avec télévision et jeux</li>
            </ul>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>
                <strong>Heures d'étude :</strong> 18h30 - 21h00 (Lun-Ven)
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
