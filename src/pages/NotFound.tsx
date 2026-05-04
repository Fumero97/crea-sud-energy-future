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
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center cs-container py-24">
        <p className="cs-eyebrow mb-6 cs-reveal">Errore 404</p>
        <h1 className="cs-h1 mb-8 cs-reveal-delayed-1">
          Pagina non <em>trovata</em>
        </h1>
        <p className="cs-lead mb-10 cs-reveal-delayed-2 mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          to="/"
          className="cs-btn cs-btn--primary cs-reveal-delayed-2"
        >
          Torna alla Home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
