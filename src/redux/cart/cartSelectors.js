import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce((acc, item) => {
    return (acc + item.price) * item.quantity;
  }, 0)
);
