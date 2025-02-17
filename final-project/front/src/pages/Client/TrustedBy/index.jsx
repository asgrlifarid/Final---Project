import "./index.css";
import { useEffect, useRef } from "react";

export default function TrustedBy() {
  const logoContainerRef = useRef(null);

  useEffect(() => {
    const container = logoContainerRef.current;
    if (container) {
      let clone = container.innerHTML;
      container.innerHTML += clone;
    }
  }, []);

  return (
    <div className="trusted-by">
      
        <div className="containerr">
          <div className="text-container">
            <span className="trusted-text">We are trusted by:</span>
          </div>
          <div className="logo-wrapper">
            <div className="logo-container" ref={logoContainerRef}>
              <img
                src="https://escharts.com/img/partners/landing/tencent-games.svg"
                alt="Company 1"
                className="logo"
              />
              <img
                src="https://escharts.com/img/partners/landing/navi.svg"
                alt="Company 2"
                className="logo"
              />
              <img
                src="https://escharts.com/img/partners/landing/weplay.svg"
                alt="Company 3"
                className="logo"
              />
              <img
                src="https://escharts.com/img/partners/landing/krafton.svg"
                alt="Company 4"
                className="logo"
              />
              <img
                src="https://escharts.com/img/partners/landing/red-bull.png"
                alt="Company 5"
                className="logo"
              />
              <img
                src="https://escharts.com/img/partners/landing/team-liquid.svg"
                alt="Company 6"
                className="logo"
              />
              <img
                src="https://escharts.com/img/partners/landing/fnatic.svg"
                alt="Company 7"
                className="logo"
              />
              <img
                src="https://escharts.com/img/partners/landing/lg.svg"
                alt="Company 8"
                className="logo"
              />
            </div>
          </div>
         
        </div>
     
    </div>
  );
}
