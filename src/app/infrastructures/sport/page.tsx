"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { Dumbbell, Trophy, Flag, Users } from "lucide-react";

export default function SportPage() {
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
            Terrain de Sport
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Des installations sportives pour le développement physique et la
            compétition.
          </motion.p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Installations Sportives"
            subtitle="Des équipements pour la pratique du sport et les compétitions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Flag,
                title: "Football",
                desc: "Terrain réglementaire avec vestiaires",
              },
              {
                icon: Trophy,
                title: "Basket-ball",
                desc: "Terrain bitumé avec panneaux",
              },
              {
                icon: Users,
                title: "Handball",
                desc: "Terrain polyvalent marqué",
              },
              {
                icon: Dumbbell,
                title: "Athlétisme",
                desc: "Piste 400m et sautoirs",
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
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-dark mb-4">
              Compétitions
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Tournoi inter-lycées de football annuel</li>
              <li>• Championnat académique de basket-ball</li>
              <li>• Journée sportive du lycée (athlétisme)</li>
              <li>• Participation aux compétitions nationales</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
