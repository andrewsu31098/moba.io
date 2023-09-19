import { UPDATE_LEADERBOARD } from "../constants/leaderboard-types";

const initialState = {
  leaderboard: [],
};

export default function leaderboardReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LEADERBOARD:
      
      return {
        ...state,
        leaderboard: action.gameState.players,
      };
    default:
      return state;
  }
}
