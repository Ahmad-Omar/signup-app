import React from "react";
import OrDivider from "../../../components/OrDivider";
import "./style.css";
import { useState, useEffect } from "react";
import * as yup from "yup";
import PasswordStrength from "./PasswordStrength";

let signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      "",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  repassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password does not match"),
  agree: yup
    .boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
let initialErrors = {
  email: "",
  password: "",
  repassword: "",
  agree: "",
};
function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErros] = useState(initialErrors);
  const [isSubmit, setIsSubmit] = useState(false);

  const validateForm = async (data) => {
    try {
      await signupSchema.validate(data, { abortEarly: false });

      setErros(initialErrors);
      return data;
    } catch (err) {
      const newError = err.inner.reduce((acc, cur) => {
        acc[cur.path] = cur.message;
        return acc;
      }, {});
      setErros(newError);
    }
  };
  const data = { email, password, repassword, agree };

  useEffect(() => {
    if (isSubmit) {
      validateForm(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, repassword, agree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    validateForm(data).then((data) => {
      console.log(data);
    });
  };

  const setterObj = {
    email: setEmail,
    password: setPassword,
    repassword: setRePassword,
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setterObj[name](value);
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email address*
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Enter email address"
          className={`${errors.email && "input-error"}`}
        />
        {errors.email && <div className="error-text">{errors.email}</div>}
      </label>

      <label htmlFor="password">
        Create password*
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
          placeholder="Password"
          className={`${errors.password && "input-error"}`}
        />
        <PasswordStrength password={password} />
        {errors.password && <div className="error-text">{errors.password}</div>}
      </label>

      <label htmlFor="repassword">
        Repeat password*
        <input
          type="password"
          id="repassword"
          name="repassword"
          onChange={handleChange}
          value={repassword}
          placeholder="Repeat password"
          className={`${errors.repassword && "input-error"}`}
        />
        {errors.repassword && (
          <div className="error-text">{errors.repassword}</div>
        )}
      </label>
      <label htmlFor="agree" className="agree">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to terms &amp; conditions
        {errors.agree && <div className="error-text">{errors.agree}</div>}
      </label>
      <input type="submit" value="Register Account" />
      <OrDivider />
    </form>
  );
}

export default SignupForm;
