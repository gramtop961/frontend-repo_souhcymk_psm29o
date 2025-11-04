import { Rocket, Calendar, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-medium border border-orange-200">
              <Rocket size={14} />
              Purpose-built for rental businesses
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900">
              The POS that understands rentals
            </h1>
            <p className="mt-5 text-lg text-stone-700 max-w-xl">
              Manage walk-in sales and time-based rentals in one beautiful system. Track stock availability by date, collect deposits, schedule returns, and automate late fees—without spreadsheets.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
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
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-orange-200 bg-white p-4 sm:p-6 shadow-sm">
              <div className="rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 p-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-white p-3 border border-orange-100">
                    <div className="text-stone-500">Current Rental</div>
                    <div className="mt-1 font-semibold text-stone-900">DJI Mavic 3</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-stone-500">Return</span>
                      <span className="rounded-md bg-orange-100 text-orange-700 px-2 py-0.5">Tomorrow 10:00</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-orange-100">
                    <div className="text-stone-500">Deposit</div>
                    <div className="mt-1 font-semibold text-stone-900">$300.00 held</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-stone-500">Late fee</span>
                      <span className="text-stone-900 font-medium">$25/day</span>
                    </div>
                  </div>
                  <div className="col-span-2 rounded-lg bg-white p-3 border border-orange-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-stone-500">Availability</div>
                        <div className="mt-1 text-stone-900 font-medium">8 units available this weekend</div>
                      </div>
                      <div className="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-orange-700" />
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-orange-100">
                      <div className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 w-2/3" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-stone-500 text-center">
                Clean, rental-first workflows your staff will love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
