import { IRecord } from "src/redux/reducers/inventory";
import { ADD_TO_CART, CLEAR_CART, INIT_INVENTORY } from "src/redux/actionTypes";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  recordId: string;
}
export const addToCart = (recordId: string): AddToCartAction => ({
  type: ADD_TO_CART,
  recordId,
});

interface ClearCartAction {
  type: typeof CLEAR_CART;
}
export const clearCart = (): ClearCartAction => ({
  type: CLEAR_CART,
});

export type CartActionTypes = AddToCartAction | ClearCartAction;

interface InitInventoryAction {
  type: typeof INIT_INVENTORY;
  records: IRecord[];
}
export const initInventory = (records: IRecord[]): InitInventoryAction => ({
  type: INIT_INVENTORY,
  records,
});

export type InventoryActionTypes = InitInventoryAction;
