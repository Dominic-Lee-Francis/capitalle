import "./Register.css";

import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, email, password };
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      console.log(body);
      window.location = "/login";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="register">
      <h1 className="registerTitle">Create an Account</h1>
      <div className="wrapper">
        <form className="centre" onSubmit={onSubmitForm}>
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
          <button className="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
