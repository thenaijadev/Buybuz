import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form/Form";
import Classes from "./Login.module.css";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const AuthCtx = useContext(AuthContext);
  const { route } = useParams();

  if (route === "login") {
    AuthCtx.isOnLoginPage();
  }

  const navigate = useNavigate();

  const loginHandler = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        AuthCtx.onLogin();
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={Classes.container}>
      <Form
        onUserDataLogin={loginHandler}
        description="New user?"
        buttonlabel="Create an account."
        route="/register"
        title="Login into your account"
      />
    </div>
  );
};
export default Login;
