import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import {gameState, addPlayer, updatePosition, updateDirection} from "./state.js";



const app = express();
const port = 5000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  console.log(gameState);
  addPlayer(socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
    let indexRemove = gameState.players.find((player)=>player.id==socket.id);
    if (indexRemove != -1)
      gameState.players.splice(indexRemove, 1);
  });

  socket.on("update-direction", (dir)=>{
    let activePlayer = gameState.players.find((player)=>player.id==socket.id)
    updateDirection(activePlayer, dir);
  })
});

setInterval(() => {
  updatePosition();
  io.emit("game-update", gameState);
}, 50);


httpServer.listen(port);


