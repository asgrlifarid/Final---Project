import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 

import "./index.css";
import { useLoginUserMutation } from "../../../redux/services/authApi";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasError(false); 

    try {
      const response = await loginUser({ email, password }).unwrap();
      if (response.token) {
        Cookies.set("token", response.token, { expires: 1 });
        navigate("/");
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
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
            <label htmlFor="email">Email or Username</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Username"
              className={hasError ? "error" : ""}
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

          <div className="remember-me">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>

          {hasError && (
            <p className="error-message">Invalid email or password</p>
          )}

          <button type="submit" className="login-button">
            Log In
          </button>

          <div className="forgot-password">
            <a href="#">Forgot your password?</a> <br />
            <a href="/register">Don't have an account? Sign up!</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
