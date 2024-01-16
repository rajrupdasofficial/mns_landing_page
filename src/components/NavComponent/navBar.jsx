import "../../../public/assets/css/header.css";
import Headerlogo from "../../../public/assets/images/logo.png";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Headerlogo} alt="images" className="headerlogo" />
          <p className="headertitle">MNS Shop</p>
        </div>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Services</ul>
        <ul>Contacts</ul>
        <button className="navbutton">Download Now</button>
      </nav>
    </>
  );
};

export default NavBar;
