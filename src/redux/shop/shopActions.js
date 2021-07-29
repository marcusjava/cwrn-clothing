import { UPDATE_COLLECTIONS } from "../constants";

export const updateCollections = (collections) => ({
  type: UPDATE_COLLECTIONS,
  payload: collections,
});
