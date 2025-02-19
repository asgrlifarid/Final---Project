import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrustedBy from "../TrustedBy";
import "./index.css";
import Games from "../Games";

const Home = () => {
  const [name, setUsername] = useState("Guest");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log("Stored Username in Home component:", storedUsername); // Debugging
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const scrollToGames = () => {
    document.getElementById("selling").scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (path) => {
    // Eğer kullanıcı giriş yaptıysa ve login sayfasına gitmek istiyorsa
    if (path === "/login") {
      if (name !== "Guest") {
        // Kullanıcı giriş yaptıysa login sayfasına yönlendirme, /not-found'a yönlendir
        navigate("/not-found");
      } else {
        // Kullanıcı giriş yapmadıysa login sayfasına yönlendir
        navigate("/login");
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div>
      <section id="hero">
        <div className="container">
          <div className="hero">
            <div className="content">
              <h1>Let's Join Tournaments</h1>
              <p>
                If you wanna play hardest and most attractive match? <br /> You
                are located at the best place. <br /> Only click the button and
                join the adventure with us.
              </p>
              <button onClick={scrollToGames}>Watch Tournaments</button>
            </div>
          </div>
        </div>
      </section>

      <section id="selling">
        <div className="shop-section">
          <h2>Welcome to Our Links!</h2>
          <h4>You can get all game links here!</h4>
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
