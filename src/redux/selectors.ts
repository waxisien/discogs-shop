import { RootState } from "src/redux/reducers";
import { IRecord } from "src/redux/reducers/inventory";

const getCartState = (store: RootState) => store.cart;
const getInventoryState = (store: RootState) => store.inventory;

export const getCartSize = (store: RootState) =>
  getCartState(store).cartIds.length;

const compareRecords = (a: IRecord, b: IRecord) => {
  if (a.artist === b.artist) {
    return a.name > b.name ? 1 : -1;
  }
  return a.artist > b.artist ? 1 : -1;
};

export const getRecordsSorted = (store: RootState) =>
  Object.values(getInventoryState(store).data).sort(compareRecords);
