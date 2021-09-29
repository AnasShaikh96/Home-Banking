import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "16px",
          letterSpacing: "3px",
        }}
      >
        <span style={{ color: "#3880e0", fontWeight: "bold" }}>HOME</span>
        <span style={{ color: "#585858", fontWeight: "100" }}>BANKING</span>
      </div>
      <div className="nav-display">
        <p>My Accounts</p>
        <p>Notifications</p>
        <p>Conversations</p>
      </div>
    </nav>
  );
}
