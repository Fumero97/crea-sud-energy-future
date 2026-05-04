import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const orData = [
  {
    id: "or1",
    num: "OR1",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo_it: "Project Management & Disseminazione",
    titolo_en: "Project Management & Dissemination",
    obiettivo_it: "Coordinamento delle attività di progetto, gestione amministrativa e finanziaria, e disseminazione dei risultati scientifici.",
    obiettivo_en: "Coordination of project activities, administrative and financial management, and dissemination of scientific results.",
    deliverables: [
      "D1.1 - M7: Intermediate Progress Report",
      "D1.2 - M7: Strategic Communication Plan",
      "D1.1 - M15: Final Progress Report",
    ],
  },
  {
    id: "or2",
    num: "OR2",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo_it: "Sintesi di ionomeri e materiali ibridi per rPEMC",
    titolo_en: "Synthesis of Ionomers and Hybrid Materials for rPEMC",
    obiettivo_it: "Sviluppo di nuove membrane elettrolitiche basate su ionomeri innovativi e materiali ibridi organico-inorganici.",
    obiettivo_en: "Development of new electrolytic membranes based on innovative ionomers and organic-inorganic hybrid materials.",
    deliverables: [
      "D2.1 - M7: Optimized Nanocomposite PEMs",
      "D2.3 - M7: Membrane Characterization Report",
      "D2.3 - M15: Post-mortem Analysis Report",
    ],
  },
  {
    id: "or3",
    num: "OR3",
    ente: "Università Sapienza di Roma",
    logo: "/loghi/sapienza.png",
    url: "https://www.uniroma1.it/",
    titolo_it: "Catalizzatori low-Pt e Pt-free per rPEMC",
    titolo_en: "Low-Pt and Pt-free Catalysts for rPEMC",
    obiettivo_it: "Progettazione e sintesi di catalizzatori a basso contenuto di platino e privi di platino per celle reversibili PEM.",
    obiettivo_en: "Design and synthesis of low-platinum and platinum-free catalysts for reversible PEM cells.",
    deliverables: [
      "D3.1 - M7: Phase I Catalyst Report",
      "D3.3 - M9: Innovative Configuration Analysis",
      "D3.4 - M15: Reversible Stack Design Report",
    ],
  },
  {
    id: "or4",
    num: "OR4",
    ente: "Università di Salerno",
    logo: "/loghi/salerno.jpg",
    url: "https://www.unisa.it/",
    titolo_it: "Nuovi materiali e deposizione RF sputtering per rSOC",
    titolo_en: "New Materials and RF Sputtering Deposition for rSOC",
    obiettivo_it: "Sviluppo di nuovi materiali e tecniche di deposizione tramite RF sputtering per celle rSOC a T < 700°C.",
    obiettivo_en: "Development of new materials and RF sputtering deposition techniques for rSOC cells at T < 700°C.",
    deliverables: [
      "D4.1 - M7: RF Sputtering Upgrade Report",
      "D4.3 - M9: rSOC 10 cm² Characterization",
      "D4.4 - M14: rSOC 100 cm² Characterization",
    ],
  },
  {
    id: "or5",
    num: "OR5",
    ente: "Università di Camerino",
    logo: "/loghi/camerino.svg",
    url: "https://www.unicam.it/",
    titolo_it: "Caratterizzazione avanzata e diagnostica per rPEMC e rSOC",
    titolo_en: "Advanced Characterization and Diagnostics for rPEMC and rSOC",
    obiettivo_it: "Sviluppo di metodologie avanzate di caratterizzazione e diagnostica per valutare lo stato di salute delle celle reversibili.",
    obiettivo_en: "Development of advanced characterization and diagnostic methodologies to evaluate the state-of-health of reversible cells.",
    deliverables: [
      "D5.1 - M9: Reference Materials Report",
      "D5.3 - M11: In-situ XAS Experimental Setup",
      "D5.9 - M15: Final Degradation Prediction Report",
    ],
  },
  {
    id: "or6",
    num: "OR6",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo_it: "Concept e Design dello Stack Reversibile, analisi energetica",
    titolo_en: "Reversible Stack Concept and Design, Energy Analysis",
    obiettivo_it: "Progettazione concettuale di sistemi stack reversibili integrati rPEMC/rSOC con analisi energetica.",
    obiettivo_en: "Conceptual design of integrated reversible rPEMC/rSOC stack systems with energy analysis.",
    deliverables: [
      "D6.1 - M7: rPEMC Energy System Concept Report",
      "D6.1 - M10: rPEMC Numerical Simulations Report",
      "D6.7 - M15: Numerical Model Validation Report",
    ],
  },
  {
    id: "or7",
    num: "OR7",
    ente: "Calabra Maceri e Servizi",
    logo: "/loghi/calabra-maceri.png",
    url: "https://www.calabramaceri.it/",
    titolo_it: "Analisi casi di studio applicativi",
    titolo_en: "Analysis of Application Case Studies",
    obiettivo_it: "Identificazione e analisi di casi di studio reali per l'impiego di sistemi di celle reversibili.",
    obiettivo_en: "Identification and analysis of real case studies for the use of reversible cell systems.",
    deliverables: [
      "D7.1 - M7: Preliminary P2H2P Investigation",
      "D7.4 - M14: rSOC P2X Investigation",
      "D7.7 - M15: Final TEA for rSOC systems",
    ],
  },
];

