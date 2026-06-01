import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  lang?: "it" | "en";
}

const SITE_URL = "https://www.crea-sud.it";
const OG_IMAGE = `${SITE_URL}/logo.png`;

const SEO = ({ title, description, canonical, lang = "it" }: SEOProps) => {
  const fullTitle = `${title} | CREA-SUD`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === "it" ? "it_IT" : "en_GB"} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
