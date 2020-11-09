import React from "react";
import { Link } from "react-router-dom";
import { MyCartTotal } from "../containers/MyCartTotal";
import { SelectedProductList } from "../containers/SelectedProductList";

/**
 * Display the selected list of product
 */
export const MyCartPage = () => {
  return (
    <div className="w-full max-w-screen-md m-auto mt-5">
      <Link to="/">
        <span className="text-gray-600 text-tiny">← Back to Products</span>
      </Link>
      <div className="text-gray-600 font-medium text-xl mt-5">My Cart</div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SelectedProductList />
        <MyCartTotal />
      </React.Suspense>
    </div>
  );
};
