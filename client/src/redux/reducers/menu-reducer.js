import { TOGGLE_MENU_STATE } from "../constants/menu-types";

const initialState = {
    menuState: true,
}

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU_STATE:
      return {
        ...state,
        menuState: !state.menuState 
      }
    default:
      return state;
  }
}
