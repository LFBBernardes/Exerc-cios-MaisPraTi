import React from "react";
import "./Header.css";
import logo from "./internacional-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Sport Club Internacional" className="logo" />
      </div>
      <h1 className="title">Sport Club Internacional</h1>
      <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#associe-se" className="nav-link">
              Associe-se
            </a>
          </li>
          <li className="nav-item">
            <a href="#noticias" className="nav-link">
              Notícias
            </a>
          </li>
          <li className="nav-item">
            <a href="#loja" className="nav-link">
              Loja
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
