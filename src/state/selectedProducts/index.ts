
import { atom, selector } from "recoil";

/**
 * Piece of state where selected products id are stored
 */
export const selectedProductsIdState = atom({
  key: "selectedProductsId",
  default: [],
});

/**
 * Retrieve the selected products count
 */
export const selectedProductsCount = selector({
  key: "selectedProductsCount",
  get: ({ get }) => {
    return get(selectedProductsIdState).length;
  },
});
