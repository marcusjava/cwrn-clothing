import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shopSelectors";
import CollectionPreview from "../collection-preview";
import { Container } from "./styles/collection-overview";

function CollectionOverview() {
  const { collections } = useSelector(
    createStructuredSelector({ collections: selectShopCollections })
  );

  return (
    <Container>
      {Object.keys(collections).map((key) => {
        const { id, title, items } = collections[key];

        return <CollectionPreview key={id} title={title} items={items} />;
      })}
    </Container>
  );
}

export default CollectionOverview;
