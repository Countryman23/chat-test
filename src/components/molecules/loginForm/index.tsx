import React, { FormEvent, useState } from "react";
import ErrorImg from "../../../img/error.png";
import BtnLogin from "../../atoms/button/index";
import InputName from "../../atoms/input/inputname/index";
import InputPass from "../../atoms/input/inputpass/index";

interface ILoginForm {
  Login: (inputValue: { name: string; password: string }) => void;
  error: string;
}

const LoginForm: React.FC<ILoginForm> = ({ Login, error }) => {
  const [inputValue, setInputValue] = useState({ name: "", password: "" });
  const [formValid, setFormValid] = useState(true);

  const validate = ({ name, password }) => {
    const nameIsValid = name;
    const passIsValid = password;
    const isCredentialsValid = nameIsValid && passIsValid;
    if (isCredentialsValid !== formValid) setFormValid(isCredentialsValid);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Login(inputValue);
  };

  const changeHandler = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value, name } = currentTarget;
    setInputValue((prev) => {
      const formValues = { ...prev, [name]: value };
      validate(formValues);
      return formValues;
    });
  };

  return (
    <div className="block__loginM">
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <p>User name</p>
            <InputName changeHandler={changeHandler} value={inputValue.name} />
          </div>
          <div>
            <p>Password</p>
            <InputPass
              changeHandler={changeHandler}
              value={inputValue.password}
            />
            {error !== "" ? (
              <div className="block__loginM block__loginM-error">
                {error}
                <div className="block__loginM block__loginM-error-img">
                  <img src={ErrorImg} alt="error" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <BtnLogin disabled={!formValid} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

// последняя рабочая версия
// import React, { FormEvent, useState } from "react";
// import "../molecules/style.sass";
// import ErrorImg from "../../img/error.png";

// interface ILoginForm {
//   Login: (inputValue: { name: string; password: string }) => void;
//   error: string;
// }

// const MoleculesLoginForm: React.FC<ILoginForm> = ({ Login, error }) => {
//   const [inputValue, setInputValue] = useState({ name: "", password: "" });
//   const [formValid, setFormValid] = useState(true);

//   const validate = ({ name, password }) => {
//     // здесь ваши проверки валидности
//     const nameIsValid = name; // ваша проверка валидности name false||true
//     const passIsValid = password; // ваша проверка валидности password falsa||true
//     const isCredentialsValid = nameIsValid && passIsValid;
//     if (isCredentialsValid !== formValid) setFormValid(isCredentialsValid);
//   };

//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     Login(inputValue);
//   };

//   // хендлер изменения инпутов
//   const changeHandler = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
//     const { value, name } = currentTarget;
//     setInputValue((prev) => {
//       const formValues = { ...prev, [name]: value };
//       validate(formValues);
//       return formValues;
//     });
//   };

//   return (
//     <div className="block__loginM">
//       <form onSubmit={submitHandler}>
//         <div>
//           <div>
//             <p>User name</p>
//             <input
//               className="block__loginM block__loginM__name"
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Input user name"
//               onChange={changeHandler}
//               value={inputValue.name}
//             />
//           </div>
//           <div>
//             <p>Password</p>
//             <input
//               className="block__loginM block__loginM__pass"
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Input password"
//               onChange={changeHandler}
//               value={inputValue.password}
//             />
//             {error !== "" ? (
//               <div className="block__loginM block__loginM-error">
//                 {error}
//                 <div className="block__loginM block__loginM-error-img">
//                   <img src={ErrorImg} alt="error" />
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//           <button
//             className="block__loginM block__loginM__btn"
//             disabled={!formValid}
//             type="submit"
//           >
//             Log In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MoleculesLoginForm;

// ///////////////////
// className={emailIdErr ? ' showError' : ''}

// if(!this.state.password){
//   passwordError = "Password field is required";
// }

// import React, { FormEvent, useState } from "react";
// // import React, { FormEvent, useState, useEffect } from "react";
// import "../molecules/style.sass";

// interface ILoginForm {
//   Login: (inputValue: { name: string; password: string }) => void;
//   error: string;
// }

// const MoleculesLoginForm: React.FC<ILoginForm> = ({ Login, error }) => {
//   const [inputValue, setInputValue] = useState({ name: "", password: "" });
//   // const [namedError, setNamedError] = useState("");
//   // const [passwordError, setPasswordError] = useState("");
//   // const [formValid, setFormValid] = useState(false);

//   // useEffect(() => {
//   //   if (namedError || passwordError) {
//   //     setFormValid(false);
//   //   } else {
//   //     setFormValid(true);
//   //   }
//   // }, [namedError, passwordError]);

//   // const nameHandler = (e) => {
//   //   setInputValue(e.target.value);
//   //   if (e.target.value.length < 3 || e.target.value.length > 20) {
//   //     setNamedError("incorrect name");
//   //   } else {
//   //     setNamedError("");
//   //   }
//   // };

//   // const passHandler = (e) => {
//   //   setInputValue(e.target.value);
//   //   if (e.target.value.length < 3 || e.target.value.length > 9) {
//   //     setPasswordError("incorrect pass");
//   //   } else {
//   //     setPasswordError("");
//   //   }
//   // };

//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     Login(inputValue);
//   };

//   return (
//     <div className="block__login">
//       <form onSubmit={submitHandler}>
//         <div>
//           {error !== "" ? <div>{error}</div> : ""}
//           <div>
//             <p>User name</p>
//             <input
//               className="block__login block__login__name"
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Input user name"
//               // onChange={(e) => nameHandler(e)}
//               onChange={(e) =>
//                 setInputValue({ ...inputValue, name: e.target.value })
//               }
//               value={inputValue.name}
//             />
//           </div>
//           <div>
//             <p>Password</p>
//             <input
//               className="block__login block__login__pass"
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Input password"
//               // onChange={(e) => passHandler(e)}
//               onChange={(e) =>
//                 setInputValue({ ...inputValue, password: e.target.value })
//               }
//               value={inputValue.password}
//             />
//           </div>
//           <button
//             className="block__login block__login__btn"
//             // disabled={!formValid}
//             type="submit"
//           >
//             Log In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MoleculesLoginForm;

// последняя версия
// const MoleculesLoginForm: React.FC<ILoginForm> = ({ Login, error }) => {
//   const [named, setNamed] = useState({ name: "" });
//   const [password, setPassword] = useState({ password: "" });

// const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   Login({ named, password });
// };

// return (
//   <div className="block__login">
//     <form onSubmit={submitHandler}>
//       <div className="form-inner">
//         {error !== "" ? <div className="error">{error}</div> : ""}
//         <div className="form-group">
//           <p>User name</p>
//           <input
// className="block__login block__login__name"
// type="text"
// name="name"
// id="name"
// placeholder="Input user name"
// onChange={(e) => setNamed({ ...named, name: e.target.value })}
// value={named.name}
// />
// </div>
// <div className="form-group">
// <p>Password</p>
// <input
// className="block__login block__login__name"
// type="text"
// name="name"
// id="name"
// placeholder="Input user name"
// onChange={(e) => setNamed({ ...named, name: e.target.value })}
// value={named.name}
// />
// </div>
// <div className="form-group">
// <p>Password</p>
// <input
// // onChange={(e) => passHandler(e)}
// className="block__login block__login__pass"
// type="password"
// name="password"
// id="password"
// placeholder="Input password"
// onChange={(e) =>
//   setPassword({ ...password, password: e.target.value })
// }
// value={password.password}
// />
// </div>
// <button
// className="block__login block__login__btn"
// type="submit"
// >
//   Log In
// </button>
// </div>
// </form>
// </div>
// );
// };

// export default MoleculesLoginForm;

// промежуточная версия
// import React, { useEffect, useState } from "react";
// import "../molecules/style.sass";

// const MoleculesLoginForm = () => {
//   const [named, setNamed] = useState("");
//   const [namedError, setNamedError] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [formValid, setFormValid] = useState(false);

//   useEffect(() => {
//     if (namedError || passwordError) {
//       setFormValid(false);
//     } else {
//       setFormValid(true);
//     }
//   }, [namedError, passwordError]);

//   const emailHandler = (e) => {
//     setNamed(e.target.value);
//     if (e.target.value.length < 3 || e.target.value.length > 20) {
//       setNamedError("incorrect name");
//     } else {
//       setNamedError("");
//     }
//   };

//   const passHandler = (e) => {
//     setPassword(e.target.value);
//     if (e.target.value.length < 3 || e.target.value.length > 9) {
//       setPasswordError("incorrect pass");
//     } else {
//       setPasswordError("");
//     }
//   };

//   return (
//     <div className="block__login">
//       <form>
//         <div>{namedError}</div>
//         <p>User name</p>
//         <input
//           className="block__login block__login__name"
//           onChange={(e) => emailHandler(e)}
//           value={named}
//           name="named"
//           type="text"
//           placeholder="Input user name"
//         />
//         <div>{passwordError}</div>
//         <p>Password</p>
//         <input
//           className="block__login block__login__pass"
//           onChange={(e) => passHandler(e)}
//           value={password}
//           name="password"
//           type="password"
//           placeholder="Input password"
//         />
//         <div>
//           <button
//             className="block__login block__login__btn"
//             disabled={!formValid}
//             type="submit"
//           >
//             Log In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MoleculesLoginForm;
