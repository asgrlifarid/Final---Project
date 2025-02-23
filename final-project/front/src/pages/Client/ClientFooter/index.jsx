import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ClientFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="https://escharts.com/img/logos/esc-logo-white.svg"
            alt="Esports Charts Logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-section">
          <h3>Esports rankings:</h3>
          <ul>
            <li>
              <Link to="#">Top esports teams</Link>
            </li>
            <li>
              <Link to="#">Top esports players</Link>
            </li>
            <li>
              <Link to="#">Top female esports players</Link>
            </li>
            <li>
              <Link to="#">Top esports games</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>News categories:</h3>
          <ul>
            <li>
              <Link to="#">Esports news</Link>
            </li>
            <li>
              <Link to="#">Esports tournaments</Link>
            </li>
            <li>
              <Link to="#">Monthly insights</Link>
            </li>
            <li>
              <Link to="#">Esports teams</Link>
            </li>
            <li>
              <Link to="#">Mobile esports</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help & Feedback</h3>
          <Link href="/contact" className="contact-button">
            <p>Contact Us</p>
          </Link>
          <h4>Contributions</h4>
          <Link href="/submit" className="submit-button">
            Submit Event
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          Esports Charts is not affiliated with any third-party game, gamer, or
          gaming company. All trademarks displayed on the site are owned by
          third-parties and are used for informational purposes only.
        </p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/tos">Terms of Use</Link>
          <Link to="/cookies">Cookie Policy</Link>
          <div className="language-selector">
            <span>🌐</span>
            <select>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025, STREAMS CHARTS PO. All rights reserved</p>
          <span>🇺🇦</span>
          <p>Developed in Azerbaijan , Baku</p>
          <p>GMT/UTC +0</p>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;
