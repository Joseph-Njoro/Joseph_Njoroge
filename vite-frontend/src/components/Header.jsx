import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import custom styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-title">
          Joseph Njoroge
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;