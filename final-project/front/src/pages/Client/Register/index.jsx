import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";
import { useRegUserMutation } from "../../../redux/services/authApi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [registerUser] = useRegUserMutation();
  const navigate = useNavigate();

  // Kullanıcı zaten giriş yapmışsa /register sayfasına gitmesini engelle
  // useEffect(() => {
  //   if (Cookies.get("token") || localStorage.getItem("token")) {
  //     navigate("/profile"); 
  //   }
  // }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasError(false);

    if (password !== confirmPassword) {
      setHasError(true);
      return;
    }

    try {
      await registerUser({ email, username, password }).unwrap();
      navigate("/login"); // Başarılı kayıt sonrası login sayfasına yönlendir
    } catch (error) {
      setHasError(true);
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img
            src="https://t4.ftcdn.net/jpg/02/11/54/33/360_F_211543376_kv7x0SwdITkWbqajGzglhcvZV25AsPsS.jpg"
            alt="Spotify"
          />
        </div>

        <h1>
          Create a <span className="gameover">GameOver</span> Account
        </h1>

        <div className="divider">
          <span>or</span>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={hasError ? "error" : ""}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              id="name"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="remember-me">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>I agree to the terms and
              conditions
            </label>
          </div>

          {hasError && (
            <p className="error-message">Error: Please check your inputs</p>
          )}

          <button type="submit" className="login-button">
            Sign Up
          </button>

          <div className="forgot-password">
            <Link to="/login">Already have an account? Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
