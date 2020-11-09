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

/**
 * Get the list of the selected product
 */
export const selectedProductList = selector({
  key: "selectedProductList",
  get: ({ get }) => {
    return get(productListQuery).filter(
      (product) => get(selectedProductsIdState).indexOf(product.id) !== -1
    );
  },
});

/**
 * Get the total price of the selected products
 */
export const selectedProductTotalPrice = selector({
  key: "selectedProductTotalPrice",
  get: ({ get }) => {
    return get(selectedProductList).reduce((total, p) => {
      return total + parseFloat(p.price);
    }, 0);
  },
});
