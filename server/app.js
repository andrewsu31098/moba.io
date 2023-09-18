import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const port = 5000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  console.log(socket.id);
  gameState.push(socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
    gameState = gameState.filter((id) => id != socket.id);
  });
});




// Maintain a gamestate
let gameState = []

setInterval(() => {
  io.emit("game-update", gameState);
}, 50);


httpServer.listen(port);


