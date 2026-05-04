import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding flex flex-col items-center justify-center min-h-[60vh] text-center">

        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Errore 404</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          Pagina non trovata
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
        >
          Torna alla Home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
