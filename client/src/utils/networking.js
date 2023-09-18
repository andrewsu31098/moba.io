import { io } from "socket.io-client";
import { updateLeaderboard } from "../redux/actions/leaderboard-action";
import { UPDATE_LEADERBOARD } from "../redux/constants/leaderboard-types";
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
      
      store.dispatch({type:UPDATE_LEADERBOARD, gameState: gameState})
        // store.dispatch(updateLeaderboard(gameState));
    })
  });


