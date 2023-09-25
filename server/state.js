import { DIRECTIONS } from "./constants/userInput-types.js";

// Maintain a gamestate
export let gameState = {players: []};

export let addPlayer = (playerId) => {
    let player = { id: playerId, pos: { x: 50, y: 50 }, dir: DIRECTIONS.NONE };
    gameState.players.push(player);
}

export const updateDirection = (player, direction) => {
    player.dir = direction
} 

export let updatePosition = () => {
    gameState.players.forEach((player)=>{
        switch (player.dir) {
          case DIRECTIONS.UP:
            player.pos.y -= 8;
            break;
          case DIRECTIONS.DOWN:
            player.pos.y += 8;
            break;
          case DIRECTIONS.LEFT:
            player.pos.x -= 8;
            break;
          case DIRECTIONS.RIGHT:
            player.pos.x += 8;
            break;
        }
    })
}
