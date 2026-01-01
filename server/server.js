const express = require('express');

const { createServer } = require('node:http');
const { Server } = require("socket.io")

const app = express();
const server = new createServer(app);
const io = new Server(server);


io.on("connection", (socket) => {
    console.log("this user connected", socket.id)


    //private chatroom 
    socket.on('join_room',(data)=>{
        const roomId = data.roomId;
        socket.join(roomId);
        console.log(`${socket.id} joined the ${roomId}`);
    });

    //send to anyone in the room  
    socket.on('room_msg',(data)=>{
        const {roomId,msg} = data;
        console.log(`room ${roomId} : ${msg}`);
        
        io.to(roomId).emit('recive_private_msg',{
            from : socket.id,
            msg
        });
    });

    //disconnetion
    socket.on('disconnect', () => {
        console.log("this user disconnected", socket.id)
    })
});

server.listen(3000, () => {
    console.log("server is running")
})

