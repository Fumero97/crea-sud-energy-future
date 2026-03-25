import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="bg-white/90 p-2 rounded-md inline-block mb-3">
              <img src="/logo.png" alt="CREA-SUD Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm mt-2 opacity-70 max-w-xs">
              Celle a Combustibile Reversibili Avanzate e Sostenibili di bassa
              ed alta temperatura.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold font-sans mb-3 uppercase tracking-wider opacity-60">
              Navigazione
            </h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/progetto" className="hover:opacity-100 transition-opacity">Il Progetto</Link>
              <Link to="/obiettivi" className="hover:opacity-100 transition-opacity">Obiettivi Realizzativi</Link>
              <Link to="/tecnologie" className="hover:opacity-100 transition-opacity">Tecnologie</Link>
              <Link to="/pubblicazioni" className="hover:opacity-100 transition-opacity">Pubblicazioni</Link>
              <Link to="/contatti" className="hover:opacity-100 transition-opacity">Contatti</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold font-sans mb-3 uppercase tracking-wider opacity-60">
              Finanziamento
            </h4>
            <p className="text-sm opacity-70">
              Progetto finanziato nell'ambito del PNRR — Piano Nazionale di Ripresa e Resilienza.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="px-3 py-1 text-xs border border-background/20 opacity-80">
                EU · NextGenerationEU
              </span>
              <span className="px-3 py-1 text-xs border border-background/20 opacity-80">
                MUR
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2024 CREA-SUD. Tutti i diritti riservati.</p>
          <p>Progetto di ricerca — Ministero dell'Università e della Ricerca</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
