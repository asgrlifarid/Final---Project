import React from "react";
import TrustedBy from "../TrustedBy";
import "./index.css";
import Games from "../Games";

const Home = () => {
  const scrollToGames = () => {
    document.getElementById("selling").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section id="hero">
        <div className="container">
          <div className="hero">
            <div className="content">
              <h1>Let's Join Tournaments </h1>
              <p>
                If you wanna play hardest and most attractive match ? <br /> You
                are located best place. <br /> Only click the button and join
                adventure with us
              </p>
              <button onClick={scrollToGames}>Watch Tournaments</button>
            </div>
          </div>
        </div>
      </section>
      <section id="selling">
        <div className="shop-section">
          <h2>Welcome Our Links !</h2>
          <h4>You can get all  games's links there !</h4>
          <Games />
        </div>
      </section>
      <section>
        <TrustedBy />
      </section>
    </div>
  );
};

export default Home;
