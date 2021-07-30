import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../util/firebase";
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "../constants";

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});
export const fetchCollectionsStartAsync = () => (dispatch) => {
  console.log("fetch collections");
  dispatch(fetchCollectionsStart());
  const collectionRef = firestore.collection("collections");

  collectionRef
    .get()
    .then(async (snapshot) => {
      const collections = await convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collections));
    })
    .catch((error) => {
      dispatch(fetchCollectionsFailure(error.message));
    });
};

export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (message) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: message,
});
