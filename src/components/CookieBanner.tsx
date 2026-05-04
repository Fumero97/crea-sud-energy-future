import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 animate-in slide-in-from-bottom-8 duration-700 ease-out">
      <div className="bg-white border border-[#C9C5BF] shadow-2xl p-6 relative overflow-hidden">
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E08030] to-[#30A0D0]" />
        
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-[#FAF9F6] border border-[#E8E6E2] flex items-center justify-center rounded-sm">
            <Cookie className="text-[#E08030]" size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#0E1626] text-[15px] mb-2 uppercase tracking-tight">{t("cookies.title")}</h4>
            <p className="text-[13px] text-[#4A4744] leading-relaxed mb-6">
              {t("cookies.lead")}{" "}
              <Link to="/legal" className="cs-link decoration-[#E08030]">{t("cookies.link")}</Link>.
            </p>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={acceptCookies}
                className="cs-btn cs-btn--primary py-2 text-[12px] flex-1 justify-center"
              >
                {t("cookies.accept")}
              </button>
              <button 
                onClick={declineCookies}
                className="cs-btn cs-btn--ghost py-2 text-[12px] flex-1 justify-center"
              >
                {t("cookies.decline")}
              </button>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-[#908080] hover:text-[#0E1626] transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
