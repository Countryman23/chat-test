import React, { useEffect, useState } from "react";
import "../molecules/style.sass";

const MoleculesLoginForm = () => {
  const [named, setNamed] = useState("");
  const [namedError, setNamedError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (namedError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [namedError, passwordError]);

  const emailHandler = (e) => {
    setNamed(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 20) {
      setNamedError("incorrect name");
    } else {
      setNamedError("");
    }
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 9) {
      setPasswordError("incorrect pass");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="block__login">
      <form>
        <div>{namedError}</div>
        <p>User name</p>
        <input
          className="block__login block__login__name"
          onChange={(e) => emailHandler(e)}
          value={named}
          name="named"
          type="text"
          placeholder="Input user name"
        />
        <div>{passwordError}</div>
        <p>Password</p>
        <input
          className="block__login block__login__pass"
          onChange={(e) => passHandler(e)}
          value={password}
          name="password"
          type="password"
          placeholder="Input password"
        />
        <div>
          <button
            className="block__login block__login__btn"
            disabled={!formValid}
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoleculesLoginForm;
