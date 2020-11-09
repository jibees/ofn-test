import React from "react";
import { selector } from "recoil";
import { getProductList, ProductApi } from "../api/api";
import { useRecoilValue } from "recoil";
import { ProductList as ProductListComponent } from "../components/product/ProductList";
import { ProductFamily, ProductProps } from "../components/product/Product";

/**
 * Selector in the global state to look for the productList
 */
const productListQuery = selector({
  key: "productList",
  get: async ({ get }) => {
    return await getProductList();
  },
});

/**
 * Mapper to transform a product from api to a product for <Product /> Component
 * @param apiProduct
 */
const fromApiToComponentMapper = (product: ProductApi): ProductProps => ({
  name: product.name,
  image: product.images.thumb_url,
  description: product.description,
  price: product.price,
  quantity: product.unit_to_display,
  family: product.taxon.name as ProductFamily,
});

export function ProductList() {
  const productList = useRecoilValue(productListQuery);
  return (
    <ProductListComponent
      products={productList.map(fromApiToComponentMapper)}
    />
  );
}
