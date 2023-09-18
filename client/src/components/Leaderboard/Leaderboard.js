import { useEffect } from "react";
import styles from "./Leaderboard.module.css"
import {useSelector} from "react-redux"

export default function Leaderboard(){
    let leaderboard = useSelector((state) => state.leaderboard.leaderboard)
    // console.log(leaderboard)
    let example  = [1,2,3]
    return (
      <div className={styles.container}>
        <h3>Leaderboard</h3>
        <table>
          {leaderboard ? leaderboard.map((entry)=><tr>{entry}</tr>) : null}
        </table>
      </div>
    );
}