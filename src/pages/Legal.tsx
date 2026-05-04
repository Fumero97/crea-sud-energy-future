import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "../contexts/LanguageContext";

const Legal = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t("legal.title")} | CREA-SUD`;
  }, [t]);

  return (
    <Layout>
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E08030]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="cs-container relative z-10">
          <p className="cs-eyebrow mb-6 cs-reveal">{t("legal.eyebrow")}</p>
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
                {language === "it" 
                  ? "La presente Privacy Policy ha lo scopo di descrivere le modalità di gestione del sito web del progetto CREA-SUD in riferimento al trattamento dei dati personali degli utenti che lo consultano."
                  : "This Privacy Policy aims to describe the management methods of the CREA-SUD project website regarding the processing of personal data of users who consult it."}
              </p>
              <h3 className="font-bold text-[#0E1626] mb-2">
                {language === "it" ? "Titolare del Trattamento" : "Data Controller"}
              </h3>
              <p className="text-[14px] text-[#4A4744] mb-4">
                {language === "it"
                  ? "Il Titolare del trattamento è l'Università della Calabria, con sede in Via Pietro Bucci, 87036 Rende (CS), Italia, in qualità di ente coordinatore del progetto CREA-SUD."
                  : "The Data Controller is the University of Calabria, located in Via Pietro Bucci, 87036 Rende (CS), Italy, as the coordinating entity of the CREA-SUD project."}
              </p>
            </div>

            <div className="cs-rule" />

            {/* Cookie Policy */}
            <div>
              <h2 className="cs-h3 mb-6">2. Cookie Policy</h2>
              <p className="text-[15px] text-[#4A4744] leading-relaxed mb-4">
                {language === "it"
                  ? "I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive."
                  : "Cookies are small text files that websites visited by users send to their terminals, where they are stored to be retransmitted to the same sites during subsequent visits."}
              </p>
              <h3 className="font-bold text-[#0E1626] mb-2">
                {language === "it" ? "Tipologie di cookie utilizzati" : "Types of cookies used"}
              </h3>
              <p className="text-[14px] text-[#4A4744] mb-4">
                {language === "it"
                  ? "Cookie Tecnici: Sono necessari per il corretto funzionamento del sito. Cookie di Analisi: Utilizziamo cookie anonimizzati per raccogliere informazioni statistiche."
                  : "Technical Cookies: Necessary for the correct functioning of the site. Analytical Cookies: We use anonymized cookies to collect statistical information."}
              </p>
            </div>

            <div className="p-8 bg-[#FAF9F6] border-l-4 border-[#002040]">
              <p className="text-[13px] text-[#908080] italic">
                {t("legal.last_update")}
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
