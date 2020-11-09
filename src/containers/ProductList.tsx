import React from "react";
import { ProductApi } from "../api/api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedProductsIdState } from "../state/selectedProducts";
import { ProductList as ProductListComponent } from "../components/product/ProductList";
import { ProductFamily, ProductProps } from "../components/product/Product";
import { productListQuery } from "../state/productList";

/**
 * Mapper to transform a product from api to a product for <Product /> Component
 * @param apiProduct
 */
export const fromApiToComponentMapper = (
  product: ProductApi
): ProductProps => ({
  id: product.id,
  name: product.name,
  image: product.images.thumb_url,
  description: product.description,
  price: product.price,
  quantity: product.unit_to_display,
  family: product.taxon.name as ProductFamily,
});

export function ProductList() {
  const productList = useRecoilValue(productListQuery);
  const setSelectedProduct = useSetRecoilState(selectedProductsIdState);
  const productListForComponent = productList
    .map(fromApiToComponentMapper)
    .map((p) => ({
      ...p,
      // For each produc, add its own handler to add the current product in the cart
      addToCartHandler: (id: number) => {
        // Add the current product in the oldList of selectedProductsId
        setSelectedProduct((oldList) => [...oldList, id]);
      },
    }));
  return <ProductListComponent products={productListForComponent} />;
}
