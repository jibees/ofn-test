import React from 'react';
import { Button } from './button/Button';

export interface ProductProps {
    /** 
     * The display name of the product
    */
    name: string,
    /**
     * Define its image (stored in public folder)
     */
    image: string,
    /**
     * The price per unit
     */
    price: number,
    /**
     * A user friendly description
     */
    description: string,
    /**
     * Family of the product
     */
    family: "vegetables" | "fruits",
    /**
     * Define a displayable quantity (quantity + unit)
     */
    quantity: string,
}

/**
 * Display a Product
 */
export const Product: React.FC<ProductProps> = ({
    name, 
    image,
    price,
    description,
    quantity,
    family,
    ...props 
}) => {
  return (
    <div className="w-full max-w-full flex shadow border rounded border-gray-400 p-4">
        <img className="w-12 h-12 mt-4" src={image} alt="bag"></img>
         <div className="px-4 py-4 w-full ">
            <div className="flex items-baseline justify-between w-full">
                <div className="flex items-baseline">
                    <h2 className="text-lg font-medium mr-auto">{name}</h2>
                    <p className="ml-4 text-tiny text-gray-600 tracking-tighter">
                        {quantity}
                    </p>
                </div>
                <div className="py-1 px-2 rounded-lg text-white text-tiny bg-ofn-green uppercase font-bold">
                    {family}
                </div>
            </div>
            <p className="text-tiny text-gray-600 mt-4">
                {description}
            </p>
             <div className="flex items-centet justify-between w-full mt-4">
                <div >
                    Price<span className="ml-2 text-gray-600 text-tiny">&euro;{price}</span>
                </div>
                <Button label="Add to cart" />
            </div>
         </div>
         
    </div>
  );
};
