import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import {
  Megaphone,
  BarChart3,
  Globe,
  PenTool,
  Search,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Megaphone,
    title: "Publicité Digitale",
    description:
      "Campagnes publicitaires ciblées sur Google Ads, Facebook Ads et Instagram pour maximiser votre retour sur investissement.",
  },
  {
    icon: Share2,
    title: "Gestion des Réseaux Sociaux",
    description:
      "Création de contenu engageant et gestion complète de vos réseaux sociaux pour développer votre communauté.",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description:
      "Optimisation de votre site web pour les moteurs de recherche afin d'augmenter votre visibilité organique.",
  },
  {
    icon: PenTool,
    title: "Création de Contenu",
    description:
      "Design graphique, rédaction et production de contenu visuel de qualité pour votre marque.",
  },
  {
    icon: Globe,
    title: "Création de Sites Web",
    description:
      "Conception et développement de sites web modernes, responsifs et optimisés pour la conversion.",
  },
  {
    icon: BarChart3,
    title: "Analyse & Reporting",
    description:
      "Suivi des performances, rapports détaillés et recommandations stratégiques basées sur les données.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="container relative mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl font-[var(--font-heading)]">
              Propulsez votre marque
              <br />
              <span className="text-gradient">dans le digital</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
              RS Digital for ADDS and Services — votre partenaire en marketing
              digital. Nous transformons votre présence en ligne en résultats
              concrets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contactez-nous</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#services">Nos services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-[var(--font-heading)]">
              Nos <span className="text-gradient">Services</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Des solutions complètes pour développer votre présence digitale et
              atteindre vos objectifs commerciaux.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glow-border bg-card p-12 text-center md:p-16"
          >
            <h2 className="mb-4 text-3xl font-bold font-[var(--font-heading)] md:text-4xl">
              Prêt à <span className="text-gradient">commencer</span> ?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Discutons de votre projet et voyons comment nous pouvons vous
              aider à atteindre vos objectifs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
