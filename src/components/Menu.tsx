import React, { useState } from "react";
import "../css/Styles.css";

const Menu: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link === selectedLink ? null : link);
  };

  return (
    <div className="bg-column ml-3 mt-7 mb-3 p-10 flex flex-col items-center rounded-lg ">
      <a
        href="#"
        onClick={() => handleLinkClick("inicio")}
        className={`text-base text-center mb-5 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  ${
          selectedLink === "inicio" ? "text-active" : "link-menu "
        }`}
      >
        Início
      </a>

      <a
        href="#"
        onClick={() => handleLinkClick("transferencias")}
        className={`text-base text-center mb-5 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  ${
          selectedLink === "transferencias" ? "text-active" : "link-menu "
        }`}
      >
        Transferências
      </a>

      <a
        href="#"
        onClick={() => handleLinkClick("investimentos")}
        className={`text-base text-center mb-5 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ${
          selectedLink === "investimentos" ? "text-active" : "link-menu "
        }`}
      >
        Investimentos
      </a>

      <a
        href="#"
        onClick={() => handleLinkClick("outros")}
        className={`text-base m-0 text-center w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  ${
          selectedLink === "outros" ? "text-active" : "link-menu "
        }`}
      >
        Outros serviços
      </a>
    </div>
  );
};

export default Menu;
