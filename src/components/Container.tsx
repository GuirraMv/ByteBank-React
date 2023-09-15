import React from "react";
import "../css/Styles.css";
import Menu from "./Menu";
import Card from "./Card";

const Container: React.FC = () => {
  return (
    <div className="bg-theme w-full h-full flex flex-row justify-center">
      <Menu />
      <Card />
    </div>
  );
};

export default Container;
