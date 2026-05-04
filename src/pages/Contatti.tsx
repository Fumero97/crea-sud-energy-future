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
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2] relative overflow-hidden">
        {/* Decorazione di sfondo */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E08030]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="cs-container relative z-10">
          <p className="cs-eyebrow mb-6 cs-reveal">Relazioni Esterne</p>
          <h1 className="cs-h1 mb-8 cs-reveal-delayed-1">Mettiti in <em>Contatto</em></h1>
          <p className="cs-lead max-w-2xl cs-reveal-delayed-2">
            Per informazioni sul progetto, collaborazioni o chiarimenti tecnici, il nostro team è a tua disposizione.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-8">
              <div className="bg-white border border-[#C9C5BF] p-8 cs-reveal cs-hover-lift">
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E8E6E2] flex items-center justify-center mb-6">
                  <Mail className="text-[#E08030]" size={20} />
                </div>
                <h3 className="cs-h4 mb-2">Email</h3>
                <p className="text-[14px] text-[#4A4744] mb-4">Inviaci un messaggio diretto</p>
                <a href="mailto:info@crea-sud.it" className="cs-link font-medium">info@crea-sud.it</a>
              </div>

              <div className="bg-white border border-[#C9C5BF] p-8 cs-reveal-delayed-1 cs-hover-lift">
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E8E6E2] flex items-center justify-center mb-6">
                  <MapPin className="text-[#E08030]" size={20} />
                </div>
                <h3 className="cs-h4 mb-2">Sede</h3>
                <p className="text-[14px] text-[#4A4744] mb-4">Laboratori di Ricerca Unical</p>
                <p className="text-[15px] font-medium text-[#0E1626]">
                  Via Pietro Bucci, Cubo 44C<br />
                  87036 Rende (CS), Italia
                </p>
              </div>

              <div className="p-8 border-l-4 border-[#E08030] bg-[#FAF9F6]">
                <p className="text-[14px] text-[#4A4744] italic leading-relaxed">
                  "Il progetto CREA-SUD promuove la trasparenza e la condivisione scientifica nel quadro delle iniziative PNRR per la transizione ecologica."
                </p>
              </div>
            </div>

            <div className="md:col-span-8 cs-reveal-delayed-2">
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
