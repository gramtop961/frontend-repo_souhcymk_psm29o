import { CalendarCheck2, CreditCard, Shield, BarChart3, Users, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CalendarCheck2,
    title: "Calendar inventory",
    desc: "See availability by hour or day. Prevent double-bookings and set blackout dates.",
  },
  {
    icon: CreditCard,
    title: "Deposits & holds",
    desc: "Capture deposits, pre-authorize cards, and auto-release on return.",
  },
  {
    icon: Shield,
    title: "Damage waivers",
    desc: "Offer optional coverage and track claims with clear audit history.",
  },
  {
    icon: BarChart3,
    title: "Smart pricing",
    desc: "Hourly, daily, weekend bundles, and long-term discounts built in.",
  },
  {
    icon: Users,
    title: "Customer profiles",
    desc: "ID verification, rental history, and outstanding items at a glance.",
  },
  {
    icon: PackageSearch,
    title: "Serialized tracking",
    desc: "Track each unit with unique IDs, condition notes, and maintenance logs.",
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-amber-50">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-orange-100/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Built for rental realities</h2>
          <p className="mt-3 text-stone-700">Everything you need to sell, rent, and return on time—with fewer clicks.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(255, 159, 67, 0.18)" }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="rounded-lg border border-orange-200 bg-white p-6 shadow-sm"
            >
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
