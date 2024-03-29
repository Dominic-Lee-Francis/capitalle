import "./Register.css";

import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="register">
      <h1 className="registerTitle">Create an Account</h1>
      <div className="wrapper">
        <form className="centre">
          <input
            type="text"
            placeholder="Username"
            className="registerInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="registerInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="registerInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="registerInput"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (e.target.value !== password) {
                setError("Passwords do not match");
              } else {
                setError("");
              }
            }}
          />
          <button className="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
