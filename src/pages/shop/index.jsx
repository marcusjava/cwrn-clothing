import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "../collection";
import { useDispatch, useSelector } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../util/firebase";
import { updateCollections } from "../../redux/shop/shopActions";
import { selectShopCollections } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner";

// import { Container } from './styles';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsWithSpinner = WithSpinner(Collection);

function Shop() {
  const dispatch = useDispatch();

  let match = useRouteMatch();

  const { collections } = useSelector(
    createStructuredSelector({ collections: selectShopCollections })
  );

  const { loading } = useSelector((state) => state.shop);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(updateCollections(collections));
      }
    );
    return () => {
      unsubscribeFromSnapshot();
    };
  }, []);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewWithSpinner(loading)}
      />
      <Route
        path={`${match.path}/:collection_name`}
        component={CollectionsWithSpinner(loading)}
      />
    </div>
  );
}

export default Shop;
