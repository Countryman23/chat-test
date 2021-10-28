import React from "react";
import "./style.sass";
import AtomLogo from "../../atoms/logo/index";
import Ico from "../../../img/ico.png";
import BgChat from "../../../img/Frame3.png";
import Mask from "../../../img/Mask.png";
import Screpka from "../../../img/Screpka.png";
import Arrow from "../../../img/arrow.png";
import { NavLink } from "react-router-dom";

function TemplatesChat() {
  return (
    <>
      <div className="block__chat">
        <div className="block__chat block__chat__nav">
          <div className="block__chat block__chat__nav-logo">
            <AtomLogo />
          </div>
          <div className="block__chat block__chat__nav-ico">
            <NavLink to="/">
              <img src={Ico} alt="ico" />
            </NavLink>
          </div>
        </div>
        <div className="block__chat block__chat__main">
          <div className="block__chat block__chat__main__navigation">
            <div className="block__chat block__chat__main__navigation-item">
              <div className="block__chat block__chat__main__navigation-item-ava">
                <img src={Mask} alt="" />
              </div>
              <div className="block__chat block__chat__main__navigation-item-descr">
                <p>Konstantin Konstantinopolski</p>
                <p>Hey!</p>
              </div>
            </div>
            <div className="active-item">
              <div className="active-item-ava">
                <img src={Mask} alt="" />
              </div>
              <div className="active-item-descr">
                <p>Marina Joe</p>
                <p>You: Sed ut per...</p>
              </div>
            </div>
            <div className="block__chat block__chat__main__navigation-item">
              <div className="block__chat block__chat__main__navigation-item-ava">
                <img src={Mask} alt="" />
              </div>
              <div className="block__chat block__chat__main__navigation-item-descr">
                <p>Ernest Gillroy</p>
                <p>
                  <span>You:</span> How are you doing?
                </p>
              </div>
            </div>
            <div className="block__chat block__chat__main__navigation-item">
              <div className="block__chat block__chat__main__navigation-item-ava">
                <img src={Mask} alt="" />
              </div>
              <div className="block__chat block__chat__main__navigation-item-descr">
                <p>Konstantin Konstantinopolski</p>
                <p>Hey!</p>
              </div>
            </div>
          </div>
          <div className="block__chat block__chat__main__content">
            <div className="block__chat  block__chat__main__content__head">
              <div className="block__chat block__chat__main__content__head-person">
                <p>Marina Joe</p>
                <p>Last seen 3 minutes ago</p>
              </div>
            </div>
            <div className="block__chat  block__chat__main__content__messages">
              <div>
                <img src={BgChat} alt="BgChat" />
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="block__chat  block__chat__main__content__footer">
              <div className="block__chat  block__chat__main__content__footer-load">
                <div>
                  <img src={Screpka} alt="Screpka" />
                </div>
                <div>
                  <p>Write something...</p>
                </div>
              </div>
              <div className="block__chat  block__chat__main__content__footer-arrow">
                <img src={Arrow} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplatesChat;
