export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Simple pricing</h2>
          <p className="mt-3 text-stone-700">Start free. Upgrade when your rentals take off.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-xl border border-orange-200 bg-white p-6 flex flex-col">
            <div className="text-sm font-medium text-orange-700">Starter</div>
            <div className="mt-2 text-4xl font-semibold text-stone-900">$0</div>
            <div className="text-stone-500">up to 50 rentals/mo</div>
            <ul className="mt-6 space-y-2 text-sm text-stone-700">
              <li>Calendar availability</li>
              <li>Deposits & holds</li>
              <li>Basic reporting</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center rounded-md border border-orange-200 px-4 py-2 hover:bg-orange-50">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-xl border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-amber-50 p-6 shadow-sm flex flex-col">
            <div className="inline-flex w-min whitespace-nowrap rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white">Best for most</div>
            <div className="mt-2 text-4xl font-semibold text-stone-900">$49</div>
            <div className="text-stone-500">up to 500 rentals/mo</div>
            <ul className="mt-6 space-y-2 text-sm text-stone-700">
              <li>Everything in Starter</li>
              <li>Damage waivers</li>
              <li>Serialized items</li>
              <li>Advanced reports</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-white shadow hover:shadow-md">Start free trial</a>
          </div>

          {/* Scale */}
          <div className="rounded-xl border border-orange-200 bg-white p-6 flex flex-col">
            <div className="text-sm font-medium text-orange-700">Scale</div>
            <div className="mt-2 text-4xl font-semibold text-stone-900">$149</div>
            <div className="text-stone-500">unlimited rentals</div>
            <ul className="mt-6 space-y-2 text-sm text-stone-700">
              <li>Multi-location</li>
              <li>API access</li>
              <li>Custom roles</li>
              <li>Dedicated support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center rounded-md border border-orange-200 px-4 py-2 hover:bg-orange-50">Talk to sales</a>
          </div>
        </div>

        <div id="contact" className="mt-16 rounded-xl border border-orange-200 bg-white p-6 text-center">
          <p className="text-stone-700">
            Have questions? Email us at <a className="text-orange-700 underline" href="mailto:hello@rentpos.app">hello@rentpos.app</a>
          </p>
        </div>
      </div>
    </section>
  );
}
