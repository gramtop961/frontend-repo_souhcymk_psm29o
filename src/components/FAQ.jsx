import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Can I use RentPOS for sales and rentals?", a: "Yes. Sell products and rent items in the same checkout, with deposits and time-based rates." },
  { q: "Do you support deposits and late fees?", a: "Absolutely. Configure deposit amounts and automated late fee rules per item or category." },
  { q: "Is there a contract?", a: "No. Start free and cancel anytime. Upgrade only when you're ready." },
  { q: "Do you have multi-location support?", a: "Yes, available on Scale with centralized inventory and reporting across stores." },
];

function FAQItem({ item, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: 0.05 * i + 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-lg border border-orange-200 bg-white"
    >
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-medium text-stone-900">{item.q}</span>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden px-4"
      >
        <div className="pb-4 text-sm text-stone-600">{item.a}</div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-50 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold text-stone-900"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-stone-700"
          >
            Everything you need to know about getting started.
          </motion.p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} item={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
