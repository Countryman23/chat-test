import React from "react";

function BtnLogin(props) {
  return (
    <div>
      <button
        className="block__loginM block__loginM__btn"
        disabled={props.disabled}
        type="submit"
      >
        Log In
      </button>
    </div>
  );
}

export default BtnLogin;
