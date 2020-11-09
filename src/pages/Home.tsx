import React from "react";
import { ProductList } from "../containers/ProductList";

export const HomePage = () => (
  <div className="w-full max-w-screen-lg m-auto">
    <React.Suspense fallback={<div>Loading...</div>}>
      <ProductList />
    </React.Suspense>
  </div>
);
