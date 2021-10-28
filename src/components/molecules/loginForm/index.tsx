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

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
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
            {error !== "" ? (
              <div className="block__loginM block__loginM-errorName">
                <div className="block__loginM block__loginM-errorName-fix">
                  {error}
                </div>
                <div className="block__loginM block__loginM-errorName-img">
                  <img src={ErrorImg} alt="error" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <p>Password</p>
            <InputPass
              changeHandler={changeHandler}
              value={inputValue.password}
            />
            {error !== "" ? (
              <div className="block__loginM block__loginM-errorPass">
                {error}
                <div className="block__loginM block__loginM-errorPass-img">
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
