// ChatWindow.js
import React, { useState } from "react";
import "../styles/ChatWindow.css";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="ChatWindow">
      <div className="Messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`Message ${msg.sender === "user" ? "UserMessage" : "BotMessage"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="InputArea">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
