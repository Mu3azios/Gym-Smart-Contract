import "./style.css";
import React from "react";
import image1 from "../../images/1.jpg";
const Navbar = () => {
  return (
    <div className="Nav">
      <nav className="navbar">
        <h1 className="title">MuazGym</h1>

        <img className="logo" src={image1} />

        <button className="button">
          <a href="https://metamask.io/" target="_blank">
            Connect Wallet
          </a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
