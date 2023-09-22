import { UPDATE_USER_DIRECTION } from "../constants/userInput-types";

export function updateUserDirection(direction) {
  return {
    type: UPDATE_USER_DIRECTION,
    dir: direction
  };
}
