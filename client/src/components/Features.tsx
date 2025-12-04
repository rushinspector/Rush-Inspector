import { Clock, ShieldCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Last-Minute Bookings",
    description: "Your regular inspectors are fully booked—we find you one within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Peak Season Coverage",
    description: "Everyone's booked? We maintain backup capacity when demand is high.",
  },
  {
    icon: UserCheck,
    title: "Deal Protection",
    description: "We communicate directly with you. No confusing scheduling. One form, and we handle the coordination.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">When You Need Us</h2>
          <p className="text-muted-foreground text-lg">We connect you with licensed inspectors when your usual contacts can’t help.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
