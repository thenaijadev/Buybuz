import React from "react";
import Classes from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={Classes.footer}>
      <div className={Classes.links_div}>
        <div className={Classes.link_div}>
          <Link to="/about">
            <p className={Classes.link_head}>About Us</p>
          </Link>
          <Link to="/register">
            <p>Registration</p>
          </Link>
          <Link to="/careers">
            <p>Careers</p>
          </Link>
          <Link to="/blog">
            <p>Blog</p>
          </Link>
          <Link to="/policies">
            <p>Policies</p>
          </Link>
        </div>
        <div className={Classes.link_div}>
          <Link to="/support">
            <p className={Classes.link_head}>Support</p>
          </Link>
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
          <Link to="/help">
            <p>Help Center</p>
          </Link>
          <Link to="/dashboard">
            <p>Manage Account</p>
          </Link>
          <Link to="/converter">
            <p>Currency Converter</p>
          </Link>
        </div>
        <div className={Classes.link_div}>
          <Link to="/shop">
            <p className={Classes.link_head}>Shop</p>
          </Link>
          <Link to="/discount">
            <p>Discount Deals</p>
          </Link>
          <Link to="/blackfriday">
            <p>Black Fridays</p>
          </Link>
          <Link to="/howtosell">
            <p>Sell Products</p>
          </Link>
          <Link to="/community">
            <p>Community</p>
          </Link>
        </div>
        <div className={Classes.link_div}>
          <Link to="/socials">
            <p className={Classes.link_head}>Socials</p>
          </Link>
          <a href="https://www.google.com">
            <p>Twitter</p>
          </a>
          <a href="https://www.google.com">
            <p>Facebook</p>
          </a>
          <a href="https://www.google.com">
            <p>TiktOk</p>
          </a>
          <a href="https://www.google.com">
            <p>Whatsapp</p>
          </a>
        </div>
        <div className={Classes.link_div}>
          <p className={Classes.link_head}>Language</p>
          <p>English(UK)</p>
          <p>French(France)</p>
          <p>German(Germany)</p>
        </div>
      </div>
      <div className={Classes.copyright_div}>
        <p>© 2022 BuyZaar</p>
      </div>
    </div>
  );
}

export default Footer;
