import React, { useState } from "react";
import LoginForm from "./loginForm/index";
import { Redirect } from "react-router";

type User = {
  name: string;
  password: string;
};

function MoleculesLoginForm() {
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
      setError("Something goes wrong");
    }
  };

  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({
  //     name: "",
  //   });
  // };

  return (
    <div>
      {user.name !== "" ? (
        <Redirect to={"/Chat"} />
      ) : (
        // <button onClick={Logout}>Logout</button>
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
export default MoleculesLoginForm;
