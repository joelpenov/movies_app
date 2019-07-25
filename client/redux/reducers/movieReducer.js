import initialState from "../initialState";
import actionTypes from "../actions/actionTypes";

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case actionTypes.LoadMoviesSuccess:
      return action.movies.map(m => m);
    default:
      return state;
  }
}
