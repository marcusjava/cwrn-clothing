import React from "react";
import CollectionOverview from "../../components/collection-overview";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "../collection";

// import { Container } from './styles';

function Shop() {
  let match = useRouteMatch();

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collection_name`} component={Collection} />
    </div>
  );
}

export default Shop;
