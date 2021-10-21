import React from "react";
import InputName from "../../atoms/input/inputname/index";
import InputPass from "../../atoms/input/inputpass/index";
import "../style.sass";

function MoleculesInput() {
  return (
    <div className="block__molecules">
      <div className="block__molecules block__molecules__input">
        <InputName />
        <InputPass />
      </div>
    </div>
  );
}

export default MoleculesInput;
