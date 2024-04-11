import "./Login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Login = () => {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:8080/auth/github", "_self");
  };

  const [user, setUser] = useState(null); // { username: "", password: "" }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const BASE_API_URL = "http://localhost:8080/api/";

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.post(`${BASE_API_URL}refresh`, {
  //       token: user.refreshToken,
  //     });
  //     setUser({
  //       ...user,
  //       accessToken: response.data.accessToken,
  //       refreshToken: response.data.refreshToken,
  //     });
  //     return response.data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     let currentDate = new Date();
  //     const decodedToken = jwt_decode(user.accessToken);
  //     if (decodedToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await refreshToken();
  //       config.headers["authorization"] = `Bearer ${data.accessToken}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_API_URL}login`, {
        username,
        password,
      });
      setUser(response.data);
      // Store user data in a cookie or local storage
      // Example using cookies:
      document.cookie = `user=${JSON.stringify(response.data)}; path=/`;
      // Example using local storage:
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  const token = localStorage.getItem("user");

  useEffect(() => {
    if (token) {
      setUser(jwt_decode(token));
    }
  }, []);

  return (
    <div className="login">
      <h1 className="loginTitle">
        Choose a Login Method
        {user && <div>Welcome, {user.username}!</div>}
      </h1>
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
