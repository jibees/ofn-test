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
          return oldList.filter((item) => item !== id);
        });
      },
    }));
  return <ProductListComponent products={productListForComponent} />;
}
