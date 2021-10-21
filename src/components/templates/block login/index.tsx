import React from "react";
import "./style.sass";
import Bg from "../../../img/Frame.png";
import OrganismsLogin from "../../organisms/block login/index";
// import { NavLink } from "react-router-dom";

function TemplatesLogin() {
  return (
    <>
      {/* <NavLink to="/Chat">Chat</NavLink>; */}
      <div className="main">
        <div className="navigation">
          <div className="OrganismsLogin">
            <OrganismsLogin />
          </div>
        </div>
        <div className="content">
          <img src={Bg} alt="background" />
        </div>
      </div>
    </>
  );
}

export default TemplatesLogin;
