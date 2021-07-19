import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item";
import StripeButton from "../../components/stripe-button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import "./styles.scss";

function Checkout() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartTotal = useSelector((state) => selectCartTotal(state));
  /*  const { cartItems, cartTotal } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal,
    })
  ); */
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>Total ${cartTotal}</span>
      </div>
      <div className="payment">
        <StripeButton price={cartTotal} />
      </div>
      <div className="pay_alert">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp 01/20 CVV 123
      </div>
    </div>
  );
}

export default Checkout;
