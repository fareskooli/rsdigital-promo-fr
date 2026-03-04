import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-border/50 bg-card p-8 transition-all duration-300 hover:glow-border"
    >
      <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-3 text-xl font-semibold font-[var(--font-heading)] text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
