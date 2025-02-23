import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Cookies from "js-cookie";

import "./index.css";

const ClientHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const token = Cookies.get("token");

    if (storedUsername && token) {
      setUsername(storedUsername);
    } else {
      setUsername(null);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    
    Cookies.remove("token");
    localStorage.removeItem("username");
    setUsername(null);
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
                <Link to="/">Anasayfa</Link>
              </li>
              <li>
                <Link to="/privacy">Gizlilik</Link>
              </li>
              <li>
                <Link to="/cookies">Çerezler</Link>
              </li>
              <li>
                <Link to="/tos">Kullanım Şartları</Link>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <button>
              <Link to="/wishlist">
                <FaHeart />
              </Link>
            </button>
            {username ? (
              <div className="user-info" onClick={toggleDropdown}>
                <p>{username}</p>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <button onClick={handleLogout}>Log out</button>
                  </div>
                )}
              </div>
            ) : (
              <button>
                <Link to="/login">Log In</Link>
              </button>
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
