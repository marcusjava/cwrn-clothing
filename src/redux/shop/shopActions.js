import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "../constants";

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (message) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: message,
});
