import React from "react";
import "./style.css";
import { ReactComponent as Google } from "../../assets/images/google.svg";

function GoogleLogin() {
  return (
    <div className="google-login">
      <div className="google-input">
        <Google />
        <input type="button" value="login" />
      </div>
    </div>
  );
}

export default GoogleLogin;
