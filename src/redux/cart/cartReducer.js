import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  ADD_ITEM_QTY,
  DEC_ITEM_QTY,
} from "../constants";
import { addCartToItem, removeItemFromCart, addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartToItem(state.cartItems, action.payload),
      };

    case CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case ADD_ITEM_QTY:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case DEC_ITEM_QTY:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
