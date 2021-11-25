import { takeLatest, call, put, all } from "redux-saga/effects";
import { FETCH_COLLECTIONS_START } from "../constants";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../util/firebase";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

//takeEvery listen for actions specific type

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //passando para proxima action
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    //passando para proxima action
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  //listen for an action
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
