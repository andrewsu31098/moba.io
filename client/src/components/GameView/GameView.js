import styles from "./GameView.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

export default function GameView() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game.gameState);
  let gameCanvas = useRef(null);

  useEffect(()=>{
      const canvas = gameCanvas.current;

      if (canvas) {
        const ctx = canvas.getContext("2d");
        let coordinates = gameState.players.map((player) => player.pos);
        coordinates.forEach((coord, i) => {
          ctx.beginPath();
          ctx.arc(coord.x, coord.y, 10, 0, 2 * Math.PI); // 20 is the radius of the circle
          if (i == 0) ctx.fillStyle = "blue"; // Color of the circle
          if (i == 1) ctx.fillStyle = "red"; // Color of the circle
          if (i == 2) ctx.fillStyle = "green"; // Color of the circle
          ctx.fill();
          ctx.closePath();
        });
      }
    //   console.log(gameState)
  }, [gameState])
   
  return (
    <div>
      <canvas ref={gameCanvas} width="500px" height="500px"></canvas>
    </div>
  );
}
