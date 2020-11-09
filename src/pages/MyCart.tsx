import React from "react";
import { SelectedProductList } from "../containers/SelectedProductList";

/**
 * Display the selected list of product
 */
export const MyCartPage = () => {
  return (
    <div className="w-full max-w-screen-lg m-auto">
      <React.Suspense fallback={<div>Loading...</div>}>
        <SelectedProductList />
      </React.Suspense>
    </div>
  );
};
