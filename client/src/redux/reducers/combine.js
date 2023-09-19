import { combineReducers } from "redux";
import menuReducer from "./menu-reducer";
import leaderboardReducer from "./leaderboard-reducer";
import gameStateReducer from "./gameState-reducer";

const appReducer = combineReducers({
  menu: menuReducer,
  leaderboard: leaderboardReducer,
  game: gameStateReducer,
});

export default appReducer;