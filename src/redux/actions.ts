import { ADD_TO_CART, CLEAR_CART } from "src/redux/actionTypes";

interface AddToCartAction {
  type: typeof ADD_TO_CART
  payload: number
}
export const addToCart = (id: number): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: id,
});

interface ClearCartAction {
  type: typeof CLEAR_CART
}
export const clearCart = (): ClearCartAction => ({
  type: CLEAR_CART,
});

export type CartActionTypes = AddToCartAction | ClearCartAction;
