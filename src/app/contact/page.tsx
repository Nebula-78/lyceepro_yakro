"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import SectionTitle from "@/components/section-title";
import ContactForm from "@/components/contact-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Headphones } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Yamoussoukro, Côte d'Ivoire", "Quartier Résidentiel, BP 1234"],
  },
  {
    icon: Phone,
    title: "Téléphones",
    lines: [
      "Standard : +225 27 30 64 00 00",
      "Scolarité : +225 27 30 64 00 01",
    ],
  },
  {
    icon: Mail,
    title: "Emails",
    lines: ["contact@lp-yamoussoukro.ci", "scolarite@lp-yamoussoukro.ci"],
  },
  {
    icon: Clock,
    title: "Horaires d'ouverture",
    lines: ["Lundi - Vendredi", "7h30 - 16h30"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Contact"
        subtitle="N'hésitez pas à nous contacter pour toute question ou demande d'information."
      />

      {/* Contact Section */}
      <section className="bg-african-pattern relative overflow-hidden section-padding">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="relative container-custom">
          <SectionTitle
            title="Contactez-nous"
            subtitle="Notre équipe est à votre disposition pour répondre à vos questions."
          />
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark mb-1">
                      {item.title}
                    </h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white mt-8"
              >
                <Headphones className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="font-heading font-bold text-xl mb-2">
                  Support disponible
                </h3>
                <p className="text-white/80 text-sm">
                  Notre équipe pédagogique est disponible du lundi au vendredi
                  pour répondre à toutes vos questions sur les formations, les
                  inscriptions et la vie scolaire.
                </p>
              </motion.div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-100 max-w-6xl mx-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63438.12698489488!2d-5.3167!3d6.8217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1944e43a4b3d1%3A0x7e1b8e9b8b8b8b8b!2sYamoussoukro%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
