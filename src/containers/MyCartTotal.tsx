import React from "react";
import { useRecoilValue } from "recoil";
import {
  selectedProductList,
  selectedProductTotalPrice,
} from "../state/selectedProducts";

export function MyCartTotal() {
  const productList = useRecoilValue(selectedProductList);
  const totalPrice = useRecoilValue(selectedProductTotalPrice);
  if (productList.length === 0) {
    return null;
  }
  return (
    <div className="w-full text-gray-600 mt-5">
      <span className="font-bold">Total: €{totalPrice}</span>
    </div>
  );
}
