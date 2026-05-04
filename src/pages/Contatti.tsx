import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contatti = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t("nav.contacts")} | CREA-SUD`;
  }, [t]);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgzjgnq";

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
        alert(t("it") === "it" ? "Si è verificato un errore." : "An error occurred.");
      }
    } catch (error) {
      alert("Connection error.");
    }
  };

  return (
    <Layout>
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E08030]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="cs-container relative z-10">
          <p className="cs-eyebrow mb-6 cs-reveal">{t("contacts.eyebrow")}</p>
          <h1 className="cs-h1 mb-8 cs-reveal-delayed-1">{t("contacts.title")}</h1>
          <p className="cs-lead max-w-2xl cs-reveal-delayed-2">
            {t("contacts.lead")}
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
                <h3 className="cs-h4 mb-2">{t("contacts.email_label")}</h3>
                <p className="text-[14px] text-[#4A4744] mb-4">{t("contacts.email_sub")}</p>
                <a href="mailto:info@crea-sud.it" className="cs-link font-medium">info@crea-sud.it</a>
              </div>

              <div className="bg-white border border-[#C9C5BF] p-8 cs-reveal-delayed-1 cs-hover-lift">
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E8E6E2] flex items-center justify-center mb-6">
                  <MapPin className="text-[#E08030]" size={20} />
                </div>
                <h3 className="cs-h4 mb-2">{t("contacts.location_label")}</h3>
                <p className="text-[14px] text-[#4A4744] mb-4">{t("contacts.location_sub")}</p>
                <p className="text-[15px] font-medium text-[#0E1626]">
                  Via Pietro Bucci, Cubo 44C<br />
                  87036 Rende (CS), Italia
                </p>
              </div>

              <div className="p-8 border-l-4 border-[#E08030] bg-[#FAF9F6]">
                <p className="text-[14px] text-[#4A4744] italic leading-relaxed">
                  "{t("contacts.quote")}"
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
                      <h3 className="cs-h3 mb-2">{t("contacts.success_title")}</h3>
                      <p className="text-[#4A4744] text-[15px]">
                        {t("contacts.success_lead")}
                      </p>
                    </div>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="cs-link text-[14px] font-bold uppercase tracking-wider"
                    >
                      {t("contacts.send_another")}
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="cs-h3 mb-8">{t("contacts.form_title")}</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">{t("contacts.name_label")}</label>
                          <input
                            required
                            name="name"
                            type="text"
                            placeholder={t("contacts.name_placeholder")}
                            className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">Email</label>
                          <input
                            required
                            name="email"
                            type="email"
                            placeholder={t("contacts.email_placeholder")}
                            className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">{t("contacts.subject_label")}</label>
                        <input
                          required
                          name="subject"
                          type="text"
                          placeholder={t("contacts.subject_placeholder")}
                          className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="cs-mono text-[10px] uppercase text-[#908080] block mb-2">{t("contacts.message_label")}</label>
                        <textarea
                          required
                          name="message"
                          rows={6}
                          placeholder={t("contacts.message_placeholder")}
                          className="w-full px-4 py-3 border border-[#E8E6E2] focus:border-[#002040] bg-white text-[14px] focus:outline-none transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="cs-btn cs-btn--primary w-full justify-center py-4"
                      >
                        {t("contacts.send_btn")} <Send size={16} />
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
