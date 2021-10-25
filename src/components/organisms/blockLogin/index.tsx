import React, { useState } from "react";
import AtomLogo from "../../atoms/logo/index";
import MoleculesLoginForm from "../../molecules/index";
import MoleculesTitle from "../../molecules/block title/index";
import { Redirect } from "react-router";
import "../style.sass";

type User = {
  name: string;
  password: string;
};

function OrganismsLogin() {
  const adminUser: User = {
    name: "admin",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const Login = (inputValue: { name: string; password: string }) => {
    console.log(inputValue);

    if (
      inputValue.name === adminUser.name &&
      inputValue.password === adminUser.password
    ) {
      setUser({
        name: inputValue.name,
      });
    } else {
      setError("Fill in the fields!");
    }
  };

  return (
    <div className="block__organisms">
      <div className="block__organisms block__organisms__logo">
        <AtomLogo />
      </div>
      <div>
        <MoleculesTitle />
      </div>
      <div>
        {user.name !== "" ? (
          <Redirect to={"/Chat"} />
        ) : (
          <MoleculesLoginForm Login={Login} error={error} />
        )}
      </div>
    </div>
  );
}
export default OrganismsLogin;

// import React, { useState } from "react";
// import AtomLogo from "../../atoms/logo/index";
// import MoleculesLoginForm from "../../molecules/index";
// import MoleculesTitle from "../../molecules/block title/index";
// import { Redirect } from "react-router";
// import "../style.sass";

// type User = {
//   name: string;
//   password: string;
// };

// function OrganismsLogin() {
//   const adminUser: User = {
//     name: "admin",
//     password: "admin123",
//   };

//   const [user, setUser] = useState({ name: "" });
//   const [error, setError] = useState("");

//   const Login = (inputValue: { name: string; password: string }) => {
//     console.log(inputValue);

//     if (
//       inputValue.name === adminUser.name &&
//       inputValue.password === adminUser.password
//     ) {
//       setUser({
//         name: inputValue.name,
//       });
//     } else {
//       setError("Fill in the fields!");
//     }
//   };

//   return (
//     <div className="block__organisms">
//       <div className="block__organisms block__organisms__logo">
//         <AtomLogo />
//       </div>
//       <div>
//         <MoleculesTitle />
//       </div>
//       <div>
//         {user.name !== "" ? (
//           <Redirect to={"/Chat"} />
//         ) : (
//           <MoleculesLoginForm Login={Login} error={error} />
//         )}
//       </div>
//     </div>
//   );
// }
// export default OrganismsLogin;

// третья версия
// function OrganismsLogin() {
//   return (
//     <div className="block__organisms">
//       <div className="block__organisms block__organisms__logo">
//         <AtomLogo />
//       </div>
//       <div>
//         <MoleculesTitle />
//       </div>
//       <div>
//         <MoleculesLoginForm />
//       </div>
//     </div>
//   );
// }
// export default OrganismsLogin;

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
