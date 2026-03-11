import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Phone, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold font-[var(--font-heading)] md:text-5xl">
              <span className="text-gradient">Contactez</span>-nous
            </h1>
            <p className="text-muted-foreground text-lg">
              Vous avez un projet en tête ? Envoyez-nous un message et notre équipe vous répondra rapidement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-border/50 bg-card p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold font-[var(--font-heading)] text-foreground mb-2">
                Envoyez-nous un message
              </h2>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <User className="h-4 w-4 text-primary" /> Nom complet
                </label>
                <Input
                  required
                  maxLength={100}
                  placeholder="Votre nom complet"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Mail className="h-4 w-4 text-primary" /> Adresse e-mail
                </label>
                <Input
                  required
                  type="email"
                  maxLength={255}
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Phone className="h-4 w-4 text-primary" /> Téléphone
                </label>
                <Input
                  type="tel"
                  maxLength={20}
                  placeholder="+212 6 00 00 00 00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageSquare className="h-4 w-4 text-primary" /> Message
                </label>
                <Textarea
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Envoi en cours..." : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </motion.form>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="rounded-2xl border border-border/50 bg-card p-8 space-y-6">
                <h2 className="text-2xl font-bold font-[var(--font-heading)] text-foreground">
                  Autres moyens de contact
                </h2>

                <div className="space-y-5">
                  <a href="tel:+212600000000" className="flex items-start gap-4 group">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Téléphone</p>
                      <p className="text-sm text-muted-foreground">+212 6 00 00 00 00</p>
                    </div>
                  </a>

                  <a href="mailto:bmwm3things@gmail.com" className="flex items-start gap-4 group">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
                      <p className="text-sm text-muted-foreground">bmwm3things@gmail.com</p>
                    </div>
                  </a>

                  <a href="https://www.facebook.com/RSdigital.tn" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Facebook className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Facebook</p>
                      <p className="text-sm text-muted-foreground">Notre page Facebook</p>
                    </div>
                  </a>

                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="rounded-lg bg-red-500/10 p-3">
                      <MapPin className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Adresse</p>
                      <p className="text-sm text-muted-foreground">Voir sur Google Maps</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-green-500 p-6 text-white hover:bg-green-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="font-bold text-lg">Contactez-nous sur WhatsApp</p>
                  <p className="text-white/80 text-sm">Réponse rapide garantie</p>
                </div>
              </a>

              {/* Google Maps Embed */}
              <div className="rounded-2xl border border-border/50 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846!2d-7.589!3d33.573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIyLjgiTiA3wrAzNSczMi40Ilc!5e0!3m2!1sfr!2sma!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Notre emplacement"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
