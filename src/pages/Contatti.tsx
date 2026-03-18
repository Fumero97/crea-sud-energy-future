import Layout from "@/components/Layout";
import { Mail, MapPin } from "lucide-react";

const Contatti = () => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Contatti</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Contattaci
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Per informazioni su partnership, pubblicazioni e opportunità di ricerca.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@creasud.it" className="text-primary hover:underline">
                    info@creasud.it
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Sede di coordinamento</h3>
                  <p className="text-muted-foreground text-sm">
                    Università della Calabria<br />
                    Dipartimento di Ingegneria Meccanica,<br />
                    Energetica e Gestionale<br />
                    87036 Rende (CS), Italia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted border border-border rounded-sm p-8">
              <h3 className="font-serif font-bold text-foreground mb-4">Inviaci un messaggio</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Nome</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Messaggio</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                >
                  Invia messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
