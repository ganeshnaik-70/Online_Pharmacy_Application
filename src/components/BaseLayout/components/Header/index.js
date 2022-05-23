//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">Get Your Medicine Here!!!</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/tablets">Tablets</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/sirups">Sirups</NavLink></p>
    </div>
  </div>
)

export default Header;
