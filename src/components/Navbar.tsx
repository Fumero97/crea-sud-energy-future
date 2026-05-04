import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Il Progetto", href: "/progetto" },
  { label: "Obiettivi Realizzativi", href: "/obiettivi" },
  { label: "Contatti", href: "/contatti" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      {/* Main nav */}
      <nav className="cs-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="CREA-SUD" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-[14px] font-medium transition-colors duration-200 relative py-1 ${
                location.pathname === l.href
                  ? "text-[#002040] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#E08030]"
                  : "text-[#002040]/70 hover:text-[#002040] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#E08030]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#002040] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="cs-container py-4 flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[14px] py-2 px-3 transition-colors ${
                  location.pathname === l.href
                    ? "text-[#E08030] bg-[#FAF9F6] font-semibold"
                    : "text-[#002040]/70 hover:text-[#002040] hover:bg-[#FAF9F6]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="cs-rule-accent" />
    </header>
  );
};

export default Navbar;
