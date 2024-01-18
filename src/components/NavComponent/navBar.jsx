import "../../../public/assets/css/header.css";
import Headerlogo from "../../../public/assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className={`navbar ${menuVisible ? "active" : ""}`}>
        <div className="logo">
          <img src={Headerlogo} alt="images" className="headerlogo" />
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
        <div className="marig">
          <button className="navbutton">Download Now</button>
        </div>

        {/* hamburger icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <CiMenuFries size={24} className="hamburger-icon" />
        </div>
        {/* mobile nav */}
        <div className={`nav-mobile ${menuVisible ? "active" : ""}`}>
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
        </div>
      </nav>
    </>
  );
};

export default NavBar;
