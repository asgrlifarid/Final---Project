import React, { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux/services/authApi";
import "./index.css";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    // Email ve şifre boş olmamalı
    if (!email.trim()) {
      setEmailError("Email alanı boş olamaz");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Şifre alanı boş olamaz");
      return;
    }

    try {
      // Login API çağrısı
      const response = await loginUser({ email, password }).unwrap();
      const bannedUntil = response.user?.bannedUntil
        ? new Date(response.user.bannedUntil)
        : null;
      const now = new Date();

      // Kullanıcı yasaklanmışsa
      if (bannedUntil && bannedUntil > now) {
        Swal.fire({
          title: "Erişim Engellendi",
          text: `Hesabınız ${bannedUntil.toLocaleString()} tarihine kadar yasaklanmış. Daha fazla bilgi için destek ile iletişime geçin.`,
          icon: "error",
        });
        return;
      }

      
      if (response.token && response.user?.role === "admin") {
      
        Cookies.set("token", response.token, { expires: 1 });
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user?.username || "Admin");

        navigate("/admindashboard"); // Admin paneline yönlendir
      } else if (response.token && response.user?.role !== "admin") {
        // Eğer rol admin değilse, hata mesajı göster
        setGeneralError("Admin yetkisine sahip değilsiniz");
      } else {
        setGeneralError("Geçersiz email veya şifre");
      }
    } catch (error) {
      setGeneralError("Geçersiz email veya şifre");
      console.error("Login başarısız", error);
    }
  };

  return (
    <div className="adminlogin-container">
      <div className="adminlogin-card">
        <h1>Admin Giriş</h1>

        <form className="adminlogin-form" onSubmit={handleSubmit}>
          <div className="adminlogin-form-group">
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

          <div className="adminlogin-form-group">
            <label htmlFor="password">Şifre</label>
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={passwordError ? "error" : ""}
                placeholder="Şifre"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="adminlogin-password-toggle"
              >
                {showPassword ? "Gizle" : "Göster"}
              </button>
            </div>
          </div>

          {generalError && (
            <p className="adminlogin-error-message">{generalError}</p>
          )}

          <button type="submit" className="adminlogin-button">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
