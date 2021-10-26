import React from "react";
import "./style.sass";
import AtomLogo from "../../atoms/logo/index";
import Ico from "../../../img/ico.png";
import BgChat from "../../../img/Frame3.png";

function TemplatesChat() {
  return (
    <>
      <div className="block__chat">
        <div className="block__chat block__chat__nav">
          <div className="block__chat block__chat__nav-logo">
            <AtomLogo />
          </div>
          <div className="block__chat block__chat__nav-ico">
            <img src={Ico} alt="ico" />
          </div>
        </div>
        <div className="block__chat block__chat__main">
          <div className="block__chat block__chat__main__navigation"></div>
          <div className="block__chat block__chat__main__content">
            <div className="block__chat block__chat__main__content block__chat__main__content__head">
              1
            </div>
            <div className="block__chat block__chat__main__content block__chat__main__content__messages">
              <img src={BgChat} alt="background" />
            </div>
            <div className="block__chat block__chat__main__content block__chat__main__content__footer">
              3
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplatesChat;
