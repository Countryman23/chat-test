import React from "react";
import "../style.sass";

function InputPass() {
  return (
    <div className="block__input">
      <div className="block__input block__input__pass">
        <p>Password</p>
        <input placeholder="Input password" />
      </div>
    </div>
  );
}

export default InputPass;
