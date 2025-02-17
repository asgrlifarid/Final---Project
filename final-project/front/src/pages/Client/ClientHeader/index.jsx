import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import "./index.css";

const ClientHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the menu open or closed
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
                <Link to="/tos">Teams of Use</Link>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <button onClick={() => navigate("/profile")}>
              <FaUser />
            </button>
            <button onClick={() => navigate("/wishlist")}>
              <FaHeart />
            </button>
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
