import React from "react";
import { Product, ProductProps } from "./Product";

export interface ProductListProps {
  products: Array<ProductProps>;
}

/**
 * Display a list of Products
 */
export const ProductList: React.FC<ProductListProps> = ({
  products,
  ...props
}) => {
  return (
    <div className="max-w-screen-sm m-auto">
      {products.map((product) => (
        <div className="mt-4" key={product.name}>
          <Product {...product} />
        </div>
      ))}
    </div>
  );
};
