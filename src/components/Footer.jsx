import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <footer className="w-full mt-10 py-6 bg-gray-900 text-white text-center flex flex-col sm:flex-row justify-between items-center px-4">
      <div className="flex space-x-4">
        <button
          onClick={() => switchLanguage("en")}
          className={`px-4 py-2 rounded ${
            language === "en"
              ? "bg-green-500 text-black"
              : "bg-gray-700 hover:bg-gray-600"
          } transition`}
        >
          English
        </button>
        <button
          onClick={() => switchLanguage("de")}
          className={`px-4 py-2 rounded ${
            language === "de"
              ? "bg-green-500 text-black"
              : "bg-gray-700 hover:bg-gray-600"
          } transition`}
        >
          Deutsch
        </button>
      </div>
    </footer>
  );
};

export default Footer;
