import { useEffect } from "react";
import styles from "./Leaderboard.module.css"
import {useSelector} from "react-redux"

export default function Leaderboard(){
    let gameState = useSelector((state)=>state.game.gameState);
    return (
      <div className={styles.container}>
        <h3>Leaderboard</h3>
        <table>
          {gameState ? gameState.players.map((player)=><tr>{player.id}</tr>) : null}
        </table>
      </div>
    );
}