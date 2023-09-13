import React from "react";
import "../css/Styles.css";

const Card: React.FC = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="bg-green mt-6 ml-3 mr-3 w-auto h-96 p-6 rounded-lg ">
      <div className="flex flex-col">
        <p className="text-white font-bold text-2xl">Olá Matheus! ;D</p>
        <div className="mt-6 text-white text-base">{date}</div>
      </div>
    </div>
  );
};

export default Card;
