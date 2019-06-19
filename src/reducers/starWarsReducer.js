import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  error: null,
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTERS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      console.log("what even is success", action.payload);
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCH_CHARACTERS_FAILURE:
      console.log("what even is failure", action.payload);
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
