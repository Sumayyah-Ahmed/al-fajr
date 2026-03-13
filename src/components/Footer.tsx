import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
        <p className="mt-2 text-xs text-muted-foreground">{t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
