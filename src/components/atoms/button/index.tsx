import React from "react";
import "./style.sass";

function ButtonLogin() {
  return (
    <div className="block__btn">
      <div className="block__btn block__btn__btn-login">
        <input type="submit" value="Log In" />
      </div>
    </div>
  );
}

export default ButtonLogin;
