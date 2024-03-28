import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <h1 className="registerTitle">Create an Account</h1>
      <div className="wrapper">
        <form className="centre">
          <input type="text" placeholder="Username" className="registerInput" />
          <input type="email" placeholder="Email" className="registerInput" />
          <input
            type="password"
            placeholder="Password"
            className="registerInput"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="registerInput"
          />
          <button className="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
