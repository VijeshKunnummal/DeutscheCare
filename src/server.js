const express = require('express');
const app = express();
const PORT = 5000;
//New imports
const http = require('http').Server(app);
const cors = require('cors');


const socketIO = require('socket.io')(http, {
    cors: {
      origin: "https://effective-space-fortnight-v6jj9vqv449hw7pr-3000.app.github.dev",
      // credentials: true
    }
});

app.use(cors({
    origin: "https://effective-space-fortnight-v6jj9vqv449hw7pr-3000.app.github.dev"
  }));

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log("A user disconnected");
  });
});

let users = [];

socketIO.on('connection', (socket) => {
  console.log(`${socket.id} user just connected!`);
  socket.on('message', (data) => {
    console.log("1",data)
    socketIO.emit('messageResponse', data);
    console.log("1",data)
  });
  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    users.push(data);
    socketIO.emit('newUserResponse', users);
  });
  socket.on('disconnect', () => {
     console.log("A user disconnected");
     users = users.filter((user) => user.socketID !== socket.id);
     socketIO.emit('newUserResponse', users);
     socket.disconnect();
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});