const ObiettiviList = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t("nav.objectives")} | CREA-SUD`;
  }, [t]);

  return (
  <Layout>
    <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#30A0D0]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="cs-container relative z-10">
        <p className="cs-eyebrow mb-6 cs-reveal">{t("objectives.eyebrow")}</p>
        <h1 className="cs-h1 mb-10 cs-reveal-delayed-1">{t("objectives.title")}</h1>
        <p className="cs-lead max-w-2xl cs-reveal-delayed-2">
          {t("objectives.lead")}
        </p>
      </div>
    </div>

    <section className="py-24">
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
             <div className="sticky top-24 space-y-6">
                <div className="bg-white border border-[#C9C5BF] p-8">
                  <h3 className="cs-eyebrow text-[10px] mb-6 text-[#908080]">{t("objectives.sidebar_title")}</h3>
                  <p className="text-[14px] text-[#4A4744] leading-relaxed">
                    {t("objectives.sidebar_text")}
                  </p>
                </div>
                <div className="cs-rule-accent" />
             </div>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-4">
              {orData.map((or) => (
                <Link
                  key={or.id}
                  to={`/obiettivi/${or.id}`}
                  className="block bg-white border border-[#C9C5BF] hover:border-[#002040] transition-all duration-300 group cs-hover-lift cs-reveal-delayed-2"
                >
                  <div className="flex items-stretch">
                    <div className="w-20 shrink-0 border-r border-[#E8E6E2] flex items-center justify-center bg-[#FAF9F6]/50">
                       <span className="font-serif italic text-2xl text-[#E08030]/40 group-hover:text-[#E08030] transition-colors">
                        {or.num}
                      </span>
                    </div>
                    <div className="p-8 flex-1">
                      <p className="cs-mono text-[9px] mb-1 text-[#908080] uppercase tracking-wider">{or.ente}</p>
                      <h2 className="font-sans font-bold text-[#0E1626] text-[18px] leading-snug group-hover:text-[#E08030] transition-colors mb-3">
                        {language === "it" ? or.titolo_it : or.titolo_en}
                      </h2>
                      <p className="text-[14px] text-[#4A4744] line-clamp-2 leading-relaxed">
                        {language === "it" ? or.obiettivo_it : or.obiettivo_en}
                      </p>
                    </div>
                    <div className="w-16 shrink-0 flex items-center justify-center">
                      <ArrowRight size={18} className="text-[#C9C5BF] group-hover:text-[#002040] transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

const ObiettivoDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const or = orData.find((o) => o.id === id);

  if (!or) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <p className="cs-lead mx-auto">{t("objectives.not_found")}</p>
          <Link to="/obiettivi" className="cs-link mt-4 inline-block">
            {t("objectives.back_link")}
          </Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = orData.findIndex((o) => o.id === id);
  const prev = currentIndex > 0 ? orData[currentIndex - 1] : null;
  const next = currentIndex < orData.length - 1 ? orData[currentIndex + 1] : null;

  useEffect(() => {
    if (or) {
      const title = language === "it" ? or.titolo_it : or.titolo_en;
      document.title = `${or.num} · ${title} | CREA-SUD`;
    }
  }, [or, language]);

  return (
    <Layout>
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <Link to="/obiettivi" className="cs-mono text-[10px] text-[#908080] hover:text-[#0E1626] uppercase flex items-center gap-2 mb-8 transition-colors">
            <ArrowLeft size={12} /> {t("objectives.back_to_list")}
          </Link>
          <div className="grid md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-2">
                <span className="cs-h1 text-[#E08030] font-serif italic">{or.num}</span>
             </div>
             <div className="md:col-span-10">
                <p className="cs-eyebrow mb-4">{or.ente}</p>
                <h1 className="cs-h2 mb-4">
                  {language === "it" ? or.titolo_it : or.titolo_en}
                </h1>
             </div>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-12">
              <div>
                <h2 className="cs-eyebrow mb-6 text-[#908080]">{t("objectives.desc_title")}</h2>
                <p className="text-[18px] text-[#0E1626] leading-relaxed font-medium">
                  {language === "it" ? or.obiettivo_it : or.obiettivo_en}
                </p>
              </div>

              <div>
                <h2 className="cs-eyebrow mb-6 text-[#908080]">{t("objectives.deliv_title")}</h2>
                <div className="grid gap-4">
                  {or.deliverables.map((d, i) => (
                    <div key={i} className="bg-[#FAF9F6] border border-[#E8E6E2] p-6 flex items-start gap-4">
                      <span className="cs-mono text-[#E08030] font-bold shrink-0">{d.split(':')[0]}</span>
                      <p className="text-[14px] text-[#4A4744] leading-relaxed">{d.split(':').slice(1).join(':').trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-white border border-[#C9C5BF] p-8">
                <h3 className="cs-eyebrow text-[10px] mb-8 text-[#908080]">{t("objectives.info_title")}</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">{t("objectives.code_label")}</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#0E1626]">{or.num}</dd>
                  </div>
                  <div className="border-t border-[#F5F4F2] pt-4">
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">{t("objectives.lead_entity")}</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#0E1626] mb-4">{or.ente}</dd>
                    <a 
                      href={or.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#FAF9F6] p-4 border border-[#E8E6E2] inline-block hover:border-[#E08030] transition-colors group"
                    >
                      <img src={or.logo} alt={or.ente} className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                    </a>
                  </div>
                  <div className="border-t border-[#F5F4F2] pt-4">
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">{t("objectives.status_label")}</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#E08030]">{t("objectives.status_value")}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-24 pt-12 border-t border-[#E8E6E2] grid grid-cols-2 gap-8">
            {prev ? (
              <Link
                to={`/obiettivi/${prev.id}`}
                className="group text-left"
              >
                <span className="cs-mono text-[10px] text-[#908080] uppercase block mb-2 group-hover:text-[#E08030] transition-colors">← {t("objectives.prev")}</span>
                <span className="font-bold text-[14px] text-[#0E1626] block leading-snug">
                  {prev.num}: {language === "it" ? prev.titolo_it : prev.titolo_en}
                </span>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                to={`/obiettivi/${next.id}`}
                className="group text-right"
              >
                <span className="cs-mono text-[10px] text-[#908080] uppercase block mb-2 group-hover:text-[#E08030] transition-colors">{t("objectives.next")} →</span>
                <span className="font-bold text-[14px] text-[#0E1626] block leading-snug">
                  {next.num}: {language === "it" ? next.titolo_it : next.titolo_en}
                </span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Obiettivi = () => {
  const { id } = useParams();
  return id ? <ObiettivoDetail /> : <ObiettiviList />;
};

export default Obiettivi;
