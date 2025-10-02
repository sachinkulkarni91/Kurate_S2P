import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="header">
        <div className="top-left">Employee Center</div>
        <div className="top-center">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="top-right">
          <a href="#">Self-Service Password Reset</a>
          <a href="#">My Assets</a>
          <a href="#" title="Tours"><i className="fas fa-question-circle"></i></a>
          <div className="user-icon">PK</div>
          <a href="#" title="Notifications"><i className="fas fa-bell"></i></a>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <a href="#">All Applications</a>
        <a href="#">Identity & Access</a>
        <a href="#">Security</a>
        <a href="#">Computer & Peripherals</a>
        <a href="#">Office 365</a>
        <a href="#">Cloud</a>
        <a href="#">Server, Storage & Network</a>
        <a href="#">Procure-to-Pay</a>
        <a href="#">Home</a>
      </div>
    </>
  );
}
