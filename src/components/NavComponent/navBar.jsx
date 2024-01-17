import "../../../public/assets/css/header.css";
import Headerlogo from "../../../public/assets/images/logo.jpeg";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Headerlogo} alt="images" className="headerlogo" />
          {/* <p className="headertitle">MNS Shop</p> */}
        </div>
        <ul>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </ul>
        <ul>
          <Link to="/" className="nav-link">
            About
          </Link>
        </ul>
        <ul>
          <Link to="/" className="nav-link">
            Services
          </Link>
        </ul>
        <ul>
          <Link to="/" className="nav-link">
            Contacts
          </Link>
        </ul>
        <button className="navbutton">Download Now</button>
      </nav>
    </>
  );
};

export default NavBar;
