const translations = {
  en: {
    hero_title: "Mobile Mechanic in Manchester",
    hero_text:
      "10+ years experience. Diagnostics, brakes & servicing at your location.",
    about_title: "About",
    about_text:
      "Professional mobile mechanic based in Manchester with over 10 years of experience.",
    services_title: "Services",
    contact_title: "Contact",
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_work: "Work",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
  },

  ua: {
    hero_title: "Виїзний механік у Манчестері",
    hero_text: "Понад 10 років досвіду. Діагностика та ремонт авто на місці.",
    about_title: "Про мене",
    about_text:
      "Професійний виїзний механік у Манчестері з 10+ роками досвіду.",
    services_title: "Послуги",
    contact_title: "Контакти",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_about: "Про мене",
    nav_work: "Роботи",
    nav_reviews: "Відгуки",
    nav_contact: "Контакти",
  },
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

// авто-запуск сохранённого языка
setLang(localStorage.getItem("lang") || "en");
