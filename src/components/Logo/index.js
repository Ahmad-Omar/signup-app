import React from "react";
import "./style.css";
import SiteLogo from "../../assets/images/logowhite.svg";

function Logo(props) {
  return (
    <div className="site-logo">
      <img src={SiteLogo} alt="SiteLogo" />
      <span className="logo-text">Gamers</span>
    </div>
  );
}

export default Logo;
