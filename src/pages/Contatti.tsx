import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const Contatti = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contatti | CREA-SUD · Relazioni Esterne";
  }, []);

  // NOTA: Sostituire 'YOUR_FORMSPREE_ID' con l'ID reale fornito da Formspree.com
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgzjgnq"; // Placeholder o ID reale se fornito

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Si è verificato un errore. Riprova più tardi.");
      }
    } catch (error) {
      alert("Si è verificato un errore di connessione.");
    }
  };

  return (
    <Layout>
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <p className="cs-eyebrow mb-4">Relazioni Esterne</p>
          <h1 className="cs-h1 mb-6">Contattaci</h1>
          <p className="cs-lead max-w-2xl">
            Siamo aperti a collaborazioni con enti di ricerca, partner industriali e istituzioni nel campo delle tecnologie dell'idrogeno.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="cs-eyebrow text-[#908080]">Contatti Diretti</h2>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 bg-[#002040] flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="cs-mono text-[10px] uppercase text-[#908080] mb-1">Email Istituzionale</h3>
                    <a href="mailto:info@crea-sud.it" className="cs-link text-[16px] font-bold">
                      info@crea-sud.it
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 pt-6">
                  <div className="shrink-0 w-12 h-12 bg-[#002040] flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="cs-mono text-[10px] uppercase text-[#908080] mb-1">Sede di Coordinamento</h3>
                    <p className="text-[#4A4744] text-[15px] leading-relaxed">
                      <strong>Università della Calabria</strong><br />
                      Dipartimento di Ingegneria Meccanica,<br />
                      Energetica e Gestionale (DIMEG)<br />
                      Via Pietro Bucci, Cubo 44C<br />
                      87036 Rende (CS), Italia
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 border-l-4 border-[#E08030] bg-[#FAF9F6]">
                <p className="text-[14px] text-[#4A4744] italic leading-relaxed">
                  "Il progetto CREA-SUD promuove la trasparenza e la condivisione scientifica nel quadro delle iniziative PNRR per la transizione ecologica."
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="bg-white border border-[#C9C5BF] p-10">
                {submitted ? (
                  <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-[#E08030]/10 text-[#E08030] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={40} />
                    </div>
                    <div>
                      <h3 className="cs-h3 mb-2">Messaggio Inviato</h3>
                      <p className="text-[#4A4744] text-[15px]">
                        Grazie per averci contattato. Il team di CREA-SUD ti risponderà al più presto.
                      </p>
                    </div>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="cs-link text-[14px] font-bold uppercase tracking-wider"
                    >
                      Invia un altro messaggio
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="cs-h3 mb-8">Inviaci un messaggio</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">Nome e Cognome</label>
                          <input
                            required
                            name="name"
                            type="text"
                            placeholder="Inserisci il tuo nome"
                            className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">Indirizzo Email</label>
                          <input
                            required
                            name="email"
                            type="email"
                            placeholder="email@esempio.com"
                            className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">Oggetto</label>
                        <input
                          required
                          name="subject"
                          type="text"
                          placeholder="Collaborazione, info tecniche, etc."
                          className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">Messaggio</label>
                        <textarea
                          required
                          name="message"
                          rows={6}
                          placeholder="Come possiamo aiutarti?"
                          className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="cs-btn cs-btn--primary w-full justify-center py-4"
                      >
                        Invia Messaggio <Send size={16} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
