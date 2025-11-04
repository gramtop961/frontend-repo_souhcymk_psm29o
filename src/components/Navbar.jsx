import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-orange-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white shadow-lg">
              <ShoppingCart size={20} />
            </div>
            <span className="font-semibold text-stone-800">RentPOS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-white shadow hover:shadow-md transition-shadow"
            >
              <User size={18} />
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-orange-50"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-stone-700 hover:bg-orange-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-2 text-white text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
