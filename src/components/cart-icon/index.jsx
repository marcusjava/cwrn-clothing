import React from "react";
import ShopIcon from "../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Icon, Count } from "./styles/cart-icon";

import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

function CartIcon() {
  const dispatch = useDispatch();
  const { hidden } = useSelector((state) => state.cart);
  const totalItems = useSelector((state) => selectCartItemsCount(state));

  return (
    <>
      <Container onClick={() => dispatch(toggleCartDropdown())}>
        <Icon src={ShopIcon} />
        <Count>{totalItems}</Count>
      </Container>
      {!hidden && <CartDropdown />}
    </>
  );
}

export default CartIcon;
