import React from "react";
import "./style.sass";
import Bg from "../../../img/Frame.png";
import OrganismsLogin from "../../organisms/blockLogin/index";
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

// подключить стили по БЭМ
// function TemplatesLogin() {
//   return (
//     <>
//       {/* <NavLink to="/Chat">Chat</NavLink>; */}
//       <div className="block__login">
//         <div className="block__login block__login__main">
//           <div className="block__login block__login__main block__login__main__navigation">
//             <div className="OrganismsLogin">
//               <OrganismsLogin />
//             </div>
//           </div>
//           <div className="block__login block__login__main block__login__main__content">
//             <img src={Bg} alt="background" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TemplatesLogin;
