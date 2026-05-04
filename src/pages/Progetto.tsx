import { useEffect } from "react";
import Layout from "@/components/Layout";
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
    id: "M7",
    titolo_it: "Prima scadenza",
    titolo_en: "First Deadline",
    sub_it: "materiali, membrane, setup",
    sub_en: "materials, membranes, setup",
    deliverable: [
      "D1.1 Management Report",
      "D1.2 Website & Communication",
      "D2.1 PEM nanocomposite",
      "D4.1 RF sputtering upgrade",
      "D6.1 Preliminary energy analysis",
    ],
  },
  {
    id: "M10",
    titolo_it: "Simulazioni CFD e testing",
    titolo_en: "CFD Simulations and Testing",
    sub_it: "stazionario",
    sub_en: "steady state",
    deliverable: [
      "D6.1 rPEMC numerical simulations",
      "D6.2 rSOC numerical simulations",
      "D6.3 Steady-state testing data",
    ],
  },
  {
    id: "M15",
    titolo_it: "Chiusura",
    titolo_en: "Closure",
    sub_it: "report finali, validazione",
    sub_en: "final reports, validation",
    deliverable: [
      "D3.4 Reversible PEMFC stack",
      "D6.4 Dynamic testing",
      "D7.5 TEA final P2H2P and P2X",
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
                  <span className="cs-mono text-[10px] text-[#908080] uppercase">
                    {language === "it" ? m.sub_it : m.sub_en}
                  </span>
                </div>
                <div className="md:col-span-10 border-l border-[#C9C5BF] pl-8 pb-4">
                  <h4 className="font-bold text-[16px] text-[#0E1626] mb-6 tracking-tight uppercase">
                    {language === "it" ? m.titolo_it : m.titolo_en}
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                    {m.deliverable.map((d) => (
                      <div key={d} className="cs-mono text-[10px] text-[#4A4744] flex gap-2 leading-tight">
                        <span className="text-[#E08030]">•</span>
                        <span>{d}</span>
                      </div>
                    ))}
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
