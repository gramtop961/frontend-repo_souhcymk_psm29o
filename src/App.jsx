import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-orange-100 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-sm text-stone-600">
          <p>© {new Date().getFullYear()} RentPOS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-900">Privacy</a>
            <a href="#" className="hover:text-stone-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
