import { atom, selector } from "recoil";
import { ProductApi } from "../../api/api";
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
export const selectedProductList = selector<ProductApi[]>({
  key: "selectedProductList",
  get: ({ get }) => {
    const productList = get(productListQuery);
    const selectedProductIds = get(selectedProductsIdState);
    const ret = selectedProductIds.map((id) => {
      return productList.find((p) => p.id === id);
    }) as ProductApi[];
    return ret;
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
