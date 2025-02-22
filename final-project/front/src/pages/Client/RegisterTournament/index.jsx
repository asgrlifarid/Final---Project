import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterTournamentMutation } from "../../../redux/services/tournamentApi";
import Swal from "sweetalert2";
import "./index.css";

const RegisterTournament = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [registerTournament] = useRegisterTournamentMutation();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const username = localStorage.getItem("username"); // Kullanıcı adı
    const tournamentId = localStorage.getItem("tournamentId"); // Turnuva ID'si

    try {
      const response = await registerTournament({
        username,
        password,
        tournamentId,
      }).unwrap();

      Swal.fire({
        title: "Registration Successful",
        text: `You have successfully registered for the ${response.tournament.title} tournament.`,
        icon: "success",
      });
      navigate("/success");
    } catch (error) {
      Swal.fire({
        title: "Registration Failed",
        text: error.message || "An error occurred while registering.",
        icon: "error",
      });
    }
  };

  return (
    <div className="register-tournament">
      <h2>Register for Tournament</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterTournament;
