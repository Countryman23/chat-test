import React from "react";
import "./style.sass";
// import PropTypes from "prop-types";
// import classNames from "classnames";

// const STYLES = [
//   "btn--primary--solid",
//   "btn--warning--solid",
//   "btn--danger--solid",
//   "btn--saccess--solid",
//   "btn--primary--outline",
//   "btn--warning--outline",
//   "btn--danger--outline",
//   "btn--saccess--outline",
// ];

// const SIZES = ["btn--medium", "btn--small"];

// const ButtonLogin = ({ children, type, onClick, buttonStyle, buttonSize }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <button
//       className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//       onClick={onClick}
//       type={type}
//     >
//       {children}
//     </button>
//   );
// };

// export default ButtonLogin;

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
