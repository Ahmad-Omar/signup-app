import React from "react";
import "./style.css";
import Quote from "../../components/Quote";
import logowithtext from "../../assets/images/logowithtext.svg";
import ConsoleImg from "../../assets/images/signin-img.png";
import SocialLogin from "../../components/SocialLogin";
import OrDivider from "../../components/OrDivider";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login">
      <div className="left-side">
        <div className="site-logotext">
          <img src={logowithtext} alt="Logo" />
        </div>
        <Quote location="login" />
        <img src={ConsoleImg} className="console-img" alt="ConsoleImg" />
      </div>

      <div className="right-side">
        <h2 className="login-title">Join the game!</h2>
        <p className="login-p">Go inside the best gamers social network!</p>
        <SocialLogin />
        <OrDivider />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
