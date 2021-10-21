import React from "react";
import logoLeft from "../../../img/Vector.png";
import logoRight from "../../../img/Vector2.png";

function Logo() {
  return (
    <div>
      <img src={logoLeft} alt="logo" />
      <img src={logoRight} alt="logo" />
    </div>
  );
}

export default Logo;
