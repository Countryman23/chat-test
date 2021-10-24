import React from "react";
import AtomLogo from "../../atoms/logo/index";
import MoleculesLoginForm from "../../molecules/index";
import MoleculesTitle from "../../molecules/block title/index";
import "../style.sass";

function OrganismsLogin() {
  return (
    <div className="block__organisms">
      <div className="block__organisms block__organisms__logo">
        <AtomLogo />
      </div>
      <div>
        <MoleculesTitle />
      </div>
      <div>
        <MoleculesLoginForm />
      </div>
    </div>
  );
}
export default OrganismsLogin;

// вторая версия
// function OrganismsLogin() {
//   return (
//     <div className="block__organisms">
//       <div className="block__organisms block__organisms__logo">
//         <Logo />
//       </div>
//       <div>
//         <ButtonLogin />
//       </div>
//     </div>
//   );
// }

// export default OrganismsLogin;

// первая версия
// function OrganismsLogin() {
//   return (
//     <div className="block__organisms">
//       <div className="block__organisms block__organisms__logo">
//         <Logo />
//       </div>
//       <div>
//         <MoleculesTitle />
//       </div>
//       <div>
//         <MoleculesInput />
//       </div>
//       <div>
//         <ButtonLogin
//           onClick={() => {
//             console.log("кнопка");
//           }}
//           type="button"
//           buttonStyle="btn--primary"
//         >
//           Log in
//         </ButtonLogin>
//       </div>
//     </div>
//   );
// }

// export default OrganismsLogin;
