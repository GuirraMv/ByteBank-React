import React from "react";
import "../css/Styles.css";
import ImgBackground from "../assets/saldo-bg1.png";
import DetailsBackground from "../assets/saldo-bg2.png";
import Eye from "../assets/olho.svg";

const Card: React.FC = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="bg-green mt-6 ml-3 mr-3 w-auto h-96 rounded-lg flex flex-row">
      <div className="flex flex-col">
        <p className="text-white font-bold text-2xl pl-6 pt-6 ">
          Olá, Matheus! ;D
        </p>
        <div className="mt-6 text-white text-base pl-6">{date}</div>
        <img src={ImgBackground} className="mt-7 " alt="Imagem 1" />
      </div>

      <div className="flex flex-row-reverse ml-60">
        <img src={DetailsBackground} className="h-36" alt="detalhes" />
        <span className="flex self-center ">
          <div className="flex flex-row w-full ">
            <p className="text-white font-bold text-xl pr-5">Saldo</p>
            <img src={Eye} alt="" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Card;
