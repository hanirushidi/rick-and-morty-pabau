import React, { createContext, useContext, useState } from "react";

const translations = {
  en: {
    name: "Name",
    status: "Status",
    species: "Species",
    gender: "Gender",
    origin: "Origin",
    characters: "Characters",
  },
  de: {
    name: "Name",
    status: "Status",
    species: "Spezies",
    gender: "Geschlecht",
    origin: "Herkunft",
    characters: "Charaktere",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
