import React from 'react';
import { Product, ProductProps } from './Product';

export interface ProductListProps {
    products: Array<ProductProps>
}

/**
 * Display a list of Products
 */
export const ProductList: React.FC<ProductListProps> = ({
   products,
    ...props 
}) => {
  return (
    <div className="max-w-screen-sm">
        {products.map(product => (
            <div className="mt-4">
                <Product {...product} />
            </div>
        ))}
    </div>
  );
};