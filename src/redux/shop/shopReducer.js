import { UPDATE_COLLECTIONS, LOADING_COLLECTIONS } from "../constants";

const INITIAL_STATE = {
  collections: null,
  loading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
      };
    case LOADING_COLLECTIONS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default shopReducer;
