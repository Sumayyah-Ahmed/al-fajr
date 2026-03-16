import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, CalendarDays, BookOpen } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: GraduationCap, label: t("home.stats.students") },
    { icon: Users, label: t("home.stats.teachers") },
    { icon: CalendarDays, label: t("home.stats.years") },
    { icon: BookOpen, label: t("home.stats.programs") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Al-Noor Academy Campus"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 container px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold tracking-tight text-background md:text-7xl animate-fade-in">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-background/90 md:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8">
              <Link to="/subjects">{t("hero.cta")}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold text-base px-8">
              <Link to="/contact">{t("hero.cta2")}</Link>
            </Button>
            
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20">
        <div className="container max-w-3xl px-4 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
            {t("home.welcome.title")}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("home.welcome.text")}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="container grid grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
              <stat.icon className="h-10 w-10 text-accent" />
              <span className="font-heading text-xl font-bold text-primary-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
