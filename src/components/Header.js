import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from '../react_logo.png'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <input type={'checkbox'} id="check" />
        <label className="fa fa-bars" htmlFor="check"></label>
        <div className="logo" style={{}}><img id="img" src={logo} width="50px" alt="Logo" style={{position:"relative", top:"12px"}} /></div>
        <ul>
          <li>
            <Link to={"/home"}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to={"/feedback"}>
              <span>Feedback</span>
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
