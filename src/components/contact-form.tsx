"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="relative bg-white rounded-3xl shadow-xl border border-gray-100/80 p-8 lg:p-10 overflow-hidden"
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="font-heading font-bold text-2xl text-dark mb-3">
            Message envoyé !
          </h3>
          <p className="text-muted-foreground">
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>
      ) : (
        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <h3 className="font-heading font-bold text-xl text-dark">
              Envoyez-nous un message
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-dark mb-2"
              >
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-dark mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-dark mb-2"
            >
              Sujet *
            </label>
            <select
              id="subject"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white appearance-none"
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="admission">Admission</option>
              <option value="renseignement">Renseignement</option>
              <option value="partenariat">Partenariat</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-dark mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white resize-none"
              placeholder="Décrivez votre demande..."
            />
          </div>

          <button
            type="submit"
            className="group relative w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-bold text-lg overflow-hidden shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span className="relative z-10">Envoyer le message</span>
            <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      )}
    </motion.form>
  );
}
