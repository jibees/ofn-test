import { selector } from "recoil";
import { getProductList } from "../../api/api";
/**
 * Selector in the global state to look for the productList
 */
export const productListQuery = selector({
  key: "productList",
  get: async ({ get }) => {
    return await getProductList();
  },
});