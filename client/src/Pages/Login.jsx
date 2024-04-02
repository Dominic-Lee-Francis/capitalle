import "./Login.css";
import { useState } from "react";

const Login = () => {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:8080/auth/github", "_self");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.errors) {
        alert(data.errors);
      } else {
        console.log(response);
        console.log(body);
        window.location = "/";
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            Google
          </div>
          <div className="loginButton github" onClick={github}>
            Github
          </div>
        </div>
        <div className="centre">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form className="right" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="username"
            className="loginInput"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="loginInput"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
