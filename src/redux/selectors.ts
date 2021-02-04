import { RootState } from "./reducers";

const getCartState = (store: RootState) => store.cart;

export const getCartSize = (store: RootState) => getCartState(store).cartIds.length;
