import { useLanguage } from "@/contexts/LanguageContext";
import { User } from "lucide-react";

interface StaffMember {
  nameEn: string;
  nameUr: string;
  roleEn: string;
  roleUr: string;
  credentialEn: string;
  credentialUr: string;
}

const staffMembers: StaffMember[] = [
  {
    nameEn: "Ustada Saleha Rizwan Mominati",
    nameUr: "محترمہ صالحہ رضوان مومناتی",
    roleEn: "Principal",
    roleUr: "پرنسپل",
    credentialEn: "Jamia Tul Mominat Al Islamia",
    credentialUr: "جامعة الموْمنات الاسلامیہ",
  },
  {
    nameEn: "Mohtarma Marya Nadir Mominati",
    nameUr: " محترمہ ماریہ نادر مومناتی",
    roleEn: " ",
    roleUr: "",
    credentialEn: "Jamia Tul Mominat Al Islamia",
    credentialUr: "جامعة الموْمنات الاسلامیہ",
  },
  {
    nameEn: "Mohtarma Shazia Abdul Rehman",
    nameUr: " محترمہ شازیہ عبدالرحمٰن",
    roleEn: "",
    roleUr: "",
    credentialEn: "",
    credentialUr: "",
  },
  {
    nameEn: "Dr. Roohi Haider",
    nameUr: " ڈاکٹر روحی حیدر ",
    roleEn: "Head of IT Department",
    roleUr: "شعبہ کمپیوٹر سائنس  ",
    credentialEn: "",
    credentialUr: "",
  },
];

const Staff = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">{t("staff.title")}</h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">{t("staff.subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((member, i) => (
            <div
              key={member.nameEn}
              className="group rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent/40 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-1 font-heading text-lg font-semibold text-card-foreground">
                {language === "ur" ? member.nameUr : member.nameEn}
              </h3>
              <p className="mb-2 text-sm font-medium text-accent">
                {language === "ur" ? member.roleUr : member.roleEn}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === "ur" ? member.credentialUr : member.credentialEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
