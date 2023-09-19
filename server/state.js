// Maintain a gamestate
export let gameState = {players: []};

export let addPlayer = (playerId) => {

    let player = { id: playerId, pos: { x: 50, y: 50 } };
    gameState.players.push(player);
}

export let randomMovement = () => {
    gameState.players.forEach((player)=>{
        var start = Date.now();
        player.pos.x += 0.5
        player.pos.y += 0.5

    })
}
