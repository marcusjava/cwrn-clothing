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
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </Container>
  );
}

export default CollectionOverview;
