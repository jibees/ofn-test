import React from "react";
import { useRecoilValue } from "recoil";
import { ProductList as ProductListComponent } from "../components/product/ProductList";
import { selectedProductList } from "../state/selectedProducts";
import { fromApiToComponentMapper } from "./ProductList";

export function SelectedProductList() {
  const productList = useRecoilValue(selectedProductList);
  const productListForComponent = productList.map(fromApiToComponentMapper);
  return <ProductListComponent products={productListForComponent} />;
}
