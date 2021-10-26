import React from "react";
import "../style.sass";

function InputPass(props) {
  return (
    <div>
      <input
        className="block__loginM block__loginM__pass"
        type="password"
        name="password"
        id="password"
        placeholder="Input password"
        onChange={props.changeHandler}
        value={props.value}
      />
    </div>
  );
}

export default InputPass;
