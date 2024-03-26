const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">Google</div>
          <div className="loginButton github">Github</div>
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
