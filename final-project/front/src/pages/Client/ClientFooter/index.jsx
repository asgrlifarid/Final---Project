import React from "react";
import "./index.css";

const ClientFooter = () => {
  return (
    <footer className="footer">
      {/* <div className="trusted-by">
         <span>We are trusted by:</span>
         <div className="partner-logos">
           {[ 
             "webedia", 
             "blast", 
             "og", 
             "weplay", 
             "moonton", 
             "navi", 
             "tencent", 
           ].map((partner) => (
             <img 
               key={partner} 
               src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2xYUJjut40K4zyKIATdoEcS8RxWkqq.png`} 
               alt={`${partner} logo`} 
             />
           ))}
         </div>
       </div> */}

      <div className="footer-content">
        <div className="footer-section">
          <img
            src="https://escharts.com/img/logos/esc-logo-white.svg"
            alt="Esports Charts Logo"
            className="footer-logo"
          />
          <div className="social-icons">
            <a href="#" className="social-icon">
              X
            </a>
            <a href="#" className="social-icon">
              F
            </a>
            <a href="#" className="social-icon">
              I
            </a>
            <a href="#" className="social-icon">
              D
            </a>
            <a href="#" className="social-icon">
              L
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Esports rankings:</h3>
          <ul>
            <li>
              <a href="#">Top esports teams</a>
            </li>
            <li>
              <a href="#">Top esports players</a>
            </li>
            <li>
              <a href="#">Top female esports players</a>
            </li>
            <li>
              <a href="#">Top esports games</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>News categories:</h3>
          <ul>
            <li>
              <a href="#">Esports news</a>
            </li>
            <li>
              <a href="#">Esports tournaments</a>
            </li>
            <li>
              <a href="#">Monthly insights</a>
            </li>
            <li>
              <a href="#">Esports teams</a>
            </li>
            <li>
              <a href="#">Mobile esports</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help & Feedback</h3>
          <a href="/contact" className="contact-button">
            <p>Contact Us</p>
          </a>
          <h4>Contributions</h4>
          <a href="/submit" className="submit-button">
            Submit Event
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          Esports Charts is not affiliated with any third-party game, gamer, or
          gaming company. All trademarks displayed on the site are owned by
          third-parties and are used for informational purposes only.
        </p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/tos">Terms of Use</a>
          <a href="/cookies">Cookie Policy</a>
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
