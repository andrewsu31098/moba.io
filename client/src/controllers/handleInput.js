
import { DIRECTIONS } from "../redux/constants/userInput-types";
import { updateUserDirection } from "../redux/actions/userInput-action";
import store from "../redux/store";
import { updateDirection } from "../utils/networking";

export default function handleInput(){
    document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        store.dispatch(updateUserDirection(DIRECTIONS.LEFT))
        updateDirection(store.getState().userInput.dir);
        console.log("LEFT")
        break;
      case "ArrowRight":
        store.dispatch(updateUserDirection(DIRECTIONS.RIGHT));
        updateDirection(store.getState().userInput.dir);
        console.log("RIGHTT");
        break;
      case "ArrowUp":
        store.dispatch(updateUserDirection(DIRECTIONS.UP));
        updateDirection(store.getState().userInput.dir);
        console.log("UP");
        break;
      case "ArrowDown":
        store.dispatch(updateUserDirection(DIRECTIONS.DOWN));
        updateDirection(store.getState().userInput.dir);
        console.log("DOWN");
        break;
      default:
        store.dispatch(updateUserDirection(DIRECTIONS.NONE));
        updateDirection(store.getState().userInput.dir);
    }
    });
}