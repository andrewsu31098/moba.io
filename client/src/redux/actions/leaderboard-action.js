import { UPDATE_LEADERBOARD } from "../constants/leaderboard-types";

export function updateLeaderboard(gameState) {
  return {
    type: UPDATE_LEADERBOARD,
    gameState: gameState
  };
}
