import React from "react";
import CustomButton from "../custom-button";
import { useDispatch } from "react-redux";

import "./styles.scss";
import { addCartItem } from "../../redux/cart/cartActions";

function CollectionItem({ item }) {
  const { id, name, imageUrl, price } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItem(item));
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">R$ {price}</span>
      </div>
      <CustomButton className="custom-button" onClick={addToCart}>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
