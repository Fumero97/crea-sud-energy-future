import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const partners = [
  { src: "/loghi/unical.png", alt: "Università della Calabria", ruolo_it: "Ente capofila", ruolo_en: "Lead Partner", url: "https://www.unical.it/" },
  { src: "/loghi/sapienza.png", alt: "Università Sapienza di Roma", ruolo_it: "Partner", ruolo_en: "Partner", url: "https://www.uniroma1.it/" },
  { src: "/loghi/salerno.jpg", alt: "Università di Salerno", ruolo_it: "Partner", ruolo_en: "Partner", url: "https://www.unisa.it/" },
  { src: "/loghi/camerino.svg", alt: "Università di Camerino", ruolo_it: "Partner", ruolo_en: "Partner", url: "https://www.unicam.it/" },
  { src: "/loghi/calabra-maceri.png", alt: "Calabra Maceri e Servizi", ruolo_it: "Partner industriale", ruolo_en: "Industrial Partner", url: "https://www.calabramaceri.it/" },
];

const milestones = [
  {
    id: "OR1",
    titolo_it: "Project Management e Disseminazione",
    titolo_en: "Project Management and Dissemination",
    sub_it: "Università della Calabria",
    sub_en: "Università della Calabria",
    deliverable: [
      "M1.1 – Monitoraggio dello stato di avanzamento del progetto",
      "M1.2 – Monitoraggio dello sviluppo del Piano strategico di comunicazione/disseminazione",
    ],
  },
  {
    id: "OR2",
    titolo_it: "Sintesi di ionomeri e di materiali ibridi e nanostrutturati finalizzati allo sviluppo di membrane elettrolitiche nanocomposite per rPEMC",
    titolo_en: "Synthesis of ionomers and hybrid/nanostructured materials for nanocomposite electrolytic membranes for rPEMC",
    sub_it: "Università della Calabria",
    sub_en: "Università della Calabria",
    deliverable: [
      "M2.1 – Conducibilità protonica delle PEM a base di sPSf ≥0.075 S cm⁻¹ @ 120 °C e RH ≤ 40%, e uno swelling di ~ 10%",
      "M2.2 – Modulo di Young delle PEM > 800 MPa",
      "M2.3 – Degradazione della membrana: valutazione della stabilità mediante test di Fenton con perdita di peso <1% dopo 8 ore",
    ],
  },
  {
    id: "OR3",
    titolo_it: "Catalizzatori low-Pt e Pt-free per rPEMC, Preparazione e Caratterizzazione energetica dei MEA e degli stack di rPEMFC",
    titolo_en: "Low-Pt and Pt-free catalysts for rPEMC, Preparation and Energy Characterization of MEAs and rPEMFC stacks",
    sub_it: "Sapienza Università di Roma",
    sub_en: "Sapienza Università di Roma",
    deliverable: [
      "M3.1 – Sviluppo di catalizzatori Pt-free",
      "M3.2 – Definizione della tipologia di membrane più adatte per il funzionamento in modalità reversibile",
      "M3.3 – Realizzazione di stack di celle PEM reversibili",
      "M3.4 – Realizzazione di codici di calcolo fluidodinamici ed elettrochimici per la simulazione del comportamento degli stack",
    ],
  },
  {
    id: "OR4",
    titolo_it: "Sviluppo di nuovi materiali, formulazioni alternative, caratterizzazione e produzione mediante deposizione di film sottili con RF sputtering di celle reversibili (rSOC) operanti a temperature inferiori a 700°C",
    titolo_en: "Development of new materials and production via RF sputtering thin-film deposition of reversible cells (rSOC) operating below 700°C",
    sub_it: "Università degli Studi di Salerno",
    sub_en: "Università degli Studi di Salerno",
    deliverable: [
      "M4.1 – Completamento upgrading attrezzatura per sputtering RF su rSOC 100 cm²",
      "M4.2 – Realizzazione su substrati cristallini di film sottili di diversi materiali di interesse per componenti di rSOC",
      "M4.3 – Realizzazione di componenti di rSOC di 10 cm²",
      "M4.4 – Realizzazione di componenti di rSOC di 100 cm²",
    ],
  },
  {
    id: "OR5",
    titolo_it: "Caratterizzazioni chimico-fisiche avanzate di materiali e MEA per sistemi reversibili rPEMC e rSOC. Sviluppo di metodologie per la diagnosi dello state-of-health",
    titolo_en: "Advanced physico-chemical characterization of materials and MEAs for rPEMC and rSOC systems. Development of state-of-health diagnostic methodologies",
    sub_it: "Università degli Studi di Camerino",
    sub_en: "Università degli Studi di Camerino",
    deliverable: [
      "M5.1 – Risoluzione delle strutture e morfologie dei materiali commerciali disponibili",
      "M5.2 – Caratterizzazione superficiale dei materiali commerciali disponibile",
      "M5.3 – Setup per misure in situ disponibile",
      "M5.4 – Modello elettrochimico di funzionamento della cella disponibile",
      "M5.5 – Catalizzatori derivati da MOFs disponibili",
      "M5.6 – Risoluzione delle strutture e morfologie dei materiali sviluppati nel progetto",
      "M5.7 – Caratterizzazione superficiale dei materiali sviluppati nel progetto disponibile",
      "M5.8 – Caratterizzazione operando disponibile",
      "M5.9 – Metodologia per la prevenzione e il degrado del funzionamento delle celle disponibile",
      "M5.10 – Caratterizzazione dei materiali sintetizzati disponibile, con comportamento stabile in celle singole per t>1000h",
    ],
  },
  {
    id: "OR6",
    titolo_it: "Concept, Design del Sistema Stack Reversibile rPEM e rSOC, Analisi delle Performance Energetiche tramite Modelli Numerici e Attività Sperimentale",
    titolo_en: "Concept and Design of the Reversible Stack System rPEM and rSOC, Energy Performance Analysis via Numerical Models and Experimental Activity",
    sub_it: "Università della Calabria",
    sub_en: "Università della Calabria",
    deliverable: [
      "M6.1 – Prestazioni simulate dell'integrazione BoP-rPEMC che garantiscano il funzionamento dello stack",
      "M6.2 – Prestazioni simulate dell'integrazione BoP-rSOC che garantiscano il funzionamento dello stack",
      "M6.3 – Validazione dei modelli numerici sviluppati su banco prova sperimentale settato e funzionante",
      "M6.4 – Prestazioni del sistema energetico rPEMC superiori all'equivalente sistema discreto separato in EL e FC",
      "M6.5 – Prestazioni del sistema energetico rSOC superiori all'equivalente sistema discreto separato in EL e FC",
    ],
  },
  {
    id: "OR7",
    titolo_it: "Analisi Complessive del Sistema ed Analisi di Casi Studio Applicativi Rilevanti per i Sistemi Reversibili",
    titolo_en: "Overall System Analysis and Analysis of Relevant Application Case Studies for Reversible Systems",
    sub_it: "Calabra Maceri e Recuperi S.r.l.",
    sub_en: "Calabra Maceri e Recuperi S.r.l.",
    deliverable: [
      "M7.1 – Identificazione dei casi studio tecnicamente ottimali per applicazioni Power-to-Hydrogen-to-Power con rSOC",
      "M7.2 – Identificazione dei casi studio economicamente ottimali per applicazioni Power-to-Hydrogen-to-Power con rSOC",
      "M7.3 – Identificazione dei casi studio ambientalmente ottimali per applicazioni Power-to-Hydrogen-to-Power con rSOC",
      "M7.4 – Identificazione dei casi studio tecnicamente ottimali per applicazioni Power-to-X-to-Power con rSOC",
      "M7.5 – Identificazione dei casi studio economicamente ottimali per applicazioni Power-to-X-to-Power con rSOC",
      "M7.6 – Identificazione dei casi studio ambientalmente ottimali per applicazioni Power-to-X-to-Power con rSOC",
    ],
  },
];

