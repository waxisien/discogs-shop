import { InventoryActionTypes } from "src/redux/actions";
import { INIT_INVENTORY } from "src/redux/actionTypes";

export interface IRecord {
  recordId: string;
  artist: string;
  name: string;
  format: string;
  picture: string;
  priceAmount: number;
  priceCurrency: string;
}

interface IRecordObject {
  [recordId: string]: IRecord;
}

interface IInventoryState {
  data: IRecordObject;
}

const initialState: IInventoryState = {
  data: {},
};

export default function inventoryReducer(
  state = initialState,
  action: InventoryActionTypes
): IInventoryState {
  switch (action.type) {
    case INIT_INVENTORY: {
      return {
        ...state,
        data: action.records.reduce((obj: IRecordObject, record: IRecord) => {
          obj[record.recordId] = record;
          return obj;
        }, {}),
      };
    }

    default:
      return state;
  }
}
