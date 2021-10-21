import React from "react";
import ButtonLogin from "../../atoms/button/index";
import Logo from "../../atoms/logo/index";
import MoleculesInput from "../../molecules/block input";
import MoleculesTitle from "../../molecules/block title";
import "../style.sass";

function OrganismsLogin() {
  return (
    <div className="block__organisms">
      <div className="block__organisms block__organisms__logo">
        <Logo />
      </div>
      <div>
        <MoleculesTitle />
      </div>
      <div>
        <MoleculesInput />
      </div>
      <div>
        <ButtonLogin>Log in</ButtonLogin>
      </div>
    </div>
  );
}

export default OrganismsLogin;
