import { CartActionTypes } from "src/redux/actions";
import { ADD_TO_CART, CLEAR_CART } from "src/redux/actionTypes";

interface CartState {
  cartIds: string[];
}

const initialState: CartState = {
  cartIds: [],
};

export default function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartIds: [...state.cartIds, action.recordId],
      };
    }

    case CLEAR_CART: {
      return initialState;
    }

    default:
      return state;
  }
}
