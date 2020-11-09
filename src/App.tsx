import React from "react";
import "./assets/main.css";
import { RecoilRoot } from "recoil";
import { ProductList } from "./containers/ProductList";
import { Header } from "./containers/Header";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Header />
        <div className="w-full max-w-screen-lg m-auto">
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </React.Suspense>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
