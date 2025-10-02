import React from 'react';
import '../App.css';

export default function TopNavBar() {
  return (
    <nav className="top-navbar">
      <div className="nav-title">Employee Center</div>
      <div className="nav-main">
        <input className="nav-search" type="text" placeholder="Search" />
      </div>
      <div className="nav-right">
        <span className="nav-link">Self-Service Password Reset</span>
        <span className="nav-link">My Assets</span>
        <span className="nav-user">PK</span>
        <span className="nav-icon" title="Cart">🛒<span className="nav-badge">1</span></span>
        <span className="nav-icon" title="Tours">🎫</span>
      </div>
    </nav>
  );
}
