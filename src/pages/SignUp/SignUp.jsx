import React, { useContext, useState } from "react";
import Form from "../../components/Form/Form";
import Classes from "./SignUp.module.css";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../Firebase/FirebaseConfig";
function SignUp(props) {
  const [error, setError] = useState({});

  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  AuthCtx.isOnSignupPage();

  const signUpHandler = async (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
          setError(error);
          //
        });
    }
  };
  return (
    <div className={Classes.container}>
      <Form
        error={error}
        onUserData={signUpHandler}
        buttonlabel="Login instead."
        description="Already have an account?"
        route="/register/login"
        title="Create a new account."
      />
    </div>
  );
}

export default SignUp;
