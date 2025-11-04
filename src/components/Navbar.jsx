import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-orange-100 transition-shadow ${
        elevated ? "shadow-[0_6px_20px_rgba(255,159,67,0.15)]" : ""
      }`}
    >
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

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden pb-4"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
