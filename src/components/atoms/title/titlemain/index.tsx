import React from "react";
import "../style.sass";

function Title() {
  return (
    <div className="block__title">
      <div className="block__title block__title__title">
        <p>
          Wellcome to{" "}
          <span className="block__title block__title__title block__title__title-color">
            Chatty
          </span>
          <span className="block__title block__title__title block__title__title-color2">
            !
          </span>
        </p>
      </div>
    </div>
  );
}

export default Title;
