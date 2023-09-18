import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/combine";

export default configureStore({
  reducer: appReducer,
});
