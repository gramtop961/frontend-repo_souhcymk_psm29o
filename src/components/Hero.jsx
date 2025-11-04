import { Rocket, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 pointer-events-none" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-medium border border-orange-200"
            >
              <Rocket size={14} />
              Purpose-built for rental businesses
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900"
            >
              The POS that understands rentals
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-5 text-lg text-stone-700 max-w-xl"
            >
              Manage walk-in sales and time-based rentals in one beautiful system. Track stock availability by date, collect deposits, schedule returns, and automate late fees—without spreadsheets.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-white shadow-lg shadow-orange-200 hover:shadow-xl transition-shadow"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-orange-200 bg-white px-6 py-3 text-stone-800 hover:bg-orange-50"
              >
                Explore features
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
            >
              <div className="flex items-center gap-2 text-stone-700">
                <Calendar className="text-orange-600" size={18} />
                Real-time availability
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <Clock className="text-orange-600" size={18} />
                Hourly & daily rates
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <span className="inline-block h-4 w-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-700" />
                Deposits & late fees
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-orange-200/70 bg-white/60 backdrop-blur-sm shadow-sm h-[420px] sm:h-[480px] lg:h-[560px]">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />

              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,159,67,0.18),transparent_60%)]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[300px] rounded-xl bg-white/90 backdrop-blur border border-orange-100 shadow-lg"
              >
                <div className="p-3">
                  <div className="text-stone-500 text-xs">Current Rental</div>
                  <div className="mt-1 font-semibold text-stone-900">DJI Mavic 3</div>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg bg-orange-50/60 p-2 border border-orange-100">
                      <div className="text-stone-500 text-xs">Return</div>
                      <div className="mt-0.5 rounded-md bg-orange-100 text-orange-700 px-2 py-0.5 w-fit text-xs">Tomorrow 10:00</div>
                    </div>
                    <div className="rounded-lg bg-orange-50/60 p-2 border border-orange-100">
                      <div className="text-stone-500 text-xs">Deposit</div>
                      <div className="mt-0.5 font-medium text-stone-900">$300 held</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">Availability</span>
                      <span className="text-stone-900 font-medium">8 units this weekend</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-orange-100">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "68%" }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                        className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
