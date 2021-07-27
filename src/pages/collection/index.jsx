import React from "react";
import CollectionItem from "../../components/collection-item";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { useSelector } from "react-redux";
import { Container, Items, Title } from "./styles";

function Collection() {
  const { collection_name } = useParams();

  const { collections } = useSelector(
    createStructuredSelector({
      collections: selectCollection(collection_name),
    })
  );
  return (
    <Container>
      <Title>{collections.title}</Title>
      <Items>
        {collections.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
}

export default Collection;
