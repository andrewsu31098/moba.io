import { UPDATE_GAME_STATE } from "../constants/gameState-types";

const initialState = {
  gameState: {players:[]},
};

export default function gameStateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState,
      };
    default:
      return state;
  }
}
