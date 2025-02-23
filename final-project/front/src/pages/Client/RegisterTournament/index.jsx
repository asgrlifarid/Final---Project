import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./index.css";
import {
  useEditTournamentsMutation,
  useGetTournamentByIdQuery,
} from "../../../redux/services/tournamentApi";

const RegisterTournament = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { tournamentId } = useParams();
  const [registerTournament] = useEditTournamentsMutation();
  const { data, isError, isLoading } = useGetTournamentByIdQuery(tournamentId);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (
      data?.data?.playersName?.some((player) => player.username === username)
    ) {
      setIsRegistered(true);
    }
  }, [data]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");

    if (!username) {
      Swal.fire({
        title: "Error",
        text: "You must be logged in to register for the tournament.",
        icon: "error",
      });
      return;
    }

    try {
      const updatedPlayers = [
        ...data?.data?.playersName,
        { username, password, tournamentId },
      ];
      const response = await registerTournament({
        playersName: updatedPlayers,
        id: tournamentId,
      }).unwrap();

      Swal.fire({
        title: "Registration Successful",
        text: "You have successfully registered for the tournament.",
        icon: "success",
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Registration Failed",
        text: error.data?.message || "An error occurred while registering.",
        icon: "error",
      });
    }
  };

  return (
    <div className="register-tournament-container">
      <h2 className="register-tournament-title">Register for Tournament</h2>
      {isRegistered ? (
        <p className="already-registered">
          You are already registered for this tournament.
        </p>
      ) : (
        <form
          onSubmit={handleRegisterSubmit}
          className="register-tournament-form"
        >
          <div className="input-group">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="password-field"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className="register-submit-btn">
            Register
          </button>
        </form>
      )}
      <button
        type="button"
        className="back-home-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default RegisterTournament;
