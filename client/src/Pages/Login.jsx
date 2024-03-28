import "./Login.css";

const Login = () => {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:8080/auth/github", "_self");
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
        <div className="right">
          <input type="text" placeholder="Username" className="loginInput" />
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
          />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
