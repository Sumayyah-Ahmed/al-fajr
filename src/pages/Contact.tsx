import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.send") + " ✓");
    setForm({ name: "", email: "", message: "" });
  };

  const infoItems = [
    { icon: MapPin, title: t("contact.address.title"), content: t("contact.address") },
    { icon: Phone, title: t("contact.phone.title"), content: t("contact.phone") },
    { icon: Clock, title: t("contact.hours.title"), content: t("contact.hours") },
  ];

  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">{t("contact.title")}</h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.name")}</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.email")}</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.message")}</label>
              <Textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              {t("contact.send")}
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {infoItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="whitespace-pre-line text-sm text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
