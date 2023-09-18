import { combineReducers } from "redux";
import menuReducer from "./menu-reducer";
import leaderboardReducer from "./leaderboard-reducer";

const appReducer = combineReducers({
  menu: menuReducer,
  leaderboard: leaderboardReducer,
});

export default appReducer;