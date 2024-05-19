import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/images/logo.svg";
import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <header className={`header ${shrink ? "show__header__shrink" : ""}`}>
      <nav className="header__navbar container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className={`header__list ${show ? "header__show__list" : ""}`}>
          <li className="header__item">
            <NavLink
              className="header__link"
              to="/"
              onClick={() => setShow(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <a className="header__link" href="#">
              Contact
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <NavLink
              className="sign-in"
              to="/log-in"
              onClick={() => setShow(false)}
            >
              Sign in
            </NavLink>
          </li>
          <li className="header__item__close" onClick={toggleMenu}>
            <span>X</span>
          </li>
        </ul>
        <div className="header__right">
          <div className="header__search">
            <input
              className="header__search__input"
              type="text"
              placeholder="What are you looking for?"
            />
            <IoSearch />
          </div>
          <div className="header__heart">
            <Link to="#">
              <FaRegHeart />
            </Link>
            <Link to="#">
              <FiShoppingCart />
            </Link>
          </div>
          <button className="header__hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
