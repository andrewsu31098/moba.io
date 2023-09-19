import { io } from "socket.io-client";
import { updateGameState } from "../redux/actions/gameState-action";

import store from "../redux/store";

const socket = io(":5000");

const connectedPromise = new Promise((resolve) => {
  socket.on("connect", () => {
    resolve()
  });
});


export const connect = (onGameOver) =>
  connectedPromise.then(() => {
    // Register callbacks
    // Your Code Here
    //When the user switches tabs this might activate. You 
    //Might want to add some functionality to "reconnect".
    socket.on("disconnect", () => {
      console.log("Disconnected"); 
    });

    socket.on("game-update", (gameState) => {
      
      store.dispatch(updateGameState(gameState))
        // store.dispatch(updateLeaderboard(gameState));
    })
  });


