import React from "react";
import "./style.sass";
import Bg from "../../../img/Frame.png";
import BgM from "../../../img/Frame4.png";
import OrganismsLogin from "../../organisms/blockLogin/index";

function TemplatesLogin() {
  return (
    <>
      <div className="block__login">
        <div className="block__login block__login__main">
          <div className="block__login block__login__main__navigation">
            <div>
              <OrganismsLogin />
            </div>
          </div>
          <div className="block__login block__login__main__content">
            <img src={Bg} alt="background" />
          </div>
          <div className="block__login block__login__main__content-mobile">
            <img src={BgM} alt="background" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplatesLogin;
