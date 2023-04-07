import { SAVE_SEARCH_RESULT, SEARCH_PLACE } from '../constants/actionTypes';

const initialState = {
  searchResult: null,
  searchHistory: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PLACE:
      return {
        ...state,
        searchResult: null 
      };
    case SAVE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
        searchHistory: [action.payload, ...state.searchHistory] 
      };
    default:
      return state;
  }
};

export default searchReducer;

