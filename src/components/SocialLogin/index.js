import React from "react";
import "./style.css";
import Google from "../../assets/images/google.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Github from "../../assets/images/github.svg";

function SocialLogin() {
  return (
    <div className="social-login">
      <img src={Google} alt="Google" />
      <img src={Twitter} alt="Twitter" />
      <img src={Linkedin} alt="Linkedin" />
      <img src={Github} alt="Github" />
    </div>
  );
}

export default SocialLogin;
