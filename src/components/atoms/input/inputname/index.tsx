import React from "react";
import "../style.sass";

function InputName(props) {
  return (
    <div>
      <input
        className="block__loginM block__loginM__name"
        type="text"
        name="name"
        id="name"
        placeholder="Input user name"
        onChange={props.changeHandler}
        value={props.value}
      />
    </div>
  );
}

export default InputName;
