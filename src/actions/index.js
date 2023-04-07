import * as actionTypes from "../constants/actionTypes";

export const searchPlacesRequest = (inputValue) => ({
  type: actionTypes.SEARCH_PLACES_REQUEST,
  payload: { inputValue },
});

export const searchPlacesSuccess = (places) => ({
  type: actionTypes.SEARCH_PLACES_SUCCESS,
  payload: { places },
});

export const searchPlacesFailure = (error) => ({
  type: actionTypes.SEARCH_PLACES_FAILURE,
  payload: { error },
});

