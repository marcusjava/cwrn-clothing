import React from "react";
import CustomButton from "../custom-button";
import { useDispatch } from "react-redux";

import { addCartItem } from "../../redux/cart/cartActions";
import { Container, Image, Footer } from "./styles/collection-item";

function CollectionItem({ item }) {
  const { id, name, imageUrl, price } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItem(item));
  };
  return (
    <Container>
      <Image
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">R$ {price}</span>
      </Footer>
      <CustomButton className="custom-button" onClick={addToCart}>
        ADD TO CART
      </CustomButton>
    </Container>
  );
}

export default CollectionItem;
