
# 💬 Real-Time Chat Application (WebSockets)

A **real-time chat application** built using **React.js** on the frontend and **Node.js with Socket.IO** on the backend.  
The application enables users to send and receive messages instantly using **WebSocket-based communication**, with support for **message history** and a **responsive user interface**.

This project demonstrates real-time data flow, client–server communication, and modern frontend–backend integration.

---
## screenshots
![image](chartapp1.png)
## 🚀 Features

- Real-time messaging using WebSockets
- Message history loaded on new connection
- Responsive chat interface
- Persistent socket connection (no page reloads)
- Simple and clean UI
- Frontend–backend separation

---

## 🛠️ Tech Stack

### Frontend (Client)

- React.js
- Vite
- socket.io-client
- HTML5
- CSS3

### Backend (Server)

- Node.js
- Express.js
- Socket.IO
- CORS

---

## 📂 Project Structure
```

realtime-chat/
│
├── server/
│ ├── index.js  
│ ├── package.json
│
├── client/
│ ├── src/
│ │ ├── App.jsx  
│ │ ├── main.jsx  
│ │ ├── index.css  
│ ├── index.html
│ ├── package.json
├── app.png
└── README.md

````

---

## ⚙️ How It Works

1. The backend creates a WebSocket server using Socket.IO.
2. When a user connects, previous chat messages are sent as message history.
3. Users send messages from the React UI.
4. Messages are emitted to the server via WebSocket events.
5. The server broadcasts messages to all connected clients in real time.
6. The UI updates instantly without page refresh.

---

## 🔧 Installation & Setup

### 1 Backend Setup

```bash
cd server
npm install
node index.js
````

Server will start at:

```
http://localhost:3000
```

---

### 2️ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

Open **two tabs** to test real-time messaging.

---

## 📌 Learning Outcomes

- Understanding WebSocket communication
- Real-time client–server interaction
- React state management with live data
- Event-based programming using Socket.IO
- Frontend and backend integration
- Debugging network-based applications

---

## 👨‍💻 Author

**Harshal Uikey**
Frontend Developer | React & JavaScript

