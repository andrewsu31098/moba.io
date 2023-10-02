import { UPDATE_USER_DIRECTION, DIRECTIONS } from "../constants/userInput-types";

const initialState = {
  dir: { [DIRECTIONS.LEFT]: false, [DIRECTIONS.RIGHT]: false, [DIRECTIONS.UP]: false, 
  [DIRECTIONS.DOWN]: false, 
  },
};

export default function userInputReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DIRECTION:
      // Movement is based off of 4 booleans that are toggled on update.
      console.log(state);
      let toggledDirectionValue = !state.dir[action.dir];
      return {
        ...state,
        dir: {...state.dir, ...action.dir}
      };
    default:
      return state;
  }
}
