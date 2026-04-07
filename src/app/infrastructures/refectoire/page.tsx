"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { Utensils, Users, Clock, Leaf } from "lucide-react";

export default function RefectoirePage() {
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
            Réfectoire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80"
          >
            Des repas équilibrés préparés avec des produits frais locaux.
          </motion.p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Réfectoire"
            subtitle="Une alimentation saine et équilibrée pour nos élèves."
          />
          <div className="grid sm:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, title: "Capacité", desc: "400 places" },
              { icon: Utensils, title: "Menus", desc: "Variés et équilibrés" },
              { icon: Clock, title: "Horaires", desc: "12h00 - 13h30" },
              { icon: Leaf, title: "Standards", desc: "Nutrition équilibrée" },
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
              Menu type
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-dark mb-2">Entrée</h4>
                <p className="text-muted-foreground text-sm">
                  Salade composée ou crudité
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark mb-2">Plat principal</h4>
                <p className="text-muted-foreground text-sm">
                  Riz sauce viande/poisson ou Attiéké poisson
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark mb-2">Accompagnement</h4>
                <p className="text-muted-foreground text-sm">
                  Légumes de saison
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark mb-2">Dessert</h4>
                <p className="text-muted-foreground text-sm">
                  Fruit frais ou compote
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
