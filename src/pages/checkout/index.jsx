import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item";
import StripeButton from "../../components/stripe-button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import { Container, Header, Total, Payment, Block, Alert } from "./styles";

function Checkout() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartTotal = useSelector((state) => selectCartTotal(state));
  /*  const { cartItems, cartTotal } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal,
    })
  ); */

  console.log(cartItems);

  return (
    <Container>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantity</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <Block>
          <span>Remove</span>
        </Block>
      </Header>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>
        <span>Total ${cartTotal}</span>
      </Total>
      <Payment>
        <StripeButton price={cartTotal} />
      </Payment>
      <Alert>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp 01/20 CVV 123
      </Alert>
    </Container>
  );
}

export default Checkout;
