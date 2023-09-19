import { UPDATE_GAME_STATE } from "../constants/gameState-types";

export function updateGameState(state){
    return {
        type: UPDATE_GAME_STATE,
        gameState: state,
    }
}