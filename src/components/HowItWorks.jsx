import { motion } from "framer-motion";
import { ScanLine, CalendarClock, Receipt, Truck } from "lucide-react";

const steps = [
  { icon: ScanLine, title: "Add items", desc: "Import your catalog, set hourly/daily rates and deposits." },
  { icon: CalendarClock, title: "Book fast", desc: "Search availability, reserve by time, auto-calc pricing." },
  { icon: Receipt, title: "Charge & sign", desc: "Capture deposits, digital signatures, and receipts." },
  { icon: Truck, title: "Return & settle", desc: "Late fees and damages handled with 1 click." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-amber-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold text-stone-900"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-stone-700"
          >
            Get from setup to first rental in minutes with a simple, guided flow.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative rounded-xl border border-orange-200 bg-white p-6 shadow-sm"
            >
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,159,67,0.08)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
