import { useEffect } from "react";
import styles from "./Leaderboard.module.css"
import {useSelector} from "react-redux"

export default function Leaderboard(){
    let leaderboard = useSelector((state) => state.leaderboard.leaderboard)
    let gameState = useSelector((state)=>state.game.gameState);
    // console.log(leaderboard)
    let example  = [1,2,3]
    return (
      <div className={styles.container}>
        <h3>Leaderboard</h3>
        <table>
          {gameState ? gameState.players.map((player)=><tr>{player.id}</tr>) : null}
        </table>
      </div>
    );
}