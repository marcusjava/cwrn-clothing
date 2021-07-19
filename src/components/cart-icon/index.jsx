import React from "react";
import { ReactComponent as ShopBag } from "../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

function CartIcon() {
  const dispatch = useDispatch();
  const { hidden } = useSelector((state) => state.cart);
  const totalItems = useSelector((state) => selectCartItemsCount(state));

  return (
    <>
      <div className="cart-icon" onClick={() => dispatch(toggleCartDropdown())}>
        <ShopBag className="shopping-icon" />
        <span className="item-count">{totalItems}</span>
      </div>
      {!hidden && <CartDropdown />}
    </>
  );
}

export default CartIcon;
