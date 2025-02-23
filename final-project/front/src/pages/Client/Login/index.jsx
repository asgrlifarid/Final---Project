import React, { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate
import "./index.css";
import { useLoginUserMutation } from "../../../redux/services/authApi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    if (!email.trim()) {
      setEmailError("Email field cannot be empty");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password field cannot be empty");
      return;
    }

    try {
      const response = await loginUser({ email, username, password }).unwrap();
      console.log("Login Response:", response);

      const bannedUntil = response.user?.bannedUntil
        ? new Date(response.user.bannedUntil)
        : null;
      const now = new Date();

      if (bannedUntil && bannedUntil > now) {
        Swal.fire({
          title: "Access Denied",
          text: `Your account is banned until ${bannedUntil.toLocaleString()}. Contact support for more info.`,
          icon: "error",
        });
        return; // Token not saved!
      }

      if (response.token) {
        Cookies.set("token", response.token, { expires: 1 });
        localStorage.setItem("token", response.token);
        localStorage.setItem(
          "username",
          response.user?.username || response.user?.email || "Guest"
        );

        // Redirect to the dashboard page
        navigate("/"); // Use navigate to redirect
      } else {
        setGeneralError("Invalid email or password");
      }
    } catch (error) {
      setGeneralError("Invalid email or password");
      console.error("Login failed", error);
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
          Log in to <span className="gameover">GameOver</span>
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
              className={emailError ? "error" : ""}
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
                className={passwordError ? "error" : ""}
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

          <div className="remember-me">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>

          {generalError && <p className="error-message">{generalError}</p>}

          <button type="submit" className="login-button">
            Log In
          </button>

          <div className="forgot-password">
            <nav>
              <ul>
                <li>
                  <Link to="/register">Don't have an account? Sign up!</Link>
                </li>
              </ul>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
