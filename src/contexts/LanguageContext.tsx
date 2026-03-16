import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ur";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.home": { en: "Home", ur: "ہوم" },
  "nav.subjects": { en: "Subjects", ur: "مضامین" },
  "nav.staff": { en: "Staff", ur: "عملہ" },
  "nav.contact": { en: "Contact", ur: "رابطہ" },

  // Hero
  "hero.title": { en: "Al-Fajr Quran Academy", ur: " الفجر قرآن اکیڈمی " },
  "hero.subtitle": {
    en: "Nurturing Minds, Building Character, Inspiring Excellence",
    ur: "ذہنوں کی پرورش، کردار سازی، فضیلت کی ترغیب",
  },
  "hero.cta": { en: "Explore Our Programs", ur: "ہمارے پروگرامز دیکھیں" },
  "hero.cta2": { en: "Contact Us", ur: "ہم سے رابطہ کریں" },

  // Home sections
  "home.welcome.title": { en: "Welcome to Al-Fajr Quran Academy", ur: " الفجر قرآن اکیڈمی میں خوش آمدید" },
  "home.welcome.text": {
    en: "Al-Fajr Quran Academy is a premier Islamic educational institution dedicated to providing a comprehensive curriculum that blends modern academic excellence with traditional Islamic values. Our mission is to develop well-rounded individuals who excel in both worldly knowledge and spiritual growth.",
    ur: "الفجر قرآن اکیڈمی ایک اعلیٰ اسلامی تعلیمی ادارہ ہے جو جدید تعلیمی فضیلت اور روایتی اسلامی اقدار کو ملا کر ایک جامع نصاب فراہم کرنے کے لیے وقف ہے۔ ہمارا مشن ایسے ہمہ جہت افراد تیار کرنا ہے جو دنیاوی علم اور روحانی ترقی دونوں میں سبقت لے جائیں۔",
  },
  "home.stats.students": { en: "500+ Students", ur: "۵۰۰+ طلباء" },
  "home.stats.teachers": { en: "4+ Teachers", ur: "۴+ اساتذہ" },
  "home.stats.years": { en: "15+ Years", ur: "۱۵+ سال" },
  "home.stats.programs": { en: "20+ Programs", ur: "۲۰+ پروگرامز" },

  // Subjects
  "subjects.title": { en: "Our Subjects", ur: "ہمارے مضامین" },
  "subjects.subtitle": {
    en: "A balanced curriculum combining Islamic and modern education",
    ur: "اسلامی اور جدید تعلیم کا متوازن نصاب",
  },
  "subject.islamic": { en: "Islamic Studies", ur: "اسلامی علوم" },
  "subject.islamic.desc": {
    en: "Comprehensive study of Quran, Hadith, Fiqh, and Islamic history",
    ur: "قرآن، حدیث، فقہ اور اسلامی تاریخ کا جامع مطالعہ",
  },
  "subject.arabic": { en: "Arabic Language", ur: "عربی زبان" },
  "subject.arabic.desc": {
    en: "Classical and modern Arabic language and literature",
    ur: "کلاسیکی اور جدید عربی زبان و ادب",
  },
  "subject.quran": { en: "Quran & Tajweed", ur: "قرآن و تجوید" },
  "subject.quran.desc": {
    en: "Memorization and proper recitation of the Holy Quran",
    ur: "قرآن پاک کی حفظ اور صحیح تلاوت",
  },
  "subject.math": { en: "Mathematics", ur: "ریاضی" },
  "subject.math.desc": {
    en: "From fundamental concepts to advanced mathematical reasoning",
    ur: "بنیادی تصورات سے لے کر اعلیٰ ریاضیاتی استدلال تک",
  },
  "subject.science": { en: "Sciences", ur: "سائنس" },
  "subject.science.desc": {
    en: "Physics, Chemistry, and Biology with hands-on experiments",
    ur: "فزکس، کیمسٹری اور بیالوجی عملی تجربات کے ساتھ",
  },
  "subject.english": { en: "English Language", ur: "انگریزی زبان" },
  "subject.english.desc": {
    en: "Reading, writing, and communication skills development",
    ur: "پڑھنے، لکھنے اور مواصلاتی مہارتوں کی ترقی",
  },
  "subject.urdu": { en: "Urdu Language", ur: "اردو زبان" },
  "subject.urdu.desc": {
    en: "Urdu language, literature, and cultural heritage",
    ur: "اردو زبان، ادب اور ثقافتی ورثہ",
  },
  "subject.cs": { en: "Computer Science", ur: "کمپیوٹر سائنس" },
  "subject.cs.desc": {
    en: "Programming, digital literacy, and modern technology skills",
    ur: "پروگرامنگ، ڈیجیٹل خواندگی اور جدید ٹیکنالوجی",
  },

  // Staff
  "staff.title": { en: "Our Staff", ur: "ہمارا عملہ" },
  "staff.subtitle": {
    en: "Dedicated educators committed to nurturing the next generation",
    ur: "اگلی نسل کی پرورش کے لیے وقف اساتذہ",
  },

  // Contact
  "contact.title": { en: "Contact Us", ur: "ہم سے رابطہ کریں" },
  "contact.subtitle": {
    en: "We'd love to hear from you. Get in touch with us today.",
    ur: "ہمیں آپ سے سننا اچھا لگے گا۔ آج ہی ہم سے رابطہ کریں۔",
  },
  "contact.name": { en: "Full Name", ur: "پورا نام" },
  "contact.email": { en: "Email Address", ur: "ای میل ایڈریس" },
  "contact.message": { en: "Message", ur: "پیغام" },
  "contact.send": { en: "Send Message", ur: "پیغام بھیجیں" },
  "contact.address.title": { en: "Our Address", ur: "ہمارا پتہ" },
  "contact.address": {
    en: "123 Knowledge Lane, Education District, Bhopal",
    ur: "۱۲۳ نالج لین، ایجوکیشن ڈسٹرکٹ، بھوپال ",
  },
  "contact.phone.title": { en: "Phone", ur: "فون" },
  "contact.phone": { en: "+92 42 1234 5678", ur: "+۹۲ ۴۲ ۱۲۳۴ ۵۶۷۸" },
  "contact.hours.title": { en: "Office Hours", ur: "دفتری اوقات" },
  "contact.hours": {
    en: "Mon - Fri: 8:00 AM - 4:00 PM\nSat: 9:00 AM - 1:00 PM",
    ur: "پیر - جمعہ: صبح ۸:۰۰ - شام ۴:۰۰\nہفتہ: صبح ۹:۰۰ - دوپہر ۱:۰۰",
  },

  // Footer
  "footer.rights": {
    en: "© 2026 Al-Fajr Quran Academy. All rights reserved.",
    ur: "© ۲۰۲۶ الفجر قرآن اکیڈمی ۔ جملہ حقوق محفوظ ہیں۔",
  },

  // Theme
  "theme.light": { en: "Light", ur: "روشن" },
  "theme.dark": { en: "Dark", ur: "تاریک" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const dir = language === "ur" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language);
  }, [language, dir]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
