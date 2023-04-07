import { SET_MAP_CENTER } from '../constants/actionTypes';

const initialState = {
  center: { lat: 0, lng: 0 },
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MAP_CENTER:
      return {
        ...state,
        center: action.payload.center,
      };
    default:
      return state;
  }
}

