import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Il Progetto", href: "/progetto" },
  { label: "Obiettivi Realizzativi", href: "/obiettivi" },
  { label: "Tecnologie", href: "/tecnologie" },
  { label: "Pubblicazioni", href: "/pubblicazioni" },
  { label: "Contatti", href: "/contatti" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-background text-xs py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Progetto PNRR — Ministero dell'Università e della Ricerca</span>
          <span className="hidden sm:inline">info@creasud.it</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold text-foreground">
            CREA<span className="text-gradient-brand">-SUD</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm px-3 py-2 transition-colors duration-200 ${
                location.pathname === l.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm py-2 px-3 rounded-sm transition-colors ${
                  location.pathname === l.href
                    ? "text-primary bg-muted font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
