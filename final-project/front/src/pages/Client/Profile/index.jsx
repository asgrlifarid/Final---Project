"use client";

// import { ChevronRight, LogOut } from "lucide-react";
import "./index.css";

export default function Profile() {
  return (
    <div className="pprrofile">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://cdn.vectorstock.com/i/500p/85/54/gamer-with-headphones-and-game-icon-vector-53898554.jpg"
            alt="Profile QR Code"
            className="profile-qr"
          />
          <div className="profile-info">
            <h1>Farid</h1>
            <span>wakabayashii1</span>
          </div>
        </div>

        <div className="chat-banner">
          <p>Chat, Snap and video call your friends</p>
          <button className="chat-button">Chat Now</button>
        </div>

        <nav className="menu-list">
          <a href="#" className="menu-item">
            <span>My Data</span>
          </a>
          <a href="#" className="menu-item">
            <span>My Snapcode</span>
          </a>
          <a href="#" className="menu-item">
            <span>Contact Management</span>
          </a>
          <a href="#" className="menu-item">
            <span>Ads Manager</span>
          </a>
          <a href="#" className="menu-item">
            <span>Manage Apps</span>
          </a>
          <a href="#" className="menu-item">
            <span>Session Management</span>
          </a>
          <a href="#" className="menu-item">
            <span>Change my password</span>
          </a>
          {/* <a href="#" className="menu-item">
          <span>Delete my account</span>
          <ChevronRight />
        </a> */}
          {/* <a href="#" className="menu-item logout">
          <span>Logout</span>
          <LogOut />
        </a> */}
        </nav>
      </div>
    </div>
  );
}