const Progetto = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t("nav.project")} | CREA-SUD`;
  }, [t]);

  return (
    <Layout>
      <SEO
        title="Il Progetto CREA-SUD"
        description="Scopri il progetto PNRR CREA-SUD: obiettivi, tecnologie reversibili rPEMC e rSOC, partner dell'ATS e milestone. Finanziato dal Ministero dell'Ambiente e della Sicurezza Energetica."
        canonical="/progetto"
        lang={language as "it" | "en"}
      />
      {/* Header */}
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E08030]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="cs-container relative z-10">
          <p className="cs-eyebrow mb-6 cs-reveal">{t("project.eyebrow")}</p>
          <h1 className="cs-h1 mb-8 cs-reveal-delayed-1">{t("project.title")}</h1>
          <p className="cs-lead max-w-4xl cs-reveal-delayed-2">
            {t("project.lead")}
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-24 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8">
              <p className="text-[18px] text-[#0E1626] font-medium leading-relaxed">
                {t("project.intro")}
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="cs-eyebrow mb-4 text-[#908080]">{t("project.vision_title")}</h3>
                  <p className="text-[14px] text-[#4A4744] leading-relaxed">
                    {t("project.vision_text")}
                  </p>
                </div>
                <div>
                  <h3 className="cs-eyebrow mb-4 text-[#908080]">{t("project.impact_title")}</h3>
                  <p className="text-[14px] text-[#4A4744] leading-relaxed">
                    {t("project.impact_text")}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-[#0E1626] p-8 text-white">
                <h3 className="cs-eyebrow text-white/50 mb-8 uppercase">{t("project.specs_title")}</h3>
                <dl className="space-y-4">
                  {[
                    { label: "CUP", value: "F57G25000280006" },
                    { label: language === "it" ? "Bando" : "Call", value: "Avviso R&S H2 Tipo A" },
                    { label: language === "it" ? "Durata" : "Duration", value: language === "it" ? "15 mesi" : "15 months" },
                    { label: language === "it" ? "Responsabile" : "Coordinator", value: "Prof.ssa Petronilla Fragiacomo" },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-white/10 pb-3 last:border-0">
                      <dt className="cs-mono text-[10px] text-white/50 uppercase mb-1">{item.label}</dt>
                      <dd className="cs-mono font-bold text-[13px] text-white">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologie */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="cs-container">
          <h4 className="cs-eyebrow mb-4">{t("project.tech_title")}</h4>
          <h2 className="cs-h2 mb-12">{t("project.tech_subtitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#C9C5BF] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E08030]" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="cs-mono text-[10px] font-bold text-[#E08030] bg-[#E08030]/10 px-2 py-1 uppercase tracking-wider">rPEMC</span>
                  <span className="cs-mono text-[10px] text-[#908080] uppercase">{t("project.rpemc_sub")}</span>
                </div>
                <h3 className="cs-h3 mb-8">{t("project.rpemc_title")}</h3>
                <div className="space-y-4">
                  {t("project.rpemc_specs").map((s: any) => (
                    <div key={s.key} className="flex border-b border-[#F5F4F2] pb-3 last:border-0">
                      <span className="cs-mono text-[10px] text-[#908080] uppercase w-32 shrink-0 pt-1">{s.key}</span>
                      <span className="text-[14px] text-[#0E1626]">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#C9C5BF] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#30A0D0]" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="cs-mono text-[10px] font-bold text-[#30A0D0] bg-[#30A0D0]/10 px-2 py-1 uppercase tracking-wider">rSOC</span>
                  <span className="cs-mono text-[10px] text-[#908080] uppercase">{t("project.rsoc_sub")}</span>
                </div>
                <h3 className="cs-h3 mb-8">{t("project.rsoc_title")}</h3>
                <div className="space-y-4">
                  {t("project.rsoc_specs").map((s: any) => (
                    <div key={s.key} className="flex border-b border-[#F5F4F2] pb-3 last:border-0">
                      <span className="cs-mono text-[10px] text-[#908080] uppercase w-32 shrink-0 pt-1">{s.key}</span>
                      <span className="text-[14px] text-[#0E1626]">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-24 border-b border-[#E8E6E2] cs-reveal">
        <div className="cs-container">
          <h4 className="cs-eyebrow mb-4">Network</h4>
          <h2 className="cs-h2 mb-12">{t("project.consortium_title")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {partners.map((p) => (
              <a 
                key={p.alt} 
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#C9C5BF] p-6 flex flex-col items-center gap-4 group hover:border-[#E08030] transition-all duration-300 cs-hover-lift"
              >
                <div className="h-16 flex items-center justify-center">
                  <img src={p.src} alt={p.alt} className="max-h-12 max-w-full object-contain transition-transform group-hover:scale-105" />
                </div>
                <div className="text-center">
                  <p className="cs-mono text-[10px] font-bold text-[#0E1626] leading-tight mb-1">{p.alt}</p>
                  <p className="cs-mono text-[9px] text-[#908080] uppercase">
                    {language === "it" ? p.ruolo_it : p.ruolo_en}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="cs-container">
          <h4 className="cs-eyebrow mb-4">Timeline</h4>
          <h2 className="cs-h2 mb-12">{t("project.timeline_title")}</h2>

          <div className="space-y-12">
            {milestones.map((m) => (
              <div key={m.id} className="grid md:grid-cols-12 gap-8 relative group">
                <div className="md:col-span-2">
                  <span className="cs-h3 text-[#E08030] font-serif italic block">{m.id}</span>
                  <span className="cs-mono text-[10px] text-[#908080] uppercase leading-tight block mt-1">
                    {language === "it" ? m.sub_it : m.sub_en}
                  </span>
                </div>
                <div className="md:col-span-10 border-l border-[#C9C5BF] pl-8 pb-4">
                  <h4 className="font-bold text-[16px] text-[#0E1626] mb-6 tracking-tight">
                    {language === "it" ? m.titolo_it : m.titolo_en}
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {m.deliverable.map((d) => {
                      const match = d.match(/^(M[\d.]+)\s*[–-]\s*(.+)$/);
                      const code = match ? match[1] : null;
                      const text = match ? match[2] : d;
                      return (
                        <div key={d} className="border border-[#E8E6E2] bg-white p-4">
                          {code && (
                            <span className="cs-mono text-[11px] font-bold text-[#E08030] block mb-2">{code}</span>
                          )}
                          <p className="text-[13px] text-[#4A4744] leading-snug">{text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Progetto;
