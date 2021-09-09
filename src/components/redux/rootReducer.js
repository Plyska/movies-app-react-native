import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";

export const rootReducer = combineReducers({
  movies: likeReducer,
});
