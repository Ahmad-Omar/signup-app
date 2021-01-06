import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePw = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //API
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Your email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="Write your email"
        onChange={handleChange}
      />

      <label htmlFor="password">Enter your password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="•••••••••"
        onChange={handleChangePw}
      />

      <input type="submit" value="Login" />
      <p className="register">
        Don’t have an account? <Link to="/signup-app">Register</Link>
      </p>
    </form>
  );
}

export default LoginForm;
