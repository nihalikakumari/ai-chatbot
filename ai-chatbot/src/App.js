// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="SidebarContainer">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
