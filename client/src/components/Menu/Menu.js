import styles from "./Menu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenuState } from "../../redux/actions/menu-action";
import { useEffect } from "react";

export default function Menu(){
    const dispatch = useDispatch();
    const menuState = useSelector((state) => state.menu.menuState);

    const onGameStart = (e) => {
        dispatch(toggleMenuState())
        e.preventDefault()
    }

    return (
      <div style={{position: "absolute", width:"100%"}}>
        {menuState && (
          <div className={styles.menuContainer}>
            <div className={styles.menuScreen}>
              <h1 style={{ marginBottom: "4px" }}>moba.io</h1>
              <p>A competitive online experience.</p>
              <br></br>
              <p>Enter your name:</p>
              <form onSubmit={onGameStart}  className={styles.menuForm}>
                <input type="text" name="name" />
                <input type="submit" value="Play" />
              </form>
            </div>
          </div>
        )}
      </div>
    );
    
}