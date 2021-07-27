import React from "react";
import CollectionItem from "../collection-item";

import { Container, Title, Preview } from "./styles/collection-preview";

function CollectionPreview({ title, items }) {
  return (
    <Container>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </Container>
  );
}

export default CollectionPreview;
