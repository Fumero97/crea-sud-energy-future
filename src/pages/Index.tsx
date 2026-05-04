import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const partners = [
  { src: "/loghi/unical.png", alt: "Unical", url: "https://www.unical.it/" },
  { src: "/loghi/sapienza.png", alt: "Sapienza", url: "https://www.uniroma1.it/" },
  { src: "/loghi/salerno.jpg", alt: "Salerno", url: "https://www.unisa.it/" },
  { src: "/loghi/camerino.svg", alt: "Camerino", url: "https://www.unicam.it/" },
  { src: "/loghi/calabra-maceri.png", alt: "Calabra Maceri", url: "https://www.calabramaceri.it/" },
];

const Index = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = "CREA-SUD · Homepage | Advanced Reversible Fuel Cells";
  }, []);

  const orList = [
    { id: "OR1", ente: "Unical", titolo: language === 'it' ? "Project Management" : "Project Management" },
    { id: "OR2", ente: "Unical", titolo: language === 'it' ? "Sintesi ionomeri e membrane" : "Synthesis of ionomers and membranes" },
    { id: "OR3", ente: "Sapienza", titolo: language === 'it' ? "Catalizzatori low-Pt e Pt-free" : "Low-Pt and Pt-free catalysts" },
    { id: "OR4", ente: "Salerno", titolo: language === 'it' ? "RF sputtering per rSOC" : "RF sputtering for rSOC" },
    { id: "OR5", ente: "Camerino", titolo: language === 'it' ? "Diagnostica avanzata" : "Advanced diagnostics" },
    { id: "OR6", ente: "Unical", titolo: language === 'it' ? "Design stack e modellazione" : "Stack design and modeling" },
    { id: "OR7", ente: "Calabra Maceri", titolo: language === 'it' ? "Casi studio applicativi" : "Application case studies" },
  ];

  const milestones = [
    { id: "M7", titolo: language === 'it' ? "Materiali" : "Materials", sub: "Setup" },
    { id: "M10", titolo: language === 'it' ? "Simulazioni" : "Simulations", sub: "CFD" },
    { id: "M15", titolo: language === 'it' ? "Validazione" : "Validation", sub: "Closure" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#FAF9F6] border-b border-[#E8E6E2] overflow-hidden pt-20 pb-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E08030]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="cs-container relative z-10">
          <div className="max-w-4xl">
            <p className="cs-eyebrow mb-6 cs-reveal opacity-0" style={{ animationFillMode: 'forwards' }}>
              {t("hero.eyebrow")}
            </p>
            <h1 className="cs-h1 mb-8 cs-reveal-delayed-1 opacity-0" style={{ animationFillMode: 'forwards' }}>
              {t("hero.title")}
            </h1>
            <p className="cs-lead mb-10 cs-reveal-delayed-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
              {t("hero.lead")}
            </p>
            <div className="flex flex-wrap gap-4 cs-reveal-delayed-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
              <Link to="/progetto" className="cs-btn cs-btn--primary">
                {t("hero.cta_project")}
              </Link>
              <Link to="/obiettivi" className="cs-btn cs-btn--secondary">
                {t("hero.cta_objectives")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-12 bg-white border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: "4 + 1", label: t("kpi.partners_label"), sub: t("kpi.partners_sub") },
              { value: "7 OR", label: t("kpi.objectives_label"), sub: t("kpi.objectives_sub") },
              { value: "M15", label: t("kpi.timeline_label"), sub: t("kpi.timeline_sub") },
            ].map((kpi) => (
              <div key={kpi.label} className="group relative">
                <div className="w-8 h-1 bg-[#E08030] mb-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-baseline gap-4">
                  <p className="cs-h1 text-[#E08030] leading-none shrink-0">{kpi.value}</p>
                  <div className="flex-1">
                    <p className="font-bold text-[14px] text-[#0E1626] uppercase tracking-tight">{kpi.label}</p>
                    <p className="cs-mono text-[10px] text-[#908080] uppercase">{kpi.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologie */}
      <section className="py-24 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="mb-20">
            <h4 className="cs-eyebrow mb-6">{t("home.tech_eyebrow")}</h4>
            <h2 className="cs-h2 mb-8">{t("home.tech_title")}</h2>
            <p className="cs-lead max-w-2xl">{t("home.tech_lead")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#C9C5BF] p-8 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E08030]" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="cs-mono text-[11px] font-bold text-[#E08030] bg-[#E08030]/10 px-2 py-1 uppercase tracking-wider">rPEMC</span>
                  <span className="block mt-2 cs-mono text-[10px] text-[#908080] uppercase">{t("project.rpemc_sub")}</span>
                </div>
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

            <div className="border border-[#C9C5BF] p-8 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#30A0D0]" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="cs-mono text-[11px] font-bold text-[#30A0D0] bg-[#30A0D0]/10 px-2 py-1 uppercase tracking-wider">rSOC</span>
                  <span className="block mt-2 cs-mono text-[10px] text-[#908080] uppercase">{t("project.rsoc_sub")}</span>
                </div>
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
      </section>

      {/* Consortium */}
      <section className="py-24 bg-[#FAF9F6] border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h4 className="cs-eyebrow mb-6">{t("home.consortium_eyebrow")}</h4>
              <h2 className="cs-h2 mb-8">{t("home.consortium_title")}</h2>
              <p className="text-[#4A4744] text-[15px] leading-relaxed mb-10">{t("home.consortium_lead")}</p>
              <Link to="/obiettivi" className="cs-link text-[14px] font-medium">{t("home.consortium_cta")}</Link>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {partners.map((p) => (
                  <a key={p.alt} href={p.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-[#C9C5BF] p-3 flex items-center justify-center h-16 hover:border-[#E08030] transition-all">
                    <img src={p.src} alt={p.alt} className="max-h-10 max-w-full object-contain" />
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="bg-white border border-[#C9C5BF]">
                {orList.map((or) => (
                  <div key={or.id} className="flex border-b border-[#E8E6E2] last:border-0 group hover:bg-[#FAF9F6] transition-all p-4">
                    <div className="w-16 shrink-0 flex items-center justify-center font-serif italic text-xl text-[#E08030]/40 group-hover:text-[#E08030]">{or.id}</div>
                    <div className="flex-1 px-4">
                      <p className="cs-mono text-[9px] text-[#908080] uppercase">{or.ente}</p>
                      <h4 className="font-bold text-[14px] text-[#0E1626]">{or.titolo}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan */}
      <section className="py-24 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="cs-eyebrow mb-6">{t("home.plan_eyebrow")}</h4>
            <h2 className="cs-h2 mb-8">{t("home.plan_title")}</h2>
            <p className="cs-lead">{t("home.plan_lead")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((m) => (
              <div key={m.id} className="border border-[#C9C5BF] p-8 bg-white hover:border-[#E08030] transition-all">
                <span className="cs-h3 text-[#E08030] font-serif italic mb-2 block">{m.id}</span>
                <p className="font-bold text-[15px] uppercase tracking-tight text-[#0E1626] mb-1">{m.titolo}</p>
                <p className="cs-mono text-[10px] text-[#908080] uppercase">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0E1626] text-white relative overflow-hidden">
        <div className="cs-container relative z-10">
          <div className="max-w-3xl">
            <h4 className="cs-eyebrow text-white/50 mb-6">{t("home.cta_eyebrow")}</h4>
            <h2 className="cs-h2 text-white mb-8">{t("home.cta_title")}</h2>
            <p className="cs-lead text-white/80 mb-10">{t("home.cta_lead")}</p>
            <Link to="/contatti" className="cs-btn cs-btn--primary bg-white text-[#0E1626] hover:bg-[#E08030] hover:text-white">
              {t("home.cta_btn")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
