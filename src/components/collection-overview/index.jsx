import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shopSelectors";
import CollectionPreview from "../collection-preview";

import "./styles.scss";

function CollectionOverview() {
  const { collections } = useSelector(
    createStructuredSelector({ collections: selectShopCollections })
  );
  return (
    <div className="collection-overview">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
}

export default CollectionOverview;
