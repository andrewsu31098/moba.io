import { combineReducers } from "redux";
import menuReducer from "./menu-reducer";
import gameStateReducer from "./gameState-reducer";
import userInputReducer from "./userInput-reducer";

const appReducer = combineReducers({
  menu: menuReducer,
  game: gameStateReducer,
  userInput: userInputReducer
});

export default appReducer;