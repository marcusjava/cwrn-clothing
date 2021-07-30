import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "../collection";
import { useDispatch, useSelector } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
import { selectShopCollections } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner";

// import { Container } from './styles';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsWithSpinner = WithSpinner(Collection);

function Shop() {
  const dispatch = useDispatch();

  let match = useRouteMatch();

  const { loading } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, []);

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collection_name`}
        render={(props) => (
          <CollectionsWithSpinner isLoading={loading} {...props} />
        )}
      />
    </>
  );
}

export default Shop;
