import React, { useContext, useState, useReducer } from "react";
import Classes from "./Form.module.css";
import Logo from "../../Image/Logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function Form(props) {
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isValid: true,
  });
  const [phoneNumber, setPhonenumber] = useState({ value: "", isValid: true });
  const [name, setName] = useState({ value: "", isValid: true });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const AuthCtx = useContext(AuthContext);
  const toLoginHandler = () => {
    AuthCtx.isOnLoginPage();
  };

  const fullnameHandler = (e) => {
    setName((prev) => {
      return {
        value: e.target.value,
        isValid: e.target.value.length > 0,
      };
    });
  };

  const emailChangeHandler = (e) => {
    setEmail((prev) => {
      return {
        value: e.target.value,
        isValid: e.target.value.includes("@") && e.target.value.length > 5,
      };
    });
  };

  const phoneNumberChangeHandler = (e) => {
    setPhonenumber((prev) => {
      return {
        value: e.target.value,
        isValid: e.target.value.length === 11,
      };
    });
  };

  const passwordChangeHandler = (e) => {
    setPassword((prev) => {
      return {
        value: e.target.value,
        isValid: e.target.value.trim().length > 8,
      };
    });
  };

  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword((prev) => {
      return {
        value: e.target.value,
        isValid: e.target.value.trim().length > 8,
      };
    });
    setIsPasswordValid(e.target.value === password.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    console.log(userData);

    if (AuthCtx.onLogInPage === true) {
      props.onUserDataLogin(userData);
    } else {
      props.onUserData(userData);
    }
  };

  const clickHandler = () => {};

  return (
    <div className={Classes.form_div}>
      <img className={Classes.logo} src={Logo} />
      <h4 className={Classes.form_title}>{props.title}</h4>

      <form className={Classes.form} onSubmit={submitHandler}>
        {!AuthCtx.onLogInPage && (
          <div className={Classes.input_div}>
            <h4 className={Classes.title}>Full name(Surname first.)</h4>
            {!name.isValid && (
              <h5 className={Classes.error_message}>
                This input field cannot be empty
              </h5>
            )}
            <input
              type="text"
              value={name.value}
              className={Classes.input}
              onChange={fullnameHandler}
              placeholder="Enter first name"
            />
          </div>
        )}

        <div className={Classes.input_div}>
          <h4 className={Classes.title}>Email</h4>
          {!email.isValid && (
            <h5 className={Classes.error_message}>
              Please input a valid email.
            </h5>
          )}
          <input
            type="email"
            value={email.value}
            className={Classes.input}
            onChange={emailChangeHandler}
            placeholder="Enter email:"
          />
        </div>
        {!AuthCtx.onLogInPage && (
          <div className={Classes.input_div}>
            <h4 className={Classes.title}>Phone number</h4>
            {!phoneNumber.isValid && (
              <h5 className={Classes.error_message}>Invalid Phone Number</h5>
            )}
            <input
              value={phoneNumber.value}
              type="number"
              onChange={phoneNumberChangeHandler}
              className={Classes.input}
              placeholder="Enter phone number:"
            />
          </div>
        )}

        <div className={Classes.input_div}>
          <h4 className={Classes.title}>Password</h4>
          {!password.isValid && (
            <h5 className={Classes.error_message}>
              Password must be at least 8 characters long.
            </h5>
          )}

          <input
            value={password.value}
            onChange={passwordChangeHandler}
            type="password"
            className={Classes.input}
            placeholder="Enter password."
          />
        </div>
        {!AuthCtx.onLogInPage && (
          <div className={Classes.input_div}>
            <h4 className={Classes.title}>Confirm Password</h4>
            {!confirmPassword.isValid && (
              <h5 className={Classes.error_message}>
                Password must be at least 8 characters long.
              </h5>
            )}
            {!isPasswordValid && (
              <h5 className={Classes.error_message}>Passwords do not match</h5>
            )}
            <input
              value={confirmPassword.value}
              onChange={confirmPasswordChangeHandler}
              className={Classes.input}
              placeholder="Confirm password"
              type="password"
            />
          </div>
        )}
        {props.error &&
          props.error.message ===
            "Firebase: Error (auth/email-already-in-use)." && (
            <h4 className={Classes.error_message}>
              This email exists for another account.
            </h4>
          )}
        {props.error &&
          props.error.message === "Firebase: Error (auth/invalid-email)." && (
            <h4 className={Classes.error_message}>Invalid email</h4>
          )}
        <button
          className={Classes.submit_button}
          onClick={clickHandler}
          type="submit"
        >
          Create an account.
        </button>
      </form>
      <div className={Classes.account_present}>
        <h3>{props.description}</h3>
        <Link to={props.route}>
          <button
            onClick={toLoginHandler}
            className={Classes.login_instead}
            type="submit"
          >
            {props.buttonlabel}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
