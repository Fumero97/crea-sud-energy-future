const Footer = () => {
  return (
    <footer
      className="py-12"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <span className="text-lg font-bold tracking-tighter">
              CREA<span className="text-gradient-brand">-SUD</span>
            </span>
            <p className="text-xs text-muted-foreground mt-2 max-w-xs">
              Celle a Combustibile Reversibili Avanzate e Sostenibili di bassa
              ed alta temperatura.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground md:justify-center">
            <a href="#progetto" className="hover:text-flame transition-colors">Il Progetto</a>
            <a href="#tecnologie" className="hover:text-flame transition-colors">Tecnologie</a>
            <a href="#team" className="hover:text-flame transition-colors">Team</a>
            <a href="#pubblicazioni" className="hover:text-flame transition-colors">Pubblicazioni</a>
            <a href="#contatti" className="hover:text-flame transition-colors">Contatti</a>
          </div>

          {/* PNRR */}
          <div className="md:text-right">
            <p className="text-xs text-muted-foreground">
              Progetto finanziato nell'ambito del PNRR
            </p>
            <div className="mt-2 inline-flex items-center gap-2">
              <span className="px-3 py-1 text-[10px] text-muted-foreground border border-muted/30 font-medium">
                EU · NextGenerationEU
              </span>
              <span className="px-3 py-1 text-[10px] text-muted-foreground border border-muted/30 font-medium">
                PNRR
              </span>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
        >
          <p>© 2024 CREA-SUD. Tutti i diritti riservati.</p>
          <p>
            Progetto di ricerca finanziato dal Ministero dell'Università e della
            Ricerca.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
