import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message_history", (data) => {
      setChat(data);
    });

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off();
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const msgData = {
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", msgData);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <h2>Real-Time Chat</h2>

      <div className="chat-box">
        {chat.map((msg, i) => (
          <div key={i} className="chat-message">
            <span>{msg.text}</span>
            <small>{msg.time}</small>
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
