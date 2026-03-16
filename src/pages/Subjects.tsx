import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Languages, BookMarked, Calculator, FlaskConical, PenTool, Monitor, Scroll } from "lucide-react";

const subjects = [
  { key: "islamic", icon: BookMarked },
  { key: "arabic", icon: Languages },
  { key: "quran", icon: Scroll },
  { key: "english", icon: PenTool },
  { key: "urdu", icon: BookOpen },
  { key: "cs", icon: Monitor },
];

const Subjects = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">{t("subjects.title")}</h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">{t("subjects.subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((s, i) => (
            <div
              key={s.key}
              className="group rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent/40 animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">
                {t(`subject.${s.key}`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`subject.${s.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
