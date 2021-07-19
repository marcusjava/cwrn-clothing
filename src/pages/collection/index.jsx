import React from "react";
import CollectionItem from "../../components/collection-item";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { useSelector } from "react-redux";
import "./styles.scss";

function Collection() {
  const { collection_name } = useParams();

  const { collections } = useSelector(
    createStructuredSelector({
      collections: selectCollection(collection_name),
    })
  );
  return (
    <div className="collection-page">
      <h2 className="title">{collections.title}</h2>
      <div className="items">
        {collections.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
