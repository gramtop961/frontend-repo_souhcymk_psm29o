import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-orange-100/60 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-8 sm:p-10 text-center shadow-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900">Ready to modernize your rentals?</h3>
          <p className="mt-2 text-stone-700">Start your free trial and set up your first rental in minutes.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#pricing" className="inline-flex justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-white shadow hover:shadow-md">Start free</a>
            <a href="#features" className="inline-flex justify-center rounded-md border border-orange-200 bg-white px-6 py-3 text-stone-800 hover:bg-orange-50">See features</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
