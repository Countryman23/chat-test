import React from "react";
import logoLeft from "../../../img/Vector.png";
import logoRight from "../../../img/Vector2.png";
import "./style.sass";

function Logo() {
  return (
    <div className="block__logo">
      <img src={logoLeft} alt="logo" />
      <img src={logoRight} alt="logo" />
    </div>
  );
}

export default Logo;
