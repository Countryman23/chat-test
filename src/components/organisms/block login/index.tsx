import React from "react";
import ButtonLogin from "../../atoms/button";
import Logo from "../../atoms/logo/index";
import MoleculesInput from "../../molecules/block input";
import MoleculesTitle from "../../molecules/block title";
import "../style.sass";

function OrganismsLogin() {
  return (
    <div>
      <div className="logo">
        <Logo />
      </div>
      <div>
        <MoleculesTitle />
      </div>
      <div>
        <MoleculesInput />
      </div>
      <div>
        <ButtonLogin />
      </div>
    </div>
  );
}

export default OrganismsLogin;
