
import { DIRECTIONS } from "../redux/constants/userInput-types";
import { updateUserDirection } from "../redux/actions/userInput-action";
import store from "../redux/store";
import { updateDirection } from "../utils/networking";

export default function handleInput(){
    document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        store.dispatch(updateUserDirection({[DIRECTIONS.LEFT]: true}))
        updateDirection(store.getState().userInput.dir);
        console.log(store.getState());
        break;
      case "ArrowRight":
        store.dispatch(updateUserDirection({ [DIRECTIONS.RIGHT]: true }));
        updateDirection(store.getState().userInput.dir);
        console.log(store.getState());
        break;
      case "ArrowUp":
        store.dispatch(updateUserDirection({ [DIRECTIONS.UP]: true }));
        updateDirection(store.getState().userInput.dir);
        console.log(store.getState());
        break;
      case "ArrowDown":
        store.dispatch(updateUserDirection({ [DIRECTIONS.DOWN]: true }));
        updateDirection(store.getState().userInput.dir);
        console.log(store.getState());
        break;
      default:
        console.log(store.getState());
      
    }
    });

    document.addEventListener("keyup", function (event) {
      switch (event.key) {
        case "ArrowLeft":
          store.dispatch(updateUserDirection({ [DIRECTIONS.LEFT]: false }));
          updateDirection(store.getState().userInput.dir);
          console.log(store.getState());
          break;
        case "ArrowRight":
          store.dispatch(updateUserDirection({ [DIRECTIONS.RIGHT]: false }));
          updateDirection(store.getState().userInput.dir);
          console.log(store.getState());
          break;
        case "ArrowUp":
          store.dispatch(updateUserDirection({ [DIRECTIONS.UP]: false }));
          updateDirection(store.getState().userInput.dir);
          console.log(store.getState());
          break;
        case "ArrowDown":
          store.dispatch(updateUserDirection({ [DIRECTIONS.DOWN]: false }));
          updateDirection(store.getState().userInput.dir);
          console.log(store.getState());
          break;
        default:
      }
    });
}