import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  ADD_ITEM_QTY,
  DEC_ITEM_QTY,
  CLEAR_CART,
} from "../constants";

export const toggleCartDropdown = () => ({ type: TOGGLE_CART_HIDDEN });

export const addCartItem = (item) => ({ type: ADD_CART_ITEM, payload: item });

export const clearCartItem = (id) => ({
  type: CLEAR_CART_ITEM,
  payload: id,
});

export const increaseItemQuantity = (item) => ({
  type: ADD_ITEM_QTY,
  payload: item,
});
export const decreaseItemQuantity = (item) => ({
  type: DEC_ITEM_QTY,
  payload: item,
});

export const clearCart = () => ({ type: CLEAR_CART });
