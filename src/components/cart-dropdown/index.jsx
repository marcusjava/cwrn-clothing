import React from "react";
import CustomButtom from "../custom-button";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { Dropdown, Items, NoItems } from "./styles/cart-dropdown";

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
    <Dropdown>
      <Items>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <NoItems>You cart is empty</NoItems>
        )}
      </Items>
      <CustomButtom inverted onClick={goToCheckout}>
        GO TO CHECKOUT
      </CustomButtom>
    </Dropdown>
  );
}

export default CartDropdown;
