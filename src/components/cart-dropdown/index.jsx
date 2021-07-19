import React from "react";
import CustomButtom from "../custom-button";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCartDropdown } from "../../redux/cart/cartActions";

import "./styles.scss";
import CartItem from "../cart-item";

function CartDropdown() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const goToCheckout = () => {
    dispatch(toggleCartDropdown());
    history.push("/checkout");
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="no-items">You cart is empty</p>
        )}
      </div>
      <CustomButtom inverted onClick={goToCheckout}>
        GO TO CHECKOUT
      </CustomButtom>
    </div>
  );
}

export default CartDropdown;
