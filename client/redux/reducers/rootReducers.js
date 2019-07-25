import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const rootReducers = combineReducers({
  movies: movieReducer
});

export default rootReducers;
