import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/cat-logo.jpg';

import './Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleBurgerMenuToggle = (event) => {
    event.preventDefault();
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} className="nav-logo" alt="Cats App" />
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${isDrawerOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleBurgerMenuToggle}
          href="/"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isDrawerOpen ? 'is-active' : ''}`}>
        <ul className="navbar-start">
          <li className="navbar-item" onClick={() => setIsDrawerOpen((prevState) => !prevState)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-item" onClick={() => setIsDrawerOpen((prevState) => !prevState)}>
            <NavLink to="/breed">Breed</NavLink>
          </li>
          <li className="navbar-item" onClick={() => setIsDrawerOpen((prevState) => !prevState)}>
            <NavLink to="search">Search</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
