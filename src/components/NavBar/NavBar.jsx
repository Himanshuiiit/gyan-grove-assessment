import React from "react";
import "./NavBar.css";
import { GetContext } from "../../context";
const NavBar = () => {
  const { isMobile } = GetContext();
  const navLinks = [
    "Live Shows",
    "Streams",
    "Movies",
    "Plays",
    "Events",
    "Sports",
    "Activites",
  ];
  return (
    <header className="App-header">
      <div className="header">
        <span className="logo">BookUsNow</span>
        <div className={`header-center ${isMobile ? "hide" : ""}`}>
          <button className="categories-btn">
            <img
              src="./assets/icons/burger-menu-svgrepo-com.svg"
              alt="category menu"
            />
            Categories
          </button>
          <div className="search">
            <input className="search-bar" placeholder="DJI Phantom" />
            <img
              src="./assets/icons/search.svg"
              className="icon"
              alt="search button"
            />
          </div>
        </div>
        <div className="header-right">
          <img
            src="./assets/icons/search.svg"
            className={`icon ${isMobile ? "" : "hide"}`}
            alt="search button"
          />
          <div
            className="fav-btn"
            style={{ padding: isMobile ? "0" : "0.5rem 1rem" }}
          >
            <img
              src="./assets/icons/heart.svg"
              className={`icon`}
              alt="fav button"
            />{" "}
            <span className={`fav ${isMobile ? "hide" : ""}`}>Favorites</span>
          </div>
          {isMobile ? (
            <img
              src="./assets/icons/person.svg"
              className={`icon ${isMobile ? "" : "hide"}`}
              alt="profile button"
            />
          ) : (
            <button className="sign-in-btn">Sign In</button>
          )}
        </div>
      </div>
      <nav className={` ${isMobile ? "nav-bar-mobile" : "nav-bar"} `}>
        <div className="location-picker">
          <img
            src="./assets/icons/location.svg"
            className="icon"
            alt="location icon"
          />
          <span>Mumbai, India</span>
          <img
            src="./assets/icons/next-icon.svg"
            className="next-icon"
            alt="chevron right icon"
          />
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <span className="nav-link" key={link}>
              {link}
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
