import { Link } from "react-router-dom";
import "./Navbar.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Navbar = ({ user }) => {
  const logout = async () => {
    // Redirect to the logout URL
    window.open("http://localhost:8080/auth/logout", "_self");
    sessionStorage.clear();
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    user = null;
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Capitalle
        </Link>
      </span>
      {/* */}
      {/* If user is logged in, display the following links */}
      {user ? (
        <ul className="nav-list">
          <li className="nav-list-items name">{user.username}</li>
          <li className="nav-list-items">
            <Link className="link" onClick={logout}>
              Logout
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="link" to="/statistics">
              Statistics
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="link" to="/rules">
              Rules
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      ) : (
        //
        //  If user is logged out, display the following links
        <ul className="nav-list">
          <li className="nav-list-items">
            <Link className="link" to="/login">
              {" "}
              Login{" "}
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="link" to="/register">
              {" "}
              Register{" "}
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="link" to="/rules">
              Rules
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
