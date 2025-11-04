import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Switched from spreadsheets and never looked back. Our weekend turnarounds are twice as fast.",
    author: "Maya P.",
    role: "Owner, LensLab Rentals",
  },
  {
    quote:
      "Deposits and late fees are fully automated—cash flow improved in the first month.",
    author: "Jordan K.",
    role: "GM, eBike City",
  },
  {
    quote:
      "Calendar inventory is a game-changer. We can finally see conflicts before they happen.",
    author: "Aisha R.",
    role: "Ops Lead, EventGear Co.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-amber-50">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-orange-100/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold text-stone-900"
          >
            Loved by rental teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-stone-700"
          >
            Real stories from businesses using RentPOS every day.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="#F97316" className="text-orange-500" />
                ))}
              </div>
              <p className="mt-3 text-stone-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-stone-600">
                <span className="font-medium text-stone-900">{t.author}</span> — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
