import React from "react";
import { Container, Detail, Item, Image } from "./styles/cart-item";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <Container>
      <Image src={imageUrl} alt="item" />
      <Detail>
        <Item>{name}</Item>
        <Item>
          {quantity} x ${price}
        </Item>
      </Detail>
    </Container>
  );
}

export default CartItem;
