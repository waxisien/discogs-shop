import { combineReducers } from "redux";

import cartReducer from "src/redux/reducers/cart";
import inventoryReducer from "src/redux/reducers/inventory";

const rootReducer = combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
