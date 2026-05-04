import { useEffect } from "react";
import Layout from "@/components/Layout";

const Legal = () => {
  useEffect(() => {
    document.title = "Privacy & Cookie Policy | CREA-SUD";
  }, []);

  return (
    <Layout>
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E08030]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="cs-container relative z-10">
          <p className="cs-eyebrow mb-6 cs-reveal">Documentazione Legale</p>
          <h1 className="cs-h1 mb-8 cs-reveal-delayed-1">Privacy & <em>Cookie</em> Policy</h1>
        </div>
      </div>

      <section className="py-24 cs-reveal-delayed-2">
        <div className="cs-container max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-12">
            
            {/* Privacy Policy */}
            <div>
              <h2 className="cs-h3 mb-6">1. Privacy Policy</h2>
              <p className="text-[15px] text-[#4A4744] leading-relaxed mb-4">
                La presente Privacy Policy ha lo scopo di descrivere le modalità di gestione del sito web del progetto <strong>CREA-SUD</strong> in riferimento al trattamento dei dati personali degli utenti che lo consultano.
              </p>
              <h3 className="font-bold text-[#0E1626] mb-2">Titolare del Trattamento</h3>
              <p className="text-[14px] text-[#4A4744] mb-4">
                Il Titolare del trattamento è l'Università della Calabria, con sede in Via Pietro Bucci, 87036 Rende (CS), Italia, in qualità di ente coordinatore del progetto CREA-SUD.
              </p>
              <h3 className="font-bold text-[#0E1626] mb-2">Tipologia di dati trattati</h3>
              <p className="text-[14px] text-[#4A4744] mb-4">
                Dati di navigazione: I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet.<br />
                Dati forniti volontariamente: L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito o tramite il form di contatto comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste.
              </p>
            </div>

            <div className="cs-rule" />

            {/* Cookie Policy */}
            <div>
              <h2 className="cs-h3 mb-6">2. Cookie Policy</h2>
              <p className="text-[15px] text-[#4A4744] leading-relaxed mb-4">
                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive.
              </p>
              <h3 className="font-bold text-[#0E1626] mb-2">Tipologie di cookie utilizzati</h3>
              <p className="text-[14px] text-[#4A4744] mb-4">
                <strong>Cookie Tecnici:</strong> Sono necessari per il corretto funzionamento del sito. Senza questi cookie, il sito non potrebbe funzionare correttamente.<br />
                <strong>Cookie di Analisi:</strong> Utilizziamo cookie di terze parti (es. Google Analytics) in forma anonimizzata per raccogliere informazioni statistiche sull'utilizzo del sito al fine di migliorarne le prestazioni.
              </p>
              <h3 className="font-bold text-[#0E1626] mb-2">Gestione dei Cookie</h3>
              <p className="text-[14px] text-[#4A4744] mb-4">
                L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione dei cookie tecnici potrebbe compromettere l'utilizzo delle funzionalità del sito.
              </p>
            </div>

            <div className="p-8 bg-[#FAF9F6] border-l-4 border-[#002040]">
              <p className="text-[13px] text-[#908080] italic">
                Ultimo aggiornamento: Maggio 2026. CREA-SUD si riserva il diritto di modificare questa policy in qualsiasi momento per adeguarla a nuove normative.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
