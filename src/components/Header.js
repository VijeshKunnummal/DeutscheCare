import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import '../style/Header.css';

export const Header = () => {
  return (
    <header>
      <span className="logo">
      <img src={logo} alt='log'/>
        <span>DeutscheCare+ Planner</span>
      </span>
        <nav className="top-nav">
          <Link to="/home" className="nav-button"> Home </Link>
          <Link to="/profile" className="nav-button"> Profile </Link>
        </nav>
    </header>
  );
};
