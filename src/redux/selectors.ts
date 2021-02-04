import { RootState } from "src/redux/reducers";

const getCartState = (store: RootState) => store.cart;

export const getCartSize = (store: RootState) => getCartState(store).cartIds.length;
