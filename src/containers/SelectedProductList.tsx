import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ProductList as ProductListComponent } from "../components/product/ProductList";
import {
  selectedProductList,
  selectedProductsIdState,
} from "../state/selectedProducts";
import { fromApiToComponentMapper } from "./ProductList";

export function SelectedProductList() {
  const productList = useRecoilValue(selectedProductList);
  const setSelectedProduct = useSetRecoilState(selectedProductsIdState);
  const productListForComponent = productList
    .map(fromApiToComponentMapper)
    .map((p) => ({
      ...p,
      inMyCart: true,
      // For each product, add its own handler to remove the current product from 'My Cart'
      removeHandler: (id: number) => {
        // Remove the current product in the oldList of selectedProductsId
        setSelectedProduct((oldList) => {
          const idx = oldList.findIndex((item) => item === id);
          const ret = oldList.slice();
          ret.splice(idx, 1);
          return ret;
        });
      },
    }));
  if (productListForComponent.length === 0) {
    return (
      <div className="w-full text-center text-gray-600 mt-20">
        Empty cart, no fun ;(
      </div>
    );
  }
  return <ProductListComponent products={productListForComponent} />;
}
