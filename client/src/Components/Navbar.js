import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Capitalle
        </Link>
      </span>
      <ul className="nav-list">
        <li className="nav-list-items">
          <Link className="link" to="/login">
            Login
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
    </div>
  );
};

export default Navbar;
