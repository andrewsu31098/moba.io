import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import Phaser from "phaser";

const PhaserGame = () => {
  const gameRef = useRef(null);
  const gameState = useSelector((state) => state.game.gameState);
  // console.log(`Here's what we retrieved from redux`)
  // console.log(gameState.players)
  const playerMap = {example:12345};

  useEffect(() => {

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
    }
    function create() {
      let players = store.getState().game.gameState.players
      let x = store.getState();
      console.log(x);

      players.forEach((player, i ) => {
        const newPlayer = this.add.circle(player.pos.x*i, player.pos.y*i, 20, 0xffffff);
        playerMap[player.id] = newPlayer;
      });
      console.log("Here's what our playerMap turned into");
      console.log(playerMap);
    }

    function update() {
      let players = store.getState().game.gameState.players;

      players.forEach((player, i) => {
        let foundPlayer = playerMap[player.id]
        if (foundPlayer){
          foundPlayer.setX(player.pos.x)
          foundPlayer.setY(player.pos.y)
        }
        else {
          console.log("Created a new one");
          let color = (i==0) ? 0xff0000 : (i==1) ? 0x00ff00 : 0x0000ff;

           const newPlayer = this.add.circle(
             player.pos.x * i,
             player.pos.y * i,
             20,
             color
           );
           playerMap[player.id] = newPlayer;
        }
      });
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef}></div>;
};

export default PhaserGame;
