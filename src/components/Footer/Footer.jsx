import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import insta_con from "../Assets/instagram_icon.png";

import pinterest_icon from "../Assets/pintester_icon.png";
import whats_appIcon from "../Assets/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-img" src={footer_logo} alt="" />
        <p>SHOOPER</p>
      </div>
      <div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={insta_con} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whats_appIcon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>copyright @2023 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
