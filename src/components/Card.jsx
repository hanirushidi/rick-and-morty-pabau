import React from "react";
import { useLanguage } from "../context/LanguageContext"; // import the translation hook

const Card = ({ name, status, species, gender, origin }) => {
  const { t } = useLanguage(); // use translations

  const statusColor =
    {
      Alive: "text-green-400",
      Dead: "text-red-400",
      unknown: "text-gray-400",
    }[status] || "text-white";

  return (
    <div className="flex-col bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">{name}</h2>

      <div className="space-y-2 text-base">
        <p>
          <span className="font-semibold">{t.status}:</span>{" "}
          <span className={statusColor}>{status}</span>
        </p>
        <p>
          <span className="font-semibold">{t.species}:</span> {species}
        </p>
        <p>
          <span className="font-semibold">{t.gender}:</span> {gender}
        </p>
        <p>
          <span className="font-semibold">{t.origin}:</span>{" "}
          {origin || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default Card;
