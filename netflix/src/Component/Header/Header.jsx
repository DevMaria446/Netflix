import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header-image" src="/image2.png" alt="logo" />
        <button className="header-btn1">Sign in</button>
      </header>
      <div className="header-body">
        <h1 className="header-h1">
          Unlimited movies, TV <br />
          shows, and more
        </h1>
        <h3 className="header-h3">Starts at ₦2,500. Cancel anytime.</h3>
        <p className="header-p">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="header-input">
          <input className="header-email" placeholder="Email address" />
          <button className="header-btn2">Get Started </button>
        </div>
      </div>
    </>
  );
};

export default Header;
