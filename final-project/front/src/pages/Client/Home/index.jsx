import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import TrustedBy from "../TrustedBy";
import "./index.css";
import Games from "../Games";
import Tournament from "../Tournament";
import Replay from "../Replay";

const Home = () => {
  const [name, setUsername] = useState("Guest");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log("Stored Username in Home component:", storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const scrollToTournament = () => {
    document
      .getElementById("tournament")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (path) => {
    console.log("Button clicked, navigating to:", path);

    if (name === "Guest") {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in to access this page.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      scrollToTournament();
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
              <button onClick={() => handleNavigation("/login")}>
                Watch Tournaments
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="replay">
        <div className="replay">
          <Replay />
        </div>
      </section>

      <section id="tournament">
        <div className="tournament-section">
          <Tournament />
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
