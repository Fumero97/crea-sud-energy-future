import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-[#FAF9F6] border border-[#E8E6E2] p-1 rounded-sm">
      <button
        onClick={() => setLanguage("it")}
        className={`px-3 py-1 text-[10px] font-mono uppercase tracking-tighter transition-all ${
          language === "it"
            ? "bg-[#0E1626] text-white shadow-sm"
            : "text-[#908080] hover:text-[#0E1626]"
        }`}
      >
        IT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-[10px] font-mono uppercase tracking-tighter transition-all ${
          language === "en"
            ? "bg-[#0E1626] text-white shadow-sm"
            : "text-[#908080] hover:text-[#0E1626]"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
