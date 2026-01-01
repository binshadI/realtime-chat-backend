Socket.IO 1:1 Chat Backend (Postman Tested)

This repository contains a Socket.IO backend built with Node.js and Express that supports 1:1 real-time chat using rooms.

✅ No frontend required
✅ Fully testable using Postman (Socket.IO client)

📦 Tech Stack

Node.js

Express.js

Socket.IO

Postman (Socket.IO)

📁 Getting Started
1️⃣ Clone the repository
git clone <your-repo-url>
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Start the server
node index.js


or

nodemon index.js


Server will run on:

http://localhost:3000

🧪 Testing Using Postman (Step-by-Step)
Open TWO Socket.IO tabs in Postman

These act as User A and User B

🔌 Connect to Socket Server

Protocol: Socket.IO

URL:

http://localhost:3000


Click Connect in both tabs.

📟 Server console output:

this user connected <socket-id>

🚪 Join a Chat Room

Both users must join the same room.

Event
join_room

Data (JSON)
{
  "roomId": "chat"
}


📟 Server console:

<socket-id> joined the chat

💬 Send Message (User A → User B)
Event
room_msg

Data (JSON)
{
  "roomId": "chat",
  "msg": "Hello from User A"
}


📟 Server console:

room chat : Hello from User A

📥 Receive Message (User B)
Listen to Event
recive_private_msg


📨 Incoming message:

{
  "from": "<socket-id>",
  "msg": "Hello from User A"
}


✅ Message received in real-time.
