import styles from "./GameView.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { DIRECTIONS } from "../../redux/constants/userInput-types.js";

export default function GameView() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game.gameState);
  const dir = useSelector((state) => state.userInput.dir)
  let gameCanvas = useRef(null);

  useEffect(()=>{
      const canvas = gameCanvas.current;
      // console.log(dir)
      if (canvas) {
        const ctx = canvas.getContext("2d");
        let coordinates = gameState.players.map((player) => player.pos);
        let players = gameState.players;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        players.forEach((player, i) => {
          
          ctx.beginPath();
          ctx.arc(player.pos.x, player.pos.y, 50, 0, 2 * Math.PI); // 20 is the radius of the circle
          ctx.fillStyle = "blue";
          if (i == 1) ctx.fillStyle = "pink"; // Color of the circle
          if (i == 2) ctx.fillStyle = "red"; // Color of the circle
          if (i == 3) ctx.fillStyle = "green"; // Color of the circle
          ctx.fill();
          ctx.closePath();
        });
      }
    //   console.log(gameState)
  }, [gameState])
   

  useEffect(()=>{
    const canvas = gameCanvas.current;

    if (canvas) {
       window.addEventListener("resize", resizeCanvas, false);

       function resizeCanvas() {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
       }

       resizeCanvas();
    }

   
  },[])


  return (
    <div style={{width: "100%", height: "100%"}}>
      <canvas ref={gameCanvas} width="500px" height="500px"></canvas>
    </div>
  );
}
