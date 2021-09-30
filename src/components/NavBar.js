import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="navbar">
    <h1>Math Enthusing</h1>
    <ul className="nav-links">
      <NavLink to="/" activeClassName="active-link" exact>
        Home
      </NavLink>
      <NavLink to="/Calculator" activeClassName="active-link" exact>
        Calculator
      </NavLink>
      <NavLink to="/Quote" activeClassName="active-link" exact>Quote</NavLink>
    </ul>
  </header>
);

export default NavBar;
