import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "../constants";

const INITIAL_STATE = {
  collections: null,
  loading: true,
  error: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
      };
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
