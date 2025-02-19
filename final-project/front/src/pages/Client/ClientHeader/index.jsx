import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import "./index.css";

const ClientHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(
      storedUsername && storedUsername !== "null" ? storedUsername : null
    );
  }, []);

  // Menü açma-kapatma
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <header>
        <section id="header" className={menuOpen ? "nav-open" : ""}>
          <div className="logo">
            <img
              src="https://escharts.com/img/logos/esc-logo-white.svg"
              alt="Logo"
            />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
              <li>
                <Link to="/tournament">Tournaments</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/cookies">Cookies</Link>
              </li>
              <li>
                <Link to="/tos">Terms of Use</Link>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <Link to="/wishlist">
              <FaHeart />
            </Link>
            {username ? (
              <div className="user-info">
                <FaUser />
                <p>{username}</p>
              </div>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </div>
          <div className="new-menu-item" onClick={toggleMenu}>
            <FiMenu />
          </div>
        </section>
      </header>
    </div>
  );
};

export default ClientHeader;
