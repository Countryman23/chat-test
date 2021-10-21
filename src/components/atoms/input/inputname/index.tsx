import React from "react";
import "../style.sass";

function InputName() {
  return (
    <div className="block__input">
      <div className="block__input block__input__name">
        <p>User name</p>
        <input placeholder="Input user name" />
      </div>
    </div>
  );
}

export default InputName;
