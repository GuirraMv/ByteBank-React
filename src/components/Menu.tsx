import React, { useState } from "react";
import "../css/Styles.css";

const Menu: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link === selectedLink ? null : link);
  };

  return (
    <div className="bg-column ml-3 mt-7 mb-3 h-5/6 p-10 flex flex-col items-center rounded-lg">
      <a
        href="#"
        onClick={() => handleLinkClick("inicio")}
        className={`text-base mb-5 ${
          selectedLink === "inicio" ? "text-active" : "text-black"
        }`}
      >
        Início
      </a>

      <a
        href="#"
        onClick={() => handleLinkClick("transferencias")}
        className={`text-base mb-5 ${
          selectedLink === "transferencias" ? "text-active" : "text-black"
        }`}
      >
        Transferências
      </a>

      <a
        href="#"
        onClick={() => handleLinkClick("investimentos")}
        className={`text-base mb-5 ${
          selectedLink === "investimentos" ? "text-active" : "text-black"
        }`}
      >
        Investimentos
      </a>

      <a
        href="#"
        onClick={() => handleLinkClick("outros")}
        className={`text-base mb-5 p-0 m-0 ${
          selectedLink === "outros" ? "text-active" : "text-black"
        }`}
      >
        Outros serviços
      </a>
    </div>
  );
};

export default Menu;
