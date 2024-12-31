import React, { useState } from "react";

import './Sidebar.css'; // Use relative path to the correct CSS file location


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to track if sidebar is open

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the open/close state
  };

  return (
    <aside className={`Sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul className="NavLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#deployments">Deployments</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </nav>
      <div className="MicrophoneIcon">
        <img src="./assets/microphone-icon.png" alt="Microphone Icon" />
      </div>

      {/* Button to toggle the sidebar visibility */}
      <button className="SidebarToggle" onClick={toggleSidebar}>
        {isOpen ? "Close Sidebar" : "Open Sidebar"} {/* Toggle text */}
      </button>
    </aside>
  );
}

export default Sidebar;
