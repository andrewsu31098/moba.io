import { UPDATE_USER_DIRECTION, DIRECTIONS } from "../constants/userInput-types";

const initialState = {
  dir: DIRECTIONS.NONE
};

export default function userInputReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DIRECTION:
      return {
        ...state,
        dir: action.dir
      };
    default:
      return state;
  }
}
