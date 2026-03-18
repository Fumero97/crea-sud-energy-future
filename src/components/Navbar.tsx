import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Il Progetto", href: "#progetto" },
  { label: "Tecnologie", href: "#tecnologie" },
  { label: "Team", href: "#team" },
  { label: "Pubblicazioni", href: "#pubblicazioni" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < 50 || current < lastScroll);
      setLastScroll(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80"
      style={{ boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold tracking-tighter">
          CREA<span className="text-gradient-brand">-SUD</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-flame transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="text-sm px-4 py-2 border border-flame text-flame hover:bg-flame/10 transition-colors duration-200"
          >
            Contatti
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground hover:text-flame transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
