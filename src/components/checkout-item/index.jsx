import React from "react";
import {
  clearCartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/cart/cartActions";
import { useDispatch } from "react-redux";

import "./styles.scss";

function CheckoutItem({ item }) {
  const { id, imageUrl, name, quantity, price } = item;
  const dispatch = useDispatch();

  const decItemQty = () => {
    dispatch(decreaseItemQuantity({ ...item, quantity: quantity - 1 }));
  };

  const addItemQty = () => {
    dispatch(increaseItemQuantity({ ...item, quantity: quantity + 1 }));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={decItemQty}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemQty}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearCartItem(id))}
      >
        &#10005;
      </span>
    </div>
  );
}

export default CheckoutItem;
