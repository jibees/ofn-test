import { atom, selector } from "recoil";
import { productListQuery } from "../productList";

/**
 * Piece of state where selected products id are stored
 */
export const selectedProductsIdState = atom<number[]>({
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

export const selectedProductList = selector({
  key: "selectedProductList",
  get: ({ get }) => {
    return get(productListQuery).filter(
      (product) => get(selectedProductsIdState).indexOf(product.id) !== -1
    );
  },
});
