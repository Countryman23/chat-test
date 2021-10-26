import React from "react";

function BtnLogin(props) {
  return (
    <div>
      <button
        className="block__loginM block__loginM__btn"
        disabled={props.disabled}
        type="submit"
      >
        Log In
      </button>
    </div>
  );
}

export default BtnLogin;

// третья версия
// function ButtonLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Your state values: \n
//             email: ${email} \n
//             password: ${password} \n
//             You can replace this alert with your process`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email address</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           onChange={handleEmailChange}
//           value={email}
//         />
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           onChange={handlePasswordChange}
//           value={password}
//         />
//       </div>
//       <button type="submit" disabled={!email || !password}>
//         Login
//       </button>
//     </form>
//   );
// }

// export default ButtonLogin;

// вторая версия
// function ButtonLogin() {
//   const [disable, setDisable] = useState(false);

//   return (
//     <div className="block__btn">
//       <div className="block__btn block__btn__btn-login">
//         <button
//           onClick={() => setDisable(true)}
//           disabled={disable}
//           type="submit"
//         >
//           Log In
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ButtonLogin;

// первая версия
// function ButtonLogin() {
//   return (
//     <div className="block__btn">
//       <div className="block__btn block__btn__btn-login">
//         <input disabled={true} type="submit" value="Log In" />
//       </div>
//     </div>
//   );
// }

// export default ButtonLogin;
