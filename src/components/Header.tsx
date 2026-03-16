import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/subjects", label: t("nav.subjects") },
    { path: "/staff", label: t("nav.staff") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoImg} alt="Al-Noor Academy" className="h-10 w-10" />
          <span className="font-heading text-lg sm:text-xl font-bold text-primary">
            {language === "ur" ? "النور اکیڈمی" : "Al-Noor Academy"}
          </span>
        </Link>

        {/* Nav — always visible, scrollable on small screens */}
        <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide mx-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`whitespace-nowrap rounded-md px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent ${
                isActive(link.path) ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "ur" : "en")}
            className="font-semibold text-sm min-w-[3.5rem]"
          >
            {language === "en" ? "اُردُو" : "EN"}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;