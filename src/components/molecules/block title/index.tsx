import React from "react";
import Title from "../../atoms/title/titlemain/index";
import Subtitle from "../../atoms/title/subtitle/index";
import "../style.sass";

function MoleculesTitle() {
  return (
    <div className="block__molecules">
      <div className="block__molecules block__molecules__title">
        <Title />
        <Subtitle />
      </div>
    </div>
  );
}

export default MoleculesTitle;
