import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const fundingRows = [
  {
    label: "Programma",
    value: "PNRR — Piano Nazionale di Ripresa e Resilienza",
  },
  {
    label: "Missione",
    value: "M2 — Rivoluzione verde e transizione ecologica",
  },
  {
    label: "Componente",
    value: "C2 — Energia rinnovabile, idrogeno, rete e mobilità sostenibile",
  },
  { label: "Investimento", value: "3.5 — Ricerca e sviluppo sull'idrogeno" },
  { label: "Tipo avviso", value: "R&S H2 Tipo A" },
  { label: "Decreto", value: "DD (MITE) 23.03.022" },
  { label: "CUP", value: "F57G25000280006" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0E1626] text-white">
      <div className="cs-rule-accent" />
      <div className="cs-container py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Progetto */}
          <div>
            <h4 className="cs-eyebrow mb-6 text-white/70">{t("footer.project_title")}</h4>
            <p className="cs-small text-white leading-relaxed">
              Celle REversibili Avanzate e sostenibili di bassa ed alta temperatura: ricerca e Sviluppo Unificato di concept, materiali, e Design innovativi
            </p>
          </div>

          {/* Partner */}
          <div>
            <h4 className="cs-eyebrow mb-6 text-white/70">{t("footer.partner_title")}</h4>
            <div className="cs-small text-white space-y-1">
              <p>Ente capofila: Università della Calabria (FCH2 Team)</p>
              <p>Università Sapienza di Roma</p>
              <p>Università di Salerno</p>
              <p>Università di Camerino</p>
              <p>Calabra Maceri e Servizi</p>
            </div>
          </div>

          {/* Finanziamento */}
          <div>
            <h4 className="cs-eyebrow mb-6 text-white/70">{t("footer.funding_title")}</h4>
            <div className="bg-white p-6 space-y-6">
              <div className="inline-block">
                 <img src="/badge-eu-mase.png" alt="Finanziato dall'Unione europea - MASE" className="h-10 w-auto" />
              </div>
              <p className="cs-small text-[#0E1626] leading-relaxed">
                Avviso R&S H2 Tipo A — DD (MITE) 23.03.022<br />
                PNRR M2-C2 / Investimento 3.5<br />
                CUP: F57G25000280006
              </p>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">
          <p className="cs-small text-white/50">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-8">
            <Link to="/legal" className="cs-small text-white/50 hover:text-white transition-colors">
              {t("footer.legal")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
