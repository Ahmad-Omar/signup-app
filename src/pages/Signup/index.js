import React from "react";
import "./style.css";
import Logo from "../../components/Logo";
import Quote from "../../components/Quote";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import GoogleLogin from "../../components/GoogleLogin";

function Signup() {
  return (
    <div className="signup">
      <div className="left-side">
        <div className="vectors"></div>
        <Logo />
        <Quote />
      </div>

      <div className="right-side">
        <Link to="/login" className="back-button">
          <ion-icon name="chevron-back-outline"></ion-icon>
          Back
        </Link>
        <h2 className="signup-title">Register Individual Account!</h2>
        <p className="signup-p">
          For the purpose of gamers regulation, your details are required.
        </p>
        <SignupForm />
        <GoogleLogin />
      </div>
    </div>
  );
}

export default Signup;